type PrimarySpecimen = {
  n: string;
  name: string;
  role: string;
};

const primary: PrimarySpecimen[] = [
  { n: "01", name: "Go", role: "Backend / systems — current anchor" },
  { n: "02", name: "Python", role: "Backend / API practice with Flask" },
  { n: "03", name: "C++", role: "Problem solving / DSA" },
  { n: "04", name: "PostgreSQL", role: "Relational data / persistence" },
  { n: "05", name: "REST / APIs", role: "Interface design & integration" },
  { n: "06", name: "Flask", role: "Python backend framework" },
];

type InventoryRow = { name: string; note: string };

type InventoryGroup = {
  index: string;
  label: string;
  status: string;
  rows: InventoryRow[];
  quiet?: boolean;
};

const groups: InventoryGroup[] = [
  {
    index: "II",
    label: "Languages Encountered",
    status: "Encountered",
    rows: [
      { name: "Go", note: "current direction" },
      { name: "Python", note: "backend practice" },
      { name: "C++", note: "DSA / problem solving" },
      { name: "C", note: "foundations" },
      { name: "Java", note: "early coursework" },
      { name: "JavaScript", note: "web interfaces" },
    ],
  },
  {
    index: "III",
    label: "Web · Backend · Data",
    status: "Working set",
    rows: [
      { name: "Flask", note: "API services" },
      { name: "REST APIs", note: "design & consumption" },
      { name: "SQL", note: "queries & modelling" },
      { name: "PostgreSQL", note: "current database" },
      { name: "SQLite", note: "lightweight storage" },
      { name: "HTML5 / CSS3", note: "web technologies" },
    ],
  },
  {
    index: "IV",
    label: "Engineering Toolkit",
    status: "Supporting",
    rows: [
      { name: "Git", note: "version control" },
      { name: "GitHub", note: "repository & collaboration" },
      { name: "VS Code", note: "editor" },
      { name: "Postman", note: "API testing" },
    ],
  },
  {
    index: "V",
    label: "Archived / Earlier Exploration",
    status: "Archived",
    quiet: true,
    rows: [
      { name: "Dart", note: "via Flutter period" },
      { name: "Flutter", note: "mobile experiments — not current direction" },
    ],
  },
];

function GoSystemsDiagram() {
  return (
    <svg
      viewBox="0 0 380 130"
      className="mt-6 w-full max-w-[360px] opacity-90"
      fill="none"
      aria-hidden
    >
      <g stroke="var(--strata)" strokeWidth="0.5" opacity="0.4">
        <path d="M10 10h12M10 10v12M370 120h-12M370 120v-12" />
      </g>
      {/* Branching vectors from Go core */}
      <path
        d="M95 65 H 155 C 175 65 185 30 205 30 H 225"
        stroke="var(--strata)"
        strokeWidth="0.8"
        strokeDasharray="2 2"
      />
      <path
        d="M95 65 H 225"
        stroke="var(--ochre)"
        strokeWidth="0.9"
      />
      <path
        d="M95 65 H 155 C 175 65 185 100 205 100 H 225"
        stroke="var(--strata)"
        strokeWidth="0.8"
        strokeDasharray="2 2"
      />

      {/* Core Node */}
      <rect
        x="15"
        y="46"
        width="80"
        height="38"
        fill="var(--background)"
        stroke="var(--ochre)"
        strokeWidth="1"
      />
      <text
        x="55"
        y="69"
        textAnchor="middle"
        fill="var(--ink)"
        fontFamily="var(--font-mono)"
        fontSize="10.5"
        letterSpacing="1.5"
        fontWeight="600"
      >
        GO CORE
      </text>

      {/* Branch Node 1 */}
      <circle cx="205" cy="30" r="2.5" fill="var(--ochre)" />
      <text
        x="215"
        y="34"
        fill="var(--foreground)"
        fontFamily="var(--font-mono)"
        fontSize="8.5"
        letterSpacing="0.8"
      >
        HTTP &amp; REST APIS
      </text>

      {/* Branch Node 2 */}
      <circle cx="205" cy="65" r="2.5" fill="var(--ochre)" />
      <text
        x="215"
        y="69"
        fill="var(--foreground)"
        fontFamily="var(--font-mono)"
        fontSize="8.5"
        letterSpacing="0.8"
      >
        PERSISTENCE &amp; DATA
      </text>

      {/* Branch Node 3 */}
      <circle cx="205" cy="100" r="2.5" fill="var(--ochre)" />
      <text
        x="215"
        y="104"
        fill="var(--foreground)"
        fontFamily="var(--font-mono)"
        fontSize="8.5"
        letterSpacing="0.8"
      >
        CONCURRENCY &amp; PIPELINES
      </text>
    </svg>
  );
}

function StatusMark({ label, quiet = false }: { label: string; quiet?: boolean }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 font-mono text-[0.55rem] uppercase tracking-[0.2em] ${
        quiet ? "text-muted-foreground/60" : "text-accent"
      }`}
    >
      <span
        aria-hidden
        className={`h-1 w-1 rotate-45 border ${
          quiet
            ? "border-muted-foreground/40 bg-transparent"
            : "border-accent bg-accent/80"
        }`}
      />
      {label}
    </span>
  );
}

function InventoryGroupBlock({ group }: { group: InventoryGroup }) {
  const isArchived = group.quiet ?? false;
  return (
    <section
      className={
        isArchived
          ? "border border-dashed border-border/80 bg-card/30 p-5 md:p-6"
          : "border-t border-border/80 pt-4"
      }
    >
      <header className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border/60 pb-2.5">
        <h3 className="flex items-baseline gap-2">
          <span className="font-mono text-[0.62rem] text-accent/80">{group.index}</span>
          <span
            className={`font-display text-lg tracking-tight ${
              isArchived ? "text-muted-foreground" : "text-primary"
            }`}
          >
            {group.label}
          </span>
        </h3>
        <StatusMark label={group.status} quiet={isArchived} />
      </header>
      <ul className="mt-2 divide-y divide-border/40">
        {group.rows.map((row) => (
          <li
            key={row.name}
            className="group flex items-baseline justify-between gap-4 py-2.5 transition-colors"
          >
            <span
              className={`text-sm transition-colors ${
                isArchived
                  ? "font-mono text-xs text-muted-foreground/80"
                  : "font-medium text-foreground/90 group-hover:text-accent"
              }`}
            >
              {row.name}
            </span>
            <span
              aria-hidden
              className={`mx-2 hidden flex-1 border-b sm:block ${
                isArchived
                  ? "border-dashed border-border/40"
                  : "border-dotted border-border/60"
              }`}
            />
            <span className="shrink-0 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted-foreground/70">
              {row.note}
            </span>
          </li>
        ))}
      </ul>
      {isArchived && (
        <p className="mt-4 border-t border-border/50 pt-2 font-mono text-[0.55rem] uppercase tracking-widest text-muted-foreground/60">
          Preserved as field context · not active focus
        </p>
      )}
    </section>
  );
}

export function Skills() {
  const goSpecimen = primary[0]!;
  const workingSet = primary.slice(1);

  return (
    <section id="skills" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-20">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-6">
          <div>
            <span className="label-field">Section 03 — Technical Inventory</span>
            <h2 className="mt-3 font-display text-3xl text-primary md:text-4xl">Skills</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            The working technical stratum — systems, languages and tooling documented across active practice and earlier excavation.
          </p>
        </div>

        {/* Primary Specimen Spread: Go Anchor + Working Set */}
        <div className="mt-12 md:mt-16 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12 items-start">
          {/* Left Column: Go Anchor */}
          {/* Left Column: Go Anchor & Systems Taxonomy */}
          <div className="plate paper-grain relative p-6 md:p-8 flex flex-col justify-between">
            {/* Corner registration marks */}
            <span aria-hidden className="absolute left-2 top-2 h-2.5 w-2.5 border-l border-t border-accent/60" />
            <span aria-hidden className="absolute right-2 top-2 h-2.5 w-2.5 border-r border-t border-accent/60" />
            <span aria-hidden className="absolute bottom-2 left-2 h-2.5 w-2.5 border-b border-l border-accent/60" />
            <span aria-hidden className="absolute bottom-2 right-2 h-2.5 w-2.5 border-b border-r border-accent/60" />

            <div>
              <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rotate-45 border border-accent bg-accent" />
                  <span className="label-field text-accent">Primary Anchor · 01</span>
                </div>
                <span className="inline-flex items-center gap-1.5 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-accent">
                  <span aria-hidden className="h-1 w-1 rotate-45 bg-accent" />
                  Current Direction
                </span>
              </div>

              <div className="mt-6 md:mt-8">
                <h3 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-primary leading-none">
                  {goSpecimen.name}
                </h3>
                <p className="mt-3 font-display text-xl md:text-2xl text-foreground/90 leading-snug">
                  {goSpecimen.role}
                </p>
              </div>

              {/* Vector Architectural Sketch */}
              <GoSystemsDiagram />
            </div>

            <div className="mt-6 pt-4 border-t border-border/80 flex items-center justify-between gap-4">
              <span className="font-mono text-[0.62rem] text-muted-foreground uppercase tracking-widest">
                Systems &amp; Services Foundation
              </span>
              <span className="h-px w-12 bg-accent/40 hidden sm:block" />
            </div>
          </div>

          {/* Right Column: Active Working Set */}
          <div className="flex flex-col justify-between">
            <div className="border-b border-border pb-3 flex items-center justify-between">
              <span className="label-field">Active Working Set</span>
              <span className="font-mono text-[0.6rem] text-muted-foreground uppercase tracking-widest">
                02 — 06
              </span>
            </div>

            <ul className="divide-y divide-border/60">
              {workingSet.map((item) => (
                <li
                  key={item.n}
                  className="group py-3.5 md:py-4 transition-colors hover:bg-card/40 -mx-3 px-3"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-3.5">
                      <span className="font-mono text-[0.65rem] text-accent/80 shrink-0">
                        {item.n}
                      </span>
                      <h4 className="font-display text-xl md:text-2xl font-medium text-primary transition-colors group-hover:text-accent">
                        {item.name}
                      </h4>
                    </div>
                  </div>
                  <p className="mt-1 pl-7 text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {item.role}
                  </p>
                </li>
              ))}
            </ul>

            {/* Observation note */}
            <div className="mt-4 pt-3 border-t border-border flex items-baseline gap-2.5">
              <span className="label-field shrink-0 text-[0.55rem] text-accent">Obs.</span>
              <span aria-hidden className="shrink-0 font-mono text-[0.6rem] text-accent/60">⌐</span>
              <span className="font-display text-xs italic text-accent md:text-sm">
                Listed as current field practice — not as claims of mastery.
              </span>
            </div>
          </div>

        </div>

        {/* Lower Inventories (Taxonomies II - V) */}
        <div className="mt-16 md:mt-20">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {groups.map((group) => (
              <InventoryGroupBlock key={group.index} group={group} />
            ))}
          </div>
        </div>

        {/* Field Practice Footer */}
        <div className="mt-16 border-t border-border pt-6 md:mt-20">
          <div className="flex flex-wrap items-baseline justify-between gap-x-10 gap-y-4">
            <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="label-field shrink-0 text-[0.58rem]">Field Practice</span>
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-foreground/75">
                Problem solving · Collaboration · Adaptability · Learning by building
              </span>
            </p>
            <p className="font-display text-sm italic text-muted-foreground">
              Depth is still being built. The inventory is deliberately incomplete.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
