// Saves the visible text of each route at 1280px to .snapshots/<label>/<route>.txt.
// Usage: node scripts/snapshot.mjs <label> [baseUrl]   (needs `npm run dev` running)
import { mkdir, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { chromium } from 'playwright'

const label = process.argv[2] ?? 'before'
const base = process.argv[3] ?? 'http://localhost:5173/prototype_website'
const routes = ['home', 'why-choose-us', 'about-us', 'projects', 'pricing', 'contact']

// Use Playwright's bundled browser; fall back to any installed Chromium build.
async function launch() {
  try {
    return await chromium.launch()
  } catch (err) {
    const root = join(process.env.LOCALAPPDATA ?? '', 'ms-playwright')
    const exe = ['chromium-1243', 'chromium-1200', 'chromium-1194']
      .map((d) => join(root, d, 'chrome-win64', 'chrome.exe'))
      .find(existsSync)
    if (!exe) throw err
    return chromium.launch({ executablePath: exe })
  }
}

const out = join('.snapshots', label)
await mkdir(out, { recursive: true })
const browser = await launch()
const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce' })

for (const route of routes) {
  await page.goto(`${base}/${route}`, { waitUntil: 'networkidle' })
  // Scroll through so scroll-revealed content is mounted.
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 500) {
      window.scrollTo(0, y)
      await new Promise((r) => setTimeout(r, 50))
    }
    window.scrollTo(0, 0)
  })
  await page.waitForTimeout(500)
  const text = await page.evaluate(() =>
    document.body.innerText
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean)
      .join('\n'),
  )
  await writeFile(join(out, `${route}.txt`), text + '\n')
  console.log(`${route}: ${text.split('\n').length} lines`)
}
await browser.close()
