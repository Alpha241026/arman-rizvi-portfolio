import {
  ArrowUpRight,
  Download,
  FileText,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const contacts = [
  {
    label: "Email",
    value: "rizviarman99@gmail.com",
    href: "mailto:rizviarman99@gmail.com",
    icon: Mail,
    meta: "PRIMARY CORRESPONDENCE",
  },
  {
    label: "GitHub",
    value: "Alpha241026",
    href: "https://github.com/Alpha241026",
    icon: Github,
    meta: "CODE / REPOSITORIES",
  },
  {
    label: "LinkedIn",
    value: "Arman Rizvi",
    href: "https://www.linkedin.com/in/arman-rizvi-lpu/",
    icon: Linkedin,
    meta: "PROFESSIONAL NETWORK",
  },
];

function CorrespondencePlate() {
  return (
    <div className="plate paper-grain relative min-h-[420px] overflow-hidden p-5 md:min-h-[520px] md:p-7">
      <div className="absolute inset-4 border border-border/80" />
      <div className="absolute left-7 top-7 label-field text-accent">AR-05A</div>
      <div className="absolute right-7 top-7 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">
        CORRESPONDENCE PLATE
      </div>

      <svg
        viewBox="0 0 520 520"
        className="absolute inset-0 h-full w-full opacity-70"
        aria-hidden
      >
        <g fill="none" stroke="var(--strata)" strokeWidth="0.7">
          <circle cx="260" cy="260" r="178" />
          <circle cx="260" cy="260" r="136" />
          <circle cx="260" cy="260" r="91" />
          <circle cx="260" cy="260" r="38" />
          <path d="M82 260h356M260 82v356" opacity="0.55" />
          <path d="M135 135l250 250M385 135L135 385" opacity="0.3" />
          <path d="M260 38v26M260 456v26M38 260h26M456 260h26" />
          <path d="M113 90l34 20M407 90l-34 20M113 430l34-20M407 430l-34-20" />
        </g>
        <g fill="none" stroke="var(--ochre)" strokeWidth="1">
          <path d="M260 260 C 295 217, 341 224, 365 184 C 390 143, 424 149, 448 119" />
          <path d="M260 260 C 220 291, 196 328, 149 334 C 115 338, 97 359, 76 383" />
        </g>
        <g fill="var(--ochre)">
          <circle cx="260" cy="260" r="4" />
          <circle cx="448" cy="119" r="3" />
          <circle cx="76" cy="383" r="3" />
        </g>
      </svg>

      <div className="relative flex h-full min-h-[370px] flex-col items-center justify-center text-center">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-accent">
          FIELD COMMUNICATION / 05
        </span>
        <h2 className="mt-5 max-w-md font-display text-4xl leading-[0.95] text-primary md:text-6xl">
          Correspondence remains open.
        </h2>
        <p className="mt-5 max-w-sm font-display text-lg italic leading-relaxed text-muted-foreground md:text-xl">
          The record is still being written. The next entry can start here.
        </p>
        <div className="mt-8 flex items-center gap-3 font-mono text-[0.58rem] uppercase tracking-[0.22em] text-muted-foreground">
          <span className="h-px w-10 bg-accent/60" />
          <span>Signal available</span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        </div>
      </div>

      <span className="absolute bottom-7 left-7 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-muted-foreground">
        FIG. 05.0 · AR
      </span>
      <span className="absolute bottom-7 right-7 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-muted-foreground">
        CURRENT EXCAVATION · 2026
      </span>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative border-b border-border motion-section" data-motion="section">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-accent" />
          <span className="label-field">Section 05 — Correspondence</span>
        </div>

        <div className="mt-7 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
          <div>
            <h1 className="font-display text-5xl leading-none tracking-tight text-primary md:text-6xl">
              Contact
            </h1>
            <p className="mt-7 max-w-xl font-display text-xl leading-relaxed text-foreground/85 md:text-2xl">
              If you want to build something, discuss a project, or simply compare notes, the next
              specimen can begin here.
            </p>
            <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">
              Email is the most direct route. GitHub and LinkedIn carry the public record, while
              the CV collects the formal version of the work in one place.
            </p>
          </div>

          <div className="border-y border-border py-5">
            <div className="flex items-center justify-between gap-4">
              <span className="label-field">Available channels</span>
              <span className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-muted-foreground">
                AR / 05
              </span>
            </div>

            <div className="mt-2 divide-y divide-border">
              {contacts.map(({ label, value, href, icon: Icon, meta }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noreferrer"}
                  className="group flex items-center gap-4 py-5 transition-colors hover:text-primary"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-border text-muted-foreground transition-colors group-hover:border-accent group-hover:text-accent">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="label-field block text-[0.58rem] text-accent">{meta}</span>
                    <span className="mt-1 block truncate font-display text-lg text-primary md:text-xl">
                      {value}
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <CorrespondencePlate />

          <div className="plate paper-grain flex flex-col justify-between p-7 md:p-9">
            <div>
              <div className="flex items-center gap-3">
                <FileText className="h-4 w-4 text-accent" />
                <span className="label-field text-accent">Document / AR-05B</span>
              </div>
              <h3 className="mt-8 font-display text-4xl leading-none text-primary md:text-5xl">
                Curriculum Vitae
              </h3>
              <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
                A compact record of projects, technical practice, achievements, certificates and
                education.
              </p>
            </div>

            <div className="mt-10 border-t border-border pt-6">
              <div className="flex flex-wrap items-center justify-between gap-5">
                <div>
                  <span className="label-field block">Latest record</span>
                  <span className="mt-2 block font-display text-lg text-primary">September 2026</span>
                </div>
                <a
                  href="/Arman-Rizvi-CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 border border-primary bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  View CV
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
              <a
                href="/Arman-Rizvi-CV.pdf"
                download
                className="mt-5 inline-flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-accent"
              >
                <Download className="h-3.5 w-3.5" />
                Download PDF
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <span className="label-field text-accent">Field note</span>
              <span className="h-px w-10 bg-accent/60" />
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground">
                Correspondence remains open
              </span>
            </div>
            <p className="font-display text-base italic text-muted-foreground md:text-lg">
              More work will enter the record as it earns its place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
