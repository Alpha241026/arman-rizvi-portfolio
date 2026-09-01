import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  CircleDot,
  Crosshair,
  FileText,
} from "lucide-react";

import infernoverseCertificate from "@/assets/field-record/infernoverse.png";
import goPart1Certificate from "@/assets/field-record/go-part1.png";
import goPart2Certificate from "@/assets/field-record/go-part2.png";
import quizCertificate from "@/assets/field-record/quiz.png";
import blockseblockCertificate from "@/assets/field-record/blockseblock.png";
import forageCertificate from "@/assets/field-record/forage.png";

const primaryRecords = [
  {
    number: "01",
    code: "AR-04A",
    kind: "Hackathon",
    title: "InfernoVerse",
    date: "November 2025",
    subtitle: "24-hour Hackathon · Participant",
    description:
      "A first extended build under time pressure, with the experience of actually having to turn an idea into something working within a fixed window.",
    image: infernoverseCertificate,
    alt: "InfernoVerse 24-hour hackathon certificate of participation",
    note: "First extended build under pressure",
  },
  {
    number: "02",
    code: "AR-04B",
    kind: "Technical Study",
    title: "Go Programming for Everyone",
    date: "December 2025 — January 2026",
    subtitle: "Parts I + II · UC Santa Cruz / Coursera",
    description:
      "The most relevant study record in the archive: a two-part introduction to Go that became the foundation for the current backend direction.",
    image: goPart1Certificate,
    secondaryImage: goPart2Certificate,
    alt: "Go Programming for Everyone Part I certificate",
    note: "Foundation for current backend direction",
  },
  {
    number: "03",
    code: "AR-04C",
    kind: "Achievement",
    title: "CSE Section of the Year",
    date: "September 2025",
    subtitle: "3rd Place · Quiz",
    description:
      "The strongest competitive result in the archive — a concrete placing rather than simply a participation mark.",
    image: quizCertificate,
    alt: "Certificate of Merit for third place in CSE Section of the Year quiz",
    note: "A recorded competitive result",
  },
];

const supportingRecords = [
  {
    number: "04",
    code: "AR-04D",
    kind: "Bootcamp",
    title: "Hands-on AI Bootcamp",
    date: "August 2025",
    subtitle: "BlockseBlock × OpenAI",
    description:
      "One of the earliest formal technical events in the record. Kept as part of the path rather than presented as a major specialization.",
    image: blockseblockCertificate,
    alt: "BlockseBlock and OpenAI hands-on AI bootcamp certificate",
  },
  {
    number: "05",
    code: "AR-04E",
    kind: "Job Simulation",
    title: "Cybersecurity Analyst",
    date: "August — September 2025",
    subtitle: "Tata · Forage",
    description:
      "A recorded job simulation covering IAM fundamentals, strategy assessment, custom IAM solutions and platform integration.",
    image: forageCertificate,
    alt: "Tata cybersecurity analyst job simulation certificate",
  },
];

/* -------------------------------------------------------------------------- */
/* Evidence artwork                                                           */
/* -------------------------------------------------------------------------- */

function Artifact({
  src,
  alt,
  dark = false,
  secondarySrc,
  code,
  date,
}: {
  src: string;
  alt: string;
  dark?: boolean;
  secondarySrc?: string;
  code?: string;
  date?: string;
}) {
  return (
    <div className="relative">
      {/* registration marks */}
      <div className="absolute -left-3 -top-3 z-20 h-6 w-6 border-l border-t border-accent" />
      <div className="absolute -right-3 -top-3 z-20 h-6 w-6 border-r border-t border-accent" />
      <div className="absolute -bottom-3 -left-3 z-20 h-6 w-6 border-b border-l border-accent" />
      <div className="absolute -bottom-3 -right-3 z-20 h-6 w-6 border-b border-r border-accent" />

      {/* offset document sleeve */}
      <div
        className={`absolute -inset-2 -z-10 border ${
          dark ? "border-primary/20" : "border-border/60"
        }`}
      />
      <div
        className={`absolute -inset-5 -z-20 hidden border lg:block ${
          dark ? "border-accent/10" : "border-accent/15"
        }`}
      />

      <div
        className={`relative overflow-visible border p-3 shadow-[12px_16px_0_rgba(74,48,28,0.08)] md:p-4 ${
          dark
            ? "border-primary/40 bg-primary"
            : "border-border bg-background/80"
        }`}
      >
        {/* specimen metadata */}
        <div
          className={`mb-3 flex items-center justify-between gap-4 border-b pb-2 ${
            dark ? "border-primary-foreground/15" : "border-border"
          }`}
        >
          <span className="font-mono text-[0.45rem] uppercase tracking-[0.22em] text-accent">
            {code ?? "ARCHIVE SPECIMEN"}
          </span>
          <span
            className={`font-mono text-[0.45rem] uppercase tracking-[0.16em] ${
              dark ? "text-primary-foreground/45" : "text-muted-foreground"
            }`}
          >
            {date ?? "ORIGINAL / RETAINED"}
          </span>
        </div>
        {/* technical crosshair */}
        <Crosshair
          className={`absolute -right-4 -top-4 z-30 h-8 w-8 ${
            dark ? "text-accent" : "text-muted-foreground"
          }`}
          strokeWidth={0.8}
        />

        <div className="absolute -left-8 top-1/2 hidden -translate-y-1/2 -rotate-90 lg:block">
          <span className="font-mono text-[0.42rem] uppercase tracking-[0.28em] text-muted-foreground">
            FIELD / ORIGINAL
          </span>
        </div>

        <div className="absolute -right-3 bottom-14 hidden h-16 w-px bg-accent/30 lg:block" />
        <div className="absolute -right-7 bottom-[6.2rem] hidden font-mono text-[0.4rem] uppercase tracking-[0.22em] text-muted-foreground lg:block [writing-mode:vertical-rl]">
          ARCHIVE TRACE
        </div>

        <div
          className={`relative overflow-hidden border ${
            dark
              ? "border-primary-foreground/20 bg-[#4a301c] p-3 md:p-4"
              : "border-border/70 bg-background"
          }`}
        >
          {dark ? (
            <div className="relative aspect-[4/3] overflow-hidden border border-primary-foreground/15 bg-background">
              <img
                src={src}
                alt={alt}
                className="block h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              />
            </div>
          ) : (
            <img
              src={src}
              alt={alt}
              className="block max-h-[650px] w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            />
          )}

          <div className="pointer-events-none absolute inset-3 border border-accent/20" />
          <div className="pointer-events-none absolute inset-x-6 top-6 h-px bg-accent/20" />
          <div className="pointer-events-none absolute inset-x-6 bottom-6 h-px bg-accent/20" />

          <div className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l border-t border-accent/60" />
          <div className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r border-t border-accent/60" />
          <div className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b border-l border-accent/60" />
          <div className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b border-r border-accent/60" />
        </div>

        <div
          className={`mt-3 flex items-center justify-between border-t pt-3 ${
            dark ? "border-primary-foreground/15" : "border-border"
          }`}
        >
          <span
            className={`label-field ${
              dark ? "text-accent" : "text-accent"
            }`}
          >
            Archive / Evidence
          </span>

          <span
            className={`font-mono text-[0.5rem] uppercase tracking-[0.16em] ${
              dark
                ? "text-primary-foreground/50"
                : "text-muted-foreground"
            }`}
          >
            Original record
          </span>
        </div>
      </div>

      {secondarySrc && (
        <div className="absolute -bottom-12 -right-4 z-30 w-[38%] rotate-[3deg] transition-transform duration-500 hover:rotate-0 sm:-right-8">
          <div className="border border-border bg-background p-2 shadow-[8px_10px_0_rgba(74,48,28,0.10)]">
            <div className="border border-border/70 bg-card p-1.5">
              <img
                src={secondarySrc}
                alt="Go Programming for Everyone Part II certificate"
                className="block w-full object-contain"
              />
            </div>
          </div>

          <div className="mt-2 flex items-center justify-end gap-2">
            <span className="h-px w-5 bg-border" />
            <span className="font-mono text-[0.45rem] uppercase tracking-[0.16em] text-muted-foreground">
              Part II · related specimen
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Specimen rail                                                              */
/* -------------------------------------------------------------------------- */

function SpecimenRail({
  number,
  kind,
}: {
  number: string;
  kind: string;
}) {
  return (
    <aside className="relative">
      <div className="flex items-center gap-4 lg:block">
        <span className="font-mono text-lg text-accent">{number}</span>

        <span className="label-field lg:mt-7 lg:block lg:max-w-[80px] lg:leading-[1.8]">
          {kind}
        </span>
      </div>

      <div className="mt-6 hidden lg:block">
        <div className="ml-1 h-24 w-px bg-border" />
        <CircleDot
          className="mt-2 h-3 w-3 text-accent"
          strokeWidth={1}
        />
      </div>
    </aside>
  );
}

/* -------------------------------------------------------------------------- */
/* Primary specimen                                                           */
/* -------------------------------------------------------------------------- */

function PrimarySpecimen({
  record,
  variant,
}: {
  record: (typeof primaryRecords)[number];
  variant: "hero" | "go" | "achievement";
}) {
  if (variant === "hero") {
    return (
      <article className="group relative overflow-visible border-b border-border py-14 md:py-20">
        {/* giant background index + registration ring */}
        <div className="pointer-events-none absolute -left-8 -top-8 select-none font-display text-[12rem] leading-none text-primary/[0.035] md:text-[18rem]">
          01
        </div>
        <div className="pointer-events-none absolute right-[44%] top-24 hidden h-20 w-20 rounded-full border border-accent/10 lg:block" />

        <div className="grid gap-10 lg:grid-cols-[64px_minmax(0,0.9fr)_minmax(500px,1.1fr)] lg:gap-9">
          <SpecimenRail number={record.number} kind={record.kind} />

          <div className="relative z-10 pt-1">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-accent">
                Lead specimen · {record.code}
              </span>
            </div>

            <h3 className="mt-5 font-display text-5xl leading-[0.9] text-primary md:text-7xl">
              {record.title}
            </h3>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="font-display text-xl text-accent">
                {record.subtitle}
              </span>

              <span className="font-mono text-[0.55rem] uppercase tracking-[0.16em] text-muted-foreground">
                {record.date}
              </span>
            </div>

            <p className="mt-9 max-w-xl text-sm leading-[2] text-muted-foreground">
              {record.description}
            </p>

            <div className="relative mt-12 border-l-2 border-accent pl-5">
              <span className="label-field">Field observation</span>

              <p className="mt-3 max-w-md font-display text-xl italic leading-relaxed text-primary/80">
                {record.note}
              </p>
            </div>

            <div className="relative mt-12 max-w-xl border border-accent/50 bg-accent/[0.055] p-6 md:p-8">
              <div className="pointer-events-none absolute -right-5 -top-7 flex h-24 w-24 items-center justify-center rounded-full border border-accent/15">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/15">
                  <span className="font-mono text-[0.55rem] tracking-[0.18em] text-accent/40">{record.number}</span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-5">
                <div>
                  <span className="label-field text-accent">Field record</span>
                  <p className="mt-3 font-display text-3xl text-primary md:text-4xl">
                    {record.note}
                  </p>
                  <p className="mt-1 font-mono text-[0.55rem] uppercase tracking-[0.15em] text-muted-foreground">
                    {record.kind} · {record.date}
                  </p>
                </div>

                <ArrowDownRight
                  className="h-9 w-9 text-accent"
                  strokeWidth={0.9}
                />
              </div>
            </div>
          </div>

          <div className="relative lg:-mr-10">
            <div className="pointer-events-none absolute -left-10 top-1/2 hidden w-8 -translate-y-1/2 lg:block">
              <div className="flex items-center gap-1">
                <span className="h-10 w-px bg-accent/50" />
                <span className="h-px w-5 bg-accent/50" />
              </div>
            </div>

            <div className="absolute -right-5 top-8 z-20 hidden rotate-90 lg:block">
              <span className="font-mono text-[0.5rem] uppercase tracking-[0.25em] text-muted-foreground">
                24H BUILD / NOV 2025
              </span>
            </div>

            <Artifact
              src={record.image}
              alt={record.alt}
              dark
              code={record.code}
              date={record.date}
            />
          </div>
        </div>
      </article>
    );
  }

  if (variant === "go") {
    return (
      <article className="group relative border-b border-border py-16 md:py-24">
        <div className="pointer-events-none absolute right-0 top-10 select-none font-mono text-[9rem] leading-none text-accent/[0.055] md:text-[14rem]">
          02
        </div>
        <div className="pointer-events-none absolute left-[44%] top-20 hidden h-16 w-16 rounded-full border border-accent/10 lg:block" />

        <div className="grid items-center gap-14 lg:grid-cols-[minmax(430px,0.95fr)_72px_minmax(0,1fr)] lg:gap-12">
          <div className="relative lg:order-1">
            <Artifact
              src={record.image}
              alt={record.alt}
              secondarySrc={record.secondaryImage}
              code={record.code}
              date="PART I / 2025—26"
            />

            <div className="absolute -left-2 top-8 hidden -translate-x-full lg:block">
              <div className="flex flex-col items-center gap-2">
                <span className="h-14 w-px bg-border" />
                <span className="font-mono text-[0.4rem] uppercase tracking-[0.22em] text-muted-foreground [writing-mode:vertical-rl]">
                  DOCUMENT SET / 02
                </span>
              </div>
            </div>

            <div className="absolute -bottom-20 left-4 hidden md:block">
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-accent" />
                <span className="font-mono text-[0.5rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Two-part study record
                </span>
              </div>
            </div>
          </div>

          <div className="lg:order-2">
            <SpecimenRail number={record.number} kind={record.kind} />
          </div>

          <div className="relative z-10 lg:order-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-accent">
                Specimen {record.code}
              </span>

              <span className="h-px w-12 bg-border" />

              <span className="font-mono text-[0.5rem] uppercase tracking-[0.12em] text-muted-foreground">
                {record.date}
              </span>
            </div>

            <h3 className="mt-5 max-w-2xl font-display text-5xl leading-[0.92] text-primary md:text-7xl">
              Go Programming
              <br />
              <span className="text-primary/70">for Everyone</span>
            </h3>

            <p className="mt-7 font-display text-xl text-accent">
              {record.subtitle}
            </p>

            <p className="mt-8 max-w-xl text-sm leading-[2] text-muted-foreground">
              {record.description}
            </p>

            <div className="mt-12 grid max-w-xl grid-cols-2 border-y border-border">
              <div className="border-r border-border py-5 pr-5">
                <span className="label-field">Parts</span>
                <p className="mt-2 font-display text-lg text-primary">
                  I + II
                </p>
              </div>

              <div className="py-5 pl-5">
                <span className="label-field">Impact</span>
                <p className="mt-2 font-display text-lg text-primary">
                  Backend direction
                </p>
              </div>
            </div>

            <div className="relative mt-12 max-w-xl border border-accent/50 bg-accent/[0.055] p-6 md:p-8">
              <div className="pointer-events-none absolute -right-5 -top-7 flex h-24 w-24 items-center justify-center rounded-full border border-accent/15">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/15">
                  <span className="font-mono text-[0.55rem] tracking-[0.18em] text-accent/40">{record.number}</span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-5">
                <div>
                  <span className="label-field text-accent">Field record</span>
                  <p className="mt-3 font-display text-3xl text-primary md:text-4xl">
                    {record.note}
                  </p>
                  <p className="mt-1 font-mono text-[0.55rem] uppercase tracking-[0.15em] text-muted-foreground">
                    {record.kind} · {record.date}
                  </p>
                </div>

                <Award
                  className="h-9 w-9 text-accent"
                  strokeWidth={0.9}
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative border-b border-border py-14 md:py-20">
      <div className="pointer-events-none absolute -left-5 top-0 select-none font-display text-[12rem] leading-none text-primary/[0.035] md:text-[17rem]">
        03
      </div>

      <div className="grid gap-12 lg:grid-cols-[72px_minmax(0,0.9fr)_minmax(480px,1.1fr)] lg:gap-14">
        <SpecimenRail number={record.number} kind={record.kind} />

        <div className="relative z-10">
          <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-accent">
            Specimen {record.code}
          </span>

          <h3 className="mt-5 max-w-2xl font-display text-5xl leading-[0.92] text-primary md:text-7xl">
            CSE Section
            <br />
            <span className="text-primary/65">of the Year</span>
          </h3>

          <p className="mt-7 font-display text-2xl text-accent">
            {record.subtitle}
          </p>

          <p className="mt-8 max-w-xl text-sm leading-[2] text-muted-foreground">
            {record.description}
          </p>

          {/* Winner-style callout */}
          <div className="relative mt-12 max-w-xl border border-accent/50 bg-accent/[0.055] p-6 md:p-8">
            <div className="pointer-events-none absolute -right-5 -top-7 flex h-24 w-24 items-center justify-center rounded-full border border-accent/15">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/15">
                <span className="font-mono text-[0.55rem] tracking-[0.18em] text-accent/40">03</span>
              </div>
            </div>
            <div className="flex items-start justify-between gap-5">
              <div>
                <span className="label-field text-accent">
                  Recorded result
                </span>

                <p className="mt-3 font-display text-4xl text-primary">
                  3rd Place
                </p>

                <p className="mt-1 font-mono text-[0.55rem] uppercase tracking-[0.15em] text-muted-foreground">
                  Quiz · CSE Section of the Year
                </p>
              </div>

              <Award
                className="h-9 w-9 text-accent"
                strokeWidth={0.9}
              />
            </div>
          </div>

          <div className="mt-10">
            <span className="label-field">Field observation</span>
            <p className="mt-3 font-display text-lg italic text-primary/75">
              {record.note}
            </p>
          </div>
        </div>

        <div className="relative lg:-mr-10">
          <div className="absolute -left-4 top-8 z-20 hidden lg:block">
            <div className="rotate-[-90deg] origin-top-left">
              <span className="font-mono text-[0.5rem] uppercase tracking-[0.24em] text-muted-foreground">
                MERIT / RECORDED PLACING
              </span>
            </div>
          </div>

          <Artifact
            src={record.image}
            alt={record.alt}
            code={record.code}
            date={record.date}
          />
        </div>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/* Supporting archive                                                         */
/* -------------------------------------------------------------------------- */

function ArchiveDrawer({
  record,
}: {
  record: (typeof supportingRecords)[number];
}) {
  return (
    <article className="group relative overflow-hidden border-b border-border p-6 transition-all duration-500 hover:bg-card md:p-8">
      {/* huge number */}
      <div className="pointer-events-none absolute -right-4 -top-7 font-display text-[9rem] leading-none text-primary/[0.045] transition-transform duration-500 group-hover:translate-x-2">
        {record.number}
      </div>

      <div className="relative grid gap-7 sm:grid-cols-[190px_minmax(0,1fr)]">
        <div className="relative">
          <div className="border border-border bg-background p-2 shadow-[7px_8px_0_rgba(74,48,28,0.07)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-1deg]">
            <div className="border border-border/70 p-2">
              <img
                src={record.image}
                alt={record.alt}
                className="block aspect-[4/3] w-full object-contain"
              />
            </div>
          </div>

          <div className="absolute -left-3 top-3 h-5 w-5 border-l border-t border-accent/50" />
          <div className="absolute -bottom-3 -left-2 border border-accent bg-background px-2 py-1">
            <span className="font-mono text-[0.45rem] uppercase tracking-[0.18em] text-accent">
              Evidence
            </span>
          </div>
        </div>

        <div className="relative z-10">
          <div className="flex items-baseline justify-between gap-4">
            <span className="label-field">
              {record.number} · {record.kind}
            </span>

            <span className="font-mono text-[0.5rem] uppercase tracking-[0.12em] text-muted-foreground">
              {record.date}
            </span>
          </div>

          <h3 className="mt-5 font-display text-3xl leading-tight text-primary">
            {record.title}
          </h3>

          <p className="mt-2 font-display text-base text-accent">
            {record.subtitle}
          </p>

          <p className="mt-5 max-w-lg text-sm leading-[1.8] text-muted-foreground">
            {record.description}
          </p>

          <div className="mt-7 flex items-center gap-3">
            <FileText
              className="h-4 w-4 text-accent"
              strokeWidth={1}
            />

            <span className="font-mono text-[0.5rem] uppercase tracking-[0.18em] text-muted-foreground">
              {record.code}
            </span>

            <span className="h-px w-10 bg-border transition-all duration-500 group-hover:w-20" />
          </div>
        </div>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/* Main                                                                       */
/* -------------------------------------------------------------------------- */

export function FieldRecord() {
  return (
    <section id="field-record" className="relative overflow-hidden border-b border-border motion-section" data-motion="section">
      {/* section-level atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[7%] top-[8%] h-px w-[30%] rotate-[-2deg] bg-border/70" />
        <div className="absolute right-[8%] top-[17%] h-[360px] w-px rotate-[8deg] bg-border/40" />
        <div className="absolute right-[12%] top-[13%] h-2 w-2 rounded-full bg-accent/40" />
        <div className="absolute left-[20%] top-[42%] h-1.5 w-1.5 rounded-full bg-accent/30" />
        <div className="absolute right-[23%] top-[66%] h-2 w-2 rounded-full bg-accent/30" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-28">
        {/* HEADER */}
        <header className="relative border-b border-border pb-10 md:pb-12">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-accent" />

                <span className="label-field">
                  Section 04 — Field Record
                </span>
              </div>

              <h2 className="mt-5 max-w-4xl font-display text-4xl leading-[0.92] text-primary md:text-5xl">
                Recorded
                <br />
                <span className="text-primary/65">evidence.</span>
              </h2>
            </div>

            <div className="relative lg:pb-2">
              <div className="pointer-events-none absolute -right-1 -top-5 hidden h-16 w-16 rounded-full border border-accent/15 lg:block" />
              <div className="pointer-events-none absolute -right-4 top-3 hidden h-px w-24 bg-accent/20 lg:block" />
              <p className="max-w-xl text-sm leading-[2] text-muted-foreground">
                Courses, competitions, collaborative events and other markers
                from the earlier layers of the work. Selective by design —
                not every certificate earns a place in the public record.
              </p>

              <div className="mt-7 flex items-center gap-4">
                <span className="font-mono text-[0.5rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Archive / 2025—26
                </span>

                <span className="h-px w-16 bg-border" />

                <span className="font-mono text-[0.5rem] text-accent">
                  AR / 04
                </span>
              </div>
            </div>
          </div>

          {/* Archive index */}
          <div className="mt-8 grid border-y border-border sm:grid-cols-3">
            <div className="border-b border-border py-5 sm:border-b-0 sm:border-r sm:pr-6">
              <span className="label-field">Archive status</span>
              <p className="mt-2 font-display text-lg text-primary">
                Active / selective
              </p>
            </div>

            <div className="border-b border-border py-5 sm:border-b-0 sm:border-r sm:px-6">
              <span className="label-field">Primary specimens</span>
              <p className="mt-2 font-display text-lg text-primary">
                03 records
              </p>
            </div>

            <div className="py-5 sm:pl-6">
              <span className="label-field">Supporting evidence</span>
              <p className="mt-2 font-display text-lg text-primary">
                02 records
              </p>
            </div>
          </div>
        </header>

        {/* PRIMARY */}
        <section className="relative mt-12">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <span className="label-field">Primary record</span>

            <div className="flex items-center gap-4">
              <span className="hidden font-mono text-[0.5rem] uppercase tracking-[0.18em] text-muted-foreground md:inline">
                Chronological / selected
              </span>

              <span className="font-mono text-[0.6rem] text-accent">
                AR / 03
              </span>
            </div>
          </div>

          {/* central archive spine */}
          <div className="pointer-events-none absolute bottom-0 left-[35px] top-[52px] hidden w-px bg-border lg:block" />

          <PrimarySpecimen
            record={primaryRecords[0]}
            variant="hero"
          />

          <PrimarySpecimen
            record={primaryRecords[1]}
            variant="go"
          />

          <PrimarySpecimen
            record={primaryRecords[2]}
            variant="achievement"
          />
        </section>

        {/* SUPPORTING */}
        <section className="relative mt-24">
          <div className="flex items-end justify-between border-b border-border pb-5">
            <div>
              <span className="label-field">Supporting records</span>

              <h3 className="mt-3 font-display text-3xl text-primary md:text-4xl">
                The archive remains.
              </h3>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <ArrowUpRight
                className="h-4 w-4 text-accent"
                strokeWidth={1}
              />

              <span className="font-mono text-[0.5rem] uppercase tracking-[0.18em] text-muted-foreground">
                Secondary evidence
              </span>
            </div>
          </div>

          <div className="mt-0 grid md:grid-cols-2">
            {supportingRecords.map((record) => (
              <ArchiveDrawer
                key={record.number}
                record={record}
              />
            ))}
          </div>
        </section>

        {/* CLOSING */}
        <footer className="relative mt-14 border-t border-border pt-6 md:mt-20">
          <div className="flex flex-wrap items-baseline justify-between gap-5">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />
                <span className="label-field">
                  Archive remains open
                </span>
              </div>

              <p className="mt-3 font-mono text-[0.5rem] uppercase tracking-[0.2em] text-muted-foreground">
                Current excavation · 2026
              </p>
            </div>

            <div>
              <p className="max-w-2xl font-display text-sm italic leading-relaxed text-primary/80 md:text-base">
                The record is selective. More work will enter it as it earns
                its place.
              </p>

              <div className="mt-4 flex items-center gap-4">
                <span className="font-mono text-[0.5rem] uppercase tracking-[0.2em] text-muted-foreground">
                  End of current record
                </span>

                <span className="h-px w-16 bg-border" />

                <span className="font-mono text-[0.5rem] text-accent">
                  04 / ∞
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}