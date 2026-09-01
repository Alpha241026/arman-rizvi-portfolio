const notes = [
  {
    n: "I",
    title: "Systems, observed",
    body: "Interested in how requests travel, where state lives and why architecture decisions age well or badly.",
  },
  {
    n: "II",
    title: "Built, not theorised",
    body: "Projects are logged here as specimens — what was attempted, what held up and what was learned.",
  },
  {
    n: "III",
    title: "Still forming",
    body: "Sections for skills and contact are being excavated. More entries to follow.",
  },
];

export function FieldNotes() {
  return (
    <section id="overview" className="border-b border-border motion-section" data-motion="section">
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="label-field">Section 00 — Field Notes</span>
            <h2 className="mt-3 font-display text-3xl text-primary md:text-4xl">
              Notes from the current dig
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            A working record rather than a brochure. Entries are added as the work happens.
          </p>
        </div>

        <div className="mt-10 grid gap-px bg-border md:grid-cols-3">
          {notes.map((note) => (
            <article key={note.n} className="bg-background p-6 transition-colors hover:bg-card md:p-8">
              <span className="font-mono text-xs text-accent">{note.n}</span>
              <h3 className="mt-3 font-display text-xl text-primary">{note.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{note.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
