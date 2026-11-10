
import {
  Clock3,
  ShieldCheck,
  Settings,
  Headset,
  Paintbrush,
  Monitor,
  Package,
  Star,
} from 'lucide-react';

// PRIORITY PLANS
const priorityPlans = [
  {
    name: 'Small',
    subtitle: 'Standard Scheduling',
    hours: '800',
    rate: '₹150',
    monthly: '₹1,20,000',
    samples: '1 Free Sample',
  },
  {
    name: 'Medium',
    subtitle: 'Priority Scheduling',
    hours: '1,000',
    rate: '₹110',
    monthly: '₹1,10,000',
    samples: '2 Free Samples',
    best: true,
  },
  {
    name: 'Large',
    subtitle: 'Highest Priority',
    hours: '1,200',
    rate: '₹90',
    monthly: '₹1,08,000',
    samples: '3 Free Samples',
  },
];

// BOTTOM FEATURES
const features = [
  {
    icon: Clock3,
    title: 'Priority',
    subtitle: 'Production',
  },
  {
    icon: ShieldCheck,
    title: 'Consistent',
    subtitle: 'Quality',
  },
  {
    icon: Settings,
    title: 'Industrial-Grade',
    subtitle: 'FDM Printing',
  },
  {
    icon: Headset,
    title: 'Dedicated',
    subtitle: 'Support',
  },
];

// PRIORITY CARD
function PriorityCard({ plan }) {
  return (
    <article
      className="
        relative overflow-hidden rounded-2xl
        border border-blue-200
        bg-white shadow-sm
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg
      "
    >
      {/* PLAN HEADER */}

      <div
        className="
          bg-white
          px-3 py-4
          text-center
        "
      >
        <h3
          className="
            text-xl font-semibold
            text-[#24436F]
            sm:text-2xl
          "
        >
          {plan.name}
        </h3>

        <p
          className="
            mt-1 text-sm font-normal
            text-slate-500 sm:text-base
          "
        >
          {plan.subtitle}
        </p>
      </div>

      {/* PLAN DETAILS */}

      <div className="p-4 sm:p-5">

        {/* MACHINE HOURS */}

        <p
          className="
            text-center text-base
            font-semibold text-[#29466F]
            sm:text-lg
          "
        >
          {plan.hours} Machine Hours / Month
        </p>

        <div className="my-2 border-t border-blue-200" />

        {/* HOURLY PRICE */}

        <p className="text-center">
          <span
            className="
              text-2xl font-semibold
              text-[#3478B8]
              sm:text-3xl
            "
          >
            {plan.rate}
          </span>

          <span
            className="
              text-base font-medium
              text-[#405675]
            "
          >
            {' '}/ Hour
          </span>
        </p>

        {/* MONTHLY PRICE */}

        <div
          className="
            mt-3 rounded-lg
            bg-[#102D5C]
            px-3 py-3
            text-center text-white
          "
        >
          <span
            className="
              text-lg font-semibold
              text-white sm:text-xl
            "
          >
            {plan.monthly}
          </span>

          <span
            className="
              ml-2 text-sm font-normal
              text-white
            "
          >
            / Month
          </span>
        </div>

        {/* FREE SAMPLES */}

        <div
          className="
            mt-3 flex items-center
            justify-center gap-3
            rounded-lg
            bg-[#DBEEFF]
            px-3 py-3
          "
        >
          <Package
            size={30}
            className="shrink-0 text-blue-600"
          />

          <div>
            <p
              className="
                text-base font-semibold
                text-[#29466F]
                sm:text-lg
              "
            >
              {plan.samples}
            </p>

            <p
              className="
                text-sm font-normal
                text-slate-600
              "
            >
              (≤ 200 g each)
            </p>
          </div>
        </div>

      </div>
    </article>
  );
}

// MAIN PRIORITY PLANS COMPONENT
export default function PriorityPlans() {
  return (
    <section
      className="
        mt-16
        border-y border-blue-100
        bg-gradient-to-b bg-transparent to-white
        py-12 sm:py-14
      "
    >
      <div className="container-site">

        {/* SECTION HEADING */}

        <div className="mb-8 text-center">

          <p
            className="
              text-sm font-semibold uppercase
              tracking-[0.18em]
              text-blue-700
            "
          >
            Production Scheduling
          </p>

          <h2
            className="
              mt-2 text-3xl font-bold
              tracking-tight text-[#24436F]
              sm:text-4xl
            "
          >
            Rapid Prototyping Packages
          </h2>

          <p
            className="
              mx-auto mt-3 max-w-2xl
              text-sm leading-6
              text-slate-600 sm:text-base
            "
          >
            Flexible machine-hour packages designed
            around your production requirements.
          </p>

        </div>

        {/* THREE PRIORITY CARDS */}

        <div
          className="
            grid grid-cols-1 gap-5
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {priorityPlans.map((plan) => (
            <div
              key={plan.name}
              className="relative pt-3"
            >

              {/* BEST VALUE BADGE */}

              {plan.best && (
                <div
                  className="
                    absolute left-1/2 top-0 z-10
                    -translate-x-1/2 -translate-y-1/2
                    flex items-center gap-1
                    whitespace-nowrap
                    rounded-full
                    bg-[#102D5C]
                    px-5 py-1.5
                    text-sm font-semibold
                    text-white shadow-md
                  "
                >
                  <Star
                    size={15}
                    fill="currentColor"
                  />
                  Best Value
                </div>
              )}

              <PriorityCard plan={plan} />

            </div>
          ))}
        </div>

        {/* BOTTOM FEATURES + ADDITIONAL SERVICES */}

        <div
          className="
            mt-6 grid grid-cols-1 gap-4
            xl:grid-cols-[2fr_1.1fr]
          "
        >

          {/* FEATURES */}

          <div
            className="
              grid grid-cols-2
              overflow-hidden rounded-2xl
              border border-blue-200
              bg-white shadow-sm
              sm:grid-cols-4
            "
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className={`
                    flex flex-col items-center
                    justify-center gap-2
                    px-3 py-6 text-center
                    ${index !== 0 ? 'border-l border-blue-100' : ''}
                  `}
                >
                  <Icon
                    size={35}
                    strokeWidth={2}
                    className="text-blue-500"
                  />

                  <p
                    className="
                      text-sm font-semibold
                      leading-tight text-[#29466F]
                    "
                  >
                    {feature.title}
                    <br />
                    {feature.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* ADDITIONAL SERVICES */}

          <div
            className="
              rounded-2xl
              bg-[#102D5C]
              px-5 py-6
              text-white shadow-md
            "
          >
            <h3
              className="
                mb-5 text-center
                text-lg font-semibold
                !text-white
              "
            >
              Additional Services
            </h3>

            <div className="grid grid-cols-2 gap-4">

              {/* FINISHING */}

              <div
                className="
                  flex items-start gap-2
                  border-r border-white/30 pr-3
                "
              >
                <Paintbrush
                  size={28}
                  className="shrink-0 text-white"
                />

                <div>
                  <p className="text-sm font-semibold !text-white">
                    Finishing
                  </p>

                  <p className="mt-1 text-sm font-medium !text-white">
                    ₹1,000 / Hour
                  </p>

                  <p className="mt-1 text-xs font-normal text-blue-100">
                    Bulk: ₹800 / Hour
                  </p>
                </div>
              </div>

              {/* CAD DESIGN */}

              <div className="flex items-start gap-2">
                <Monitor
                  size={28}
                  className="shrink-0 text-white"
                />

                <div>
                  <p className="text-sm font-semibold !text-white">
                    CAD Design & Engineering
                  </p>

                  <p className="mt-2 text-xs font-normal text-blue-100">
                    Quoted Separately
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
