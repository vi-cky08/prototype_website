
import {
  ArrowRight,
  TrendingUp,
  Target,
  Lightbulb
} from 'lucide-react';

import Card from './Card.jsx';

function Detail({ label, text }) {
  const Icon = label === 'Challenge' ? Target : Lightbulb;

  return (
    <div className="flex items-start gap-2">

      <Icon
        size={17}
        strokeWidth={2.2}
        className="mt-0.5 shrink-0 text-blue-700"
      />

      <div>
        <p className="text-[12px] font-extrabold tracking-wide text-[#102F5E] uppercase">
          {label}
        </p>

        <p className="mt-0.5 text-[13px] font-medium leading-snug text-[#172B4D]">
          {text}
        </p>
      </div>

    </div>
  );
}

export default function ProjectCard({ project, onView }) {
  return (
    <Card
      as="article"
      className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md"
    >

      {/* FIXED IMAGE */}
      <div className="relative h-[180px] w-full shrink-0 overflow-hidden p-1.5">

        <img
          src={project.image}
          alt={project.title}
          width="400"
          height="180"
          loading="lazy"
          className="block h-full w-full rounded-lg object-cover object-center"
        />

        {/* CATEGORY BADGES */}
        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between gap-2">

          <span className="rounded-md bg-blue-700 px-3 py-1 text-[10px] font-bold text-white">
            {project.category}
          </span>

          {project.workType && (
            <span className="rounded-md bg-blue-700 px-3 py-1 text-[10px] font-bold text-white">
              {project.workType}
            </span>
          )}

        </div>
      </div>

      {/* CARD CONTENT */}
      <div className="flex flex-1 flex-col gap-3 p-4">

        {/* TITLE */}
        <h3 className="text-[17px] font-extrabold tracking-tight text-[#102F5E]">
          {project.title}
        </h3>

        {/* CHALLENGE */}
        <Detail
          label="Challenge"
          text={project.challenge}
        />

        {/* SOLUTION */}
        <Detail
          label="Solution"
          text={project.solution}
        />

        {/* RESULT */}
        <div className="rounded-lg border-l-[4px] border-green-600 bg-green-50 px-3 py-2">

          <p className="flex items-center gap-1.5 text-[12px] font-extrabold text-green-700 uppercase">
            <TrendingUp size={16} />
            Result
          </p>

          <p className="mt-1 text-[13px] font-semibold leading-snug text-[#172B4D]">
            {project.result}
          </p>

        </div>

        {/* VIEW PROJECT */}
        <button
          type="button"
          onClick={() => onView(project)}
          className="mt-auto inline-flex min-h-9 items-center gap-2 self-start text-[14px] font-bold text-blue-700 hover:text-blue-900"
        >
          View Project
          <ArrowRight size={18} />

          <span className="sr-only">
            : {project.title}
          </span>
        </button>

      </div>
    </Card>
  );
}
