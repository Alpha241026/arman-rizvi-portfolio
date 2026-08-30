type Entry = {
  n: string;
  title: string;
  period: string;
  theme: string[];
  body: string[];
  observation: string;
};

const entries: Entry[] = [
  {
    n: "01",
    title: "First Contact",
    period: "Class 7 → 12",
    theme: ["HTML", "Java", "Python"],
    body: [
      "The beginning wasn't particularly glamorous. HTML in class 7, Java soon after, then years of loops, conditionals, arrays and increasingly ambitious attempts to understand what programming actually meant.",
      "There were plenty of copied experiments too — games, vending-machine logic, random things found online — usually far beyond what I could properly understand.",
    ],
    observation: "Curiosity arrived before foundation.",
  },
  {
    n: "02",
    title: "The Wide Path",
    period: "College / early exploration",
    theme: [
      "Python",
      "JavaScript",
      "Web",
      "Flutter",
      "Cloud",
      "Cybersecurity",
      "Hackathons",
    ],
    body: [
      "College opened the floodgates.",
      "Instead of settling on one direction, I tried almost everything that looked interesting — web development, app development, cloud, cybersecurity, hackathons, open source, backend technologies.",
      "Some stuck. Some didn't.",
      "Flutter was exciting until every small feature demanded twice the effort. Node.js increasingly felt like memorising patterns. Open source looked appealing, but finding genuinely beginner-friendly entry points proved harder than expected.",
      "And somewhere along the way, breadth started becoming the problem.",
    ],
    observation: "Breadth without depth was becoming its own obstacle.",
  },
  {
    n: "03",
    title: "First Real Systems",
    period: "2025 → 2026",
    theme: ["MemoryTrail", "SynClip"],
    body: [
      "This is where experimentation finally started turning into things that actually existed.",
      "MemoryTrail introduced full-stack development, backend models, authentication, databases and API integration.",
      "SynClip introduced a different problem: getting two clients to share state in real time.",
      "Neither project was perfect. That's kind of the point.",
      "They were early evidence that I could move from 'I want to learn this' to 'I built something with it.'",
    ],
    observation: "Experiments became systems.",
  },
  {
    n: "04",
    title: "The Turn",
    period: "2026",
    theme: ["Go", "Flask", "PostgreSQL", "REST", "DSA"],
    body: [
      "Eventually I stopped asking: 'What technology should I learn next?' and started asking: 'What kind of engineer do I actually want to become?'",
      "Backend started making more sense.",
      "Go became the language I wanted to build around. Databases and APIs became things worth understanding rather than simply passing through. DSA entered the picture.",
      "The direction isn't completely finished.",
      "But it finally feels like a direction.",
    ],
    observation: "Less random wandering. More deliberate depth.",
  },
];

function Node({ filled = false }: { filled?: boolean }) {
  return (
    <span aria-hidden className="relative flex h-3 w-3 shrink-0 items-center justify-center">
      {/* crosshair ring behind the diamond */}
      <span className="absolute h-3.5 w-3.5 rounded-full border border-accent/40" />
      <span
        className={`h-2 w-2 rotate-45 border border-accent ${filled ? "bg-accent" : "bg-background"}`}
      />
    </span>
  );
}

function ThemeList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1">
      {items.map((t, i) => (
        <li key={t} className="flex items-center gap-2">
          {i > 0 && (
            <span aria-hidden className="text-accent/60">
              ·
            </span>
          )}
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-foreground/75">
            {t}
          </span>
        </li>
      ))}
    </ul>
  );
}

function JournalEntry({ entry, isLast }: { entry: Entry; isLast: boolean }) {
  return (
    <article className="group relative grid gap-x-8 gap-y-4 pl-9 md:grid-cols-[10rem_1fr] md:pl-14">
      {/* node on the spine */}
      <span className="absolute left-0 top-1.5 -translate-x-1/2">
        <Node />
      </span>
      {/* connector rule from spine to entry */}
      <span
        aria-hidden
        className="absolute left-0 top-[0.72rem] h-px w-6 bg-accent/40 md:w-10"
      />

      <header className="md:text-right">
        <span className="label-field text-accent">Entry {entry.n}</span>
        <h3 className="mt-2 font-display text-2xl leading-tight text-primary md:text-[1.6rem]">
          {entry.title}
        </h3>
        <p className="mt-1.5 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
          {entry.period}
        </p>
        <div className="md:flex md:justify-end">
          <div className="md:max-w-[10rem] md:text-right">
            <ThemeList items={entry.theme} />
          </div>
        </div>
      </header>

      <div className="max-w-2xl pb-14 md:pb-20">
        {/* hairline register rule above the body */}
        <span aria-hidden className="mb-5 block h-px w-10 bg-accent/50" />
        {entry.body.map((p) => (
          <p key={p.slice(0, 24)} className="mb-3 text-sm leading-relaxed text-foreground/85 last:mb-0">
            {p}
          </p>
        ))}
        {/* observation: drafting-bracketed field conclusion */}
        <p className="mt-6 flex items-baseline gap-3 rule-hairline pt-3">
          <span className="label-field shrink-0 text-[0.55rem] text-accent">Obs.</span>
          <span aria-hidden className="shrink-0 font-mono text-[0.6rem] text-accent/60">⌐</span>
          <span className="font-display text-base italic text-accent">{entry.observation}</span>
        </p>
        {/* entry separator with center tick */}
        {!isLast && (
          <span aria-hidden className="relative mt-12 block h-px w-full bg-border/70 md:mt-16">
            <span className="absolute left-1/2 top-1/2 h-1.5 w-px -translate-x-1/2 -translate-y-1/2 bg-accent/50" />
          </span>
        )}
      </div>
    </article>
  );
}

export function Journey() {
  return (
    <section id="journey" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="label-field">Section 02 — Field Journal</span>
            <h2 className="mt-3 font-display text-3xl text-primary md:text-4xl">Journey</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            A record of the systems, languages and ideas encountered along the way.
          </p>
        </div>

        {/* timeline */}
        <div className="relative mt-14 md:mt-20">
          {/* spine with drafting ticks */}
          <span
            aria-hidden
            className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-border to-accent/40"
          />
          <span
            aria-hidden
            className="absolute left-0 top-0 bottom-0 hidden w-px md:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, transparent 0, transparent 96px, color-mix(in oklab, var(--accent) 45%, transparent) 96px, color-mix(in oklab, var(--accent) 45%, transparent) 97px)",
            }}
          />
          {/* spine origin tick */}
          <span aria-hidden className="absolute left-0 top-0 h-px w-3 -translate-y-px bg-accent/60" />

          {entries.map((entry, i) => (
            <JournalEntry key={entry.n} entry={entry} isLast={i === entries.length - 1} />
          ))}

          {/* current field note — culmination of the spine */}
          <div className="relative grid gap-x-8 gap-y-4 pl-9 md:grid-cols-[10rem_1fr] md:pl-14">
            <span className="absolute left-0 top-1.5 -translate-x-1/2">
              <Node filled />
            </span>
            <span aria-hidden className="absolute left-0 top-[0.72rem] h-px w-6 bg-accent md:w-10" />
            {/* pulsing presence ring for "now" */}
            <span
              aria-hidden
              className="absolute left-0 top-[0.72rem] h-3 w-3 -translate-x-1/2 -translate-y-[5px] animate-ping rounded-full border border-accent/30 [animation-duration:3s]"
            />

            <header className="md:text-right">
              <span className="label-field text-accent">Current Field Note</span>
              <h3 className="mt-2 font-display text-2xl text-primary">Now</h3>
              <p className="mt-1.5 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
                Present position
              </p>
            </header>

            <div className="max-w-2xl">
              <div className="plate paper-grain relative p-6 md:p-8">
                {/* corner registration marks */}
                <span aria-hidden className="absolute left-2 top-2 h-2 w-2 border-l border-t border-accent/50" />
                <span aria-hidden className="absolute right-2 top-2 h-2 w-2 border-r border-t border-accent/50" />
                <span aria-hidden className="absolute bottom-2 left-2 h-2 w-2 border-b border-l border-accent/50" />
                <span aria-hidden className="absolute bottom-2 right-2 h-2 w-2 border-b border-r border-accent/50" />

                <span className="label-field text-[0.58rem]">Primary direction</span>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Backend · Systems · DSA
                </p>
                <p className="mt-5 text-sm leading-relaxed text-foreground/85">
                  Still experimenting. Still learning. Still occasionally getting humbled.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                  But with considerably less random wandering than before.
                </p>
              </div>
              {/* continuation line: the record is ongoing */}
              <span aria-hidden className="mt-4 flex items-center gap-2">
                <span className="h-px w-8 bg-accent/50" />
                <span className="font-mono text-[0.55rem] uppercase tracking-[0.22em] text-muted-foreground">
                  Record ongoing —
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
