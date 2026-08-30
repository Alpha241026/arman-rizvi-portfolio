type PrimarySpecimen = {
  n: string;
  name: string;
  role: string;
  reg: string;
  mark?: string;
  anchor?: boolean;
};

const primary: PrimarySpecimen[] = [
  { n: "01", name: "Go", role: "Backend / systems — current anchor", reg: "REG · AR-001", mark: "Type specimen", anchor: true },
  { n: "02", name: "Python", role: "Backend / API practice with Flask", reg: "REG · AR-002" },
  { n: "03", name: "C++", role: "Problem solving / DSA", reg: "REG · AR-003" },
  { n: "04", name: "PostgreSQL", role: "Relational data / persistence", reg: "REG · AR-004" },
  { n: "05", name: "REST / APIs", role: "Interface design & integration", reg: "REG · AR-005" },
  { n: "06", name: "Flask", role: "Python backend framework", reg: "REG · AR-006" },
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

function StatusMark({ label, quiet = false }: { label: string; quiet?: boolean }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 font-mono text-[0.55rem] uppercase tracking-[0.2em] ${
        quiet ? "text-muted-foreground/70" : "text-accent"
      }`}
    >
      <span
        aria-hidden
        className={`h-1 w-1 rotate-45 border ${
          quiet
            ? "border-muted-foreground/50"
            : "border-accent bg-accent/80"
        }`}
      />
      {label}
    </span>
  );
}

function PrimaryRow({ item, isLast }: { item: PrimarySpecimen; isLast: boolean }) {
  return (
    <li
      className={`group grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 py-4 md:grid-cols-[3rem_1fr_auto] md:py-5 ${
        isLast ? "" : "border-b border-border/70"
      }`}
    >
      <span className="font-mono text-[0.62rem] text-accent/80">{item.n}</span>
      <span className="min-w-0">
        <span className="font-display text-xl leading-tight text-primary transition-colors group-hover:text-accent md:text-2xl">
          {item.name}
        </span>
        <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
          {item.role}
        </span>
      </span>
      <span className="col-start-2 mt-2 md:col-start-3 md:mt-0">
        <StatusMark label="Current" />
      </span>
    </li>
  );
}

function InventoryGroupBlock({ group }: { group: InventoryGroup }) {
  return (
    <section className={group.quiet ? "opacity-80" : undefined}>
      <header className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-2">
        <h3 className="flex items-baseline gap-2">
          <span className="font-mono text-[0.6rem] text-accent/70">{group.index}</span>
          <span className="font-display text-lg text-primary">{group.label}</span>
        </h3>
        <StatusMark label={group.status} quiet={group.quiet ?? false} />
      </header>
      <ul>
        {group.rows.map((row, i) => (
          <li
            key={row.name}
            className={`group flex items-baseline justify-between gap-4 py-2.5 ${
              i === group.rows.length - 1 ? "" : "border-b border-border/50"
            }`}
          >
            <span
              className={`text-sm transition-colors ${
                group.quiet
                  ? "text-foreground/70 group-hover:text-foreground/90"
                  : "text-foreground/90 group-hover:text-accent"
              }`}
            >
              {row.name}
            </span>
            <span
              aria-hidden
              className="mx-1 hidden flex-1 border-b border-dotted border-border/70 sm:block"
            />
            <span className="shrink-0 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted-foreground">
              {row.note}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-24">
        {/* section header */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="label-field">Section 03 — Technical Inventory</span>
            <h2 className="mt-3 font-display text-3xl text-primary md:text-4xl">Skills</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            An inventory of languages, systems and tools encountered in the field.
          </p>
        </div>

        {/* Specimen 01 — primary field */}
        <div className="mt-14 md:mt-20">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
            <span className="label-field text-accent">Specimen 01 · Primary Field</span>
            <span className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-muted-foreground">
              6 entries — direction in progress
            </span>
          </div>

          <div className="plate paper-grain relative px-6 py-2 md:px-10 md:py-4">
            {/* corner registration marks */}
            <span aria-hidden className="absolute left-2 top-2 h-2 w-2 border-l border-t border-accent/50" />
            <span aria-hidden className="absolute right-2 top-2 h-2 w-2 border-r border-t border-accent/50" />
            <span aria-hidden className="absolute bottom-2 left-2 h-2 w-2 border-b border-l border-accent/50" />
            <span aria-hidden className="absolute bottom-2 right-2 h-2 w-2 border-b border-r border-accent/50" />

            <ul>
              {primary.map((item, i) => (
                <PrimaryRow key={item.n} item={item} isLast={i === primary.length - 1} />
              ))}
            </ul>
          </div>

          <p className="mt-4 flex items-baseline gap-3">
            <span className="label-field shrink-0 text-[0.55rem] text-accent">Obs.</span>
            <span aria-hidden className="shrink-0 font-mono text-[0.6rem] text-accent/60">⌐</span>
            <span className="font-display text-sm italic text-accent">
              Listed as current field practice — not as claims of mastery.
            </span>
          </p>
        </div>

        {/* compact inventory */}
        <div className="mt-16 grid gap-x-14 gap-y-12 md:mt-24 md:grid-cols-2">
          {groups.map((group) => (
            <InventoryGroupBlock key={group.index} group={group} />
          ))}
        </div>

        {/* field practice note + closing annotation */}
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
