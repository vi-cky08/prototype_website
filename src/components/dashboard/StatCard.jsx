
import { ArrowUpRight } from "lucide-react";

export default function StatCard({
  title,
  value,
  icon: Icon,
  description,
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            {value ?? 0}
          </h2>
        </div>

        <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
          {Icon && <Icon size={25} />}
        </div>
      </div>

      <div className="mt-5 flex items-center gap-1 text-xs text-slate-500">
        <ArrowUpRight size={15} />
        {description}
      </div>
    </div>
  );
}
