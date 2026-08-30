import { useState } from "react";
import { ChevronDown, ExternalLink, Github } from "lucide-react";
import chimeraUi from "@/assets/chimera-ui.png.asset.json";
import memorytrailRepo from "@/assets/memorytrail-repo.png.asset.json";
import memorytrailBackend from "@/assets/memorytrail-backend.png.asset.json";
import synclipWeb from "@/assets/synclip-web.png.asset.json";
import synclipAndroid from "@/assets/synclip-android.png.asset.json";

/* ---------- Diagrammatic specimen plates (hand-drawn SVG, no new deps) ---------- */

function PlateFrame({
  children,
  caption,
  code,
  className = "",
}: {
  children: React.ReactNode;
  caption: string;
  code: string;
  className?: string;
}) {
  return (
    <figure className={`plate paper-grain p-3 ${className}`}>
      <div className="relative">{children}</div>
      <figcaption className="mt-3 flex items-baseline justify-between gap-4 border-t border-border pt-2">
        <span className="label-field">{caption}</span>
        <span className="font-mono text-[0.65rem] text-muted-foreground">{code}</span>
      </figcaption>
    </figure>
  );
}

type Capture = { src: string; alt: string; label: string; fig: string };

function FieldCapture({ src, alt, label, fig }: Capture) {
  return (
    <figure className="plate paper-grain group/cap p-2">
      <div className="overflow-hidden border border-border bg-background">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="block h-auto max-h-[420px] w-full object-contain object-top opacity-[0.94] transition duration-500 group-hover/cap:opacity-100 group-hover/cap:brightness-[1.02]"
        />
      </div>
      <figcaption className="mt-2 flex items-baseline justify-between gap-3 border-t border-border pt-1.5">
        <span className="label-field text-[0.55rem]">{label}</span>
        <span className="font-mono text-[0.6rem] text-muted-foreground">{fig}</span>
      </figcaption>
    </figure>
  );
}

function LayeredArchitecture() {
  const layers = ["Route", "Controller", "Service", "Repository", "Model"];
  return (
    <svg viewBox="0 0 340 220" className="h-auto w-full" role="img" aria-label="Layered backend diagram: route, controller, service, repository, model, with an external API execution branch">
      <g stroke="var(--strata)" strokeWidth="0.4" opacity="0.35" fill="none">
        <path d="M10 10h20M10 10v20M330 210h-20M330 210v-20" />
      </g>
      {layers.map((l, i) => (
        <g key={l}>
          <rect
            x={40}
            y={18 + i * 37}
            width={170}
            height={26}
            fill="var(--background)"
            stroke="var(--strata)"
            strokeWidth="0.7"
            opacity={1 - i * 0.06}
          />
          <text
            x={52}
            y={35 + i * 37}
            fill="var(--ink)"
            fontFamily="var(--font-mono)"
            fontSize="9"
            letterSpacing="1.5"
          >
            {l.toUpperCase()}
          </text>
          <text
            x={200}
            y={35 + i * 37}
            textAnchor="end"
            fill="var(--ochre)"
            fontFamily="var(--font-mono)"
            fontSize="7"
          >
            L{i + 1}
          </text>
          {i < layers.length - 1 && (
            <path
              d={`M125 ${44 + i * 37}v11`}
              stroke="var(--ochre)"
              strokeWidth="0.8"
              markerEnd=""
            />
          )}
        </g>
      ))}
      <g stroke="var(--strata)" strokeWidth="0.5" strokeDasharray="2 2" fill="none">
        <path d="M210 31h70v128h-70" />
        <path d="M210 159h70" />
      </g>
      <text x={284} y={92} fill="var(--muted-foreground)" fontFamily="var(--font-mono)" fontSize="7">
        DI
      </text>
      <g>
        <circle cx="280" cy="31" r="2" fill="var(--ochre)" />
        <circle cx="280" cy="159" r="2" fill="var(--ochre)" />
      </g>
      <text x={40} y={212} fill="var(--muted-foreground)" fontFamily="var(--font-mono)" fontSize="5.8" letterSpacing="0.4">
        REQUEST → VALIDATION → EXTERNAL EXECUTION → STANDARDISED RESPONSE
      </text>
    </svg>
  );
}

function RelationDiagram() {
  const nodes = [
    { x: 40, y: 30, t: "USER" },
    { x: 140, y: 90, t: "TRIP" },
    { x: 40, y: 150, t: "MEMORY" },
    { x: 240, y: 40, t: "PHOTO" },
    { x: 240, y: 140, t: "LOCATION" },
  ];
  return (
    <svg viewBox="0 0 320 190" className="h-auto w-full" role="img" aria-label="Entity relationship sketch linking users, trips, memories, photos and locations">
      <g stroke="var(--ochre)" strokeWidth="0.7" fill="none">
        <path d="M85 40 L140 88" />
        <path d="M85 152 L140 100" />
        <path d="M185 86 L240 46" />
        <path d="M185 96 L240 138" />
      </g>
      {nodes.map((n) => (
        <g key={n.t}>
          <rect
            x={n.x}
            y={n.y}
            width={n.t.length > 6 ? 62 : 50}
            height={20}
            fill="var(--background)"
            stroke="var(--strata)"
            strokeWidth="0.7"
          />
          <text
            x={n.x + 7}
            y={n.y + 14}
            fill="var(--ink)"
            fontFamily="var(--font-mono)"
            fontSize="7.5"
            letterSpacing="1"
          >
            {n.t}
          </text>
        </g>
      ))}
      <g stroke="var(--strata)" strokeWidth="0.4" strokeDasharray="2 2" opacity="0.6">
        <path d="M20 175h280" />
      </g>
      <text x={20} y={185} fill="var(--muted-foreground)" fontFamily="var(--font-mono)" fontSize="6.5" letterSpacing="1">
        TIMELINE AXIS · TRIP STATISTICS
      </text>
    </svg>
  );
}

function SyncDiagram() {
  return (
    <svg viewBox="0 0 320 190" className="h-auto w-full" role="img" aria-label="Synchronisation diagram between a web client and an Android client through a shared realtime store">
      <rect x={20} y={30} width={80} height={44} fill="var(--background)" stroke="var(--strata)" strokeWidth="0.7" />
      <text x={30} y={50} fill="var(--ink)" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="1">WEB</text>
      <text x={30} y={64} fill="var(--muted-foreground)" fontFamily="var(--font-mono)" fontSize="6.5">clipboard api</text>

      <rect x={220} y={30} width={80} height={44} fill="var(--background)" stroke="var(--strata)" strokeWidth="0.7" />
      <text x={230} y={50} fill="var(--ink)" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="1">ANDROID</text>
      <text x={230} y={64} fill="var(--muted-foreground)" fontFamily="var(--font-mono)" fontSize="6.5">flutter</text>

      <ellipse cx={160} cy={140} rx={62} ry={26} fill="var(--background)" stroke="var(--strata)" strokeWidth="0.7" />
      <text x={160} y={138} textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-mono)" fontSize="7.5" letterSpacing="1">FIRESTORE</text>
      <text x={160} y={150} textAnchor="middle" fill="var(--muted-foreground)" fontFamily="var(--font-mono)" fontSize="6.5">realtime store</text>

      <g stroke="var(--ochre)" strokeWidth="0.8" fill="none">
        <path d="M70 74 L120 120" />
        <path d="M250 74 L200 120" />
        <path d="M84 74 L134 120" strokeDasharray="2 2" />
        <path d="M236 74 L186 120" strokeDasharray="2 2" />
      </g>
      <g fill="var(--ochre)">
        <circle cx="120" cy="120" r="1.6" />
        <circle cx="200" cy="120" r="1.6" />
      </g>
      <text x={20} y={182} fill="var(--muted-foreground)" fontFamily="var(--font-mono)" fontSize="6.5" letterSpacing="1">
        BIDIRECTIONAL TRANSFER · SIMULTANEOUS SHARE / DELETE
      </text>
    </svg>
  );
}

/* ---------- Data ---------- */

type Specimen = {
  n: string;
  name: string;
  focus: string;
  period: string;
  classification: string;
  summary: string;
  work: string[];
  tech: string[];
  plate: () => React.ReactElement;
  plateCaption: string;
  plateCode: string;
  captures: Capture[];
  repo?: { label: string; url: string; privateArchive?: boolean };
  archiveNote?: string;
};

const specimens: Specimen[] = [
  {
    n: "01",
    name: "Chimera API Workspace",
    focus: "Architecture",
    period: "August 2026 — Present",
    classification: "Developer tooling · Layered backend",
    summary:
      "A developer-focused API workspace for organizing, configuring, executing and inspecting HTTP requests through a unified interface.",
    work: [
      "Layered Flask backend: Route → Controller → Service → Repository → Model",
      "Dependency injection between layers",
      "Project and Endpoint CRUD",
      "Hierarchical project → endpoint ownership",
      "Reusable request definitions",
      "Request validation and JSON handling",
      "External API execution with standardized responses",
      "Dynamic frontend rendering with vanilla JavaScript and the Fetch API",
      "In-memory storage currently used to validate the architecture",
      "PostgreSQL persistence planned",
      "Dedicated Go execution subsystem planned as a later architectural slice",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Fetch API", "Python", "Flask"],
    plate: LayeredArchitecture,
    plateCaption: "Plate II — Architectural Section",
    plateCode: "fig. 2.0 · spec. AR-P01",
    captures: [
      {
        src: chimeraUi.url,
        alt: "Chimera API workspace interface showing projects, endpoint configuration and a JSON response panel",
        label: "Interface specimen",
        fig: "fig. 2.1",
      },
    ],
    repo: { label: "Alpha241026/Project-Chimera", url: "https://github.com/Alpha241026/Project-Chimera" },
  },
  {
    n: "02",
    name: "MemoryTrail",
    focus: "Domain & relationships",
    period: "February 2026",
    classification: "Full-stack web · Team of four",
    summary:
      "A full-stack web application for documenting travel experiences through trips, photos, locations and notes.",
    work: [
      "Four-member team project",
      "Designed and tested backend models and routes for users, trips and memories",
      "Backend integration with the React frontend",
      "Registration and login with bcrypt password hashing and JWT authentication",
      "User ownership checks across trips and memories",
      "Trip creation with name, dates and cover image",
      "Memories with title, notes, photo uploads via Multer and latitude / longitude",
      "Chronological memory timeline, search by title, location or notes",
      "Date-range filtering, pagination and trip statistics",
    ],
    tech: [
      "React",
      "Vite",
      "React Router",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt.js",
      "Multer",
    ],
    plate: RelationDiagram,
    plateCaption: "Plate III — Relation Study",
    plateCode: "fig. 3.0 · spec. AR-P02",
    captures: [
      {
        src: memorytrailBackend.url,
        alt: "MemoryTrail backend repository structure with config, controllers, middleware, models and routes directories",
        label: "Backend structure",
        fig: "fig. 3.1",
      },
      {
        src: memorytrailRepo.url,
        alt: "MemoryTrail GitHub repository page showing the README and contributors",
        label: "Repository record",
        fig: "fig. 3.2",
      },
    ],
    repo: { label: "AjayGodara2/MemoryTrail", url: "https://github.com/AjayGodara2/MemoryTrail" },
  },
  {
    n: "03",
    name: "Synclip",
    focus: "Real-time flow",
    period: "November 2025 — December 2025",
    classification: "Real-time sync · Web + Android",
    summary:
      "A real-time cross-device text sharing and synchronization platform supporting text transfer between web and Android.",
    work: [
      "Collaborative team project",
      "Mobile application built with Flutter",
      "Communication between the JavaScript web side and the mobile app",
      "Firebase Firestore realtime state shared by both clients",
      "Firestore realtime listener with debounced synchronization",
      "Web Clipboard API interaction — copy, paste and clear",
      "Tested bidirectional text transfer and simultaneous sharing / deletion",
      "Focused on reliable synchronization without race conditions",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Flutter", "Web Clipboard API", "Firebase Firestore"],
    plate: SyncDiagram,
    plateCaption: "Plate IV — Flow Study",
    plateCode: "fig. 4.0 · spec. AR-P03",
    captures: [
      {
        src: synclipWeb.url,
        alt: "Synclip web client with a text area and copy, paste and clear controls",
        label: "Web client",
        fig: "fig. 4.1",
      },
      {
        src: synclipAndroid.url,
        alt: "Synclip Android client built with Flutter, showing the shared text field and copy, paste and clear controls",
        label: "Android client",
        fig: "fig. 4.2",
      },
    ],
    repo: {
      label: "Alpha241026/SynClip",
      url: "https://github.com/Alpha241026/SynClip",
      privateArchive: true,
    },
  },
];

/* ---------- Shared pieces ---------- */

function TechList({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-1.5">
      {tech.map((t) => (
        <li
          key={t}
          className="border-b border-dotted border-border pb-px font-mono text-[0.68rem] tracking-wide text-muted-foreground"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function Affordances({ s }: { s: Specimen }) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {s.repo ? (
        <>
          <a
            href={s.repo.url}
            target="_blank"
            rel="noreferrer noopener"
            className="link-underline inline-flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-widest text-accent"
          >
            <Github className="h-3.5 w-3.5" /> {s.repo.privateArchive ? "Private repository" : "Repository"}
          </a>
          <a
            href={s.repo.url}
            target="_blank"
            rel="noreferrer noopener"
            className="link-underline inline-flex items-center gap-1.5 font-mono text-[0.68rem] tracking-wide text-muted-foreground"
          >
            <ExternalLink className="h-3.5 w-3.5" /> {s.repo.label}
            {s.repo.privateArchive && (
              <span className="ml-1 align-middle text-[0.5rem] uppercase tracking-[0.18em] text-muted-foreground/70">
                · private archive
              </span>
            )}
          </a>
        </>
      ) : (
        <span className="label-field text-[0.55rem]">{s.archiveNote}</span>
      )}
    </div>
  );
}

function WorkLog({ items, id }: { items: string[]; id: string }) {
  const [open, setOpen] = useState(false);
  const head = items.slice(0, 3);
  const tail = items.slice(3);
  return (
    <div>
      <span className="label-field">Field observations</span>
      <ul className="mt-3 space-y-2">
        {head.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
            <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {tail.length > 0 && (
        <>
          <div
            id={id}
            className="grid transition-all duration-500 ease-out"
            style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
          >
            <div className="overflow-hidden">
              <ul className="mt-2 space-y-2 border-l border-dotted border-border pl-4">
                {tail.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                    <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={id}
            className="mt-4 inline-flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-widest text-accent transition-opacity hover:opacity-70"
          >
            {open ? "Collapse notes" : `Expand notes (+${tail.length})`}
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </button>
        </>
      )}
    </div>
  );
}

function SpecimenHeading({ s }: { s: Specimen }) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <span className="h-px w-8 bg-accent" />
        <span className="label-field">Specimen {s.n}</span>
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground/80">
          · {s.focus}
        </span>
      </div>
      <h3 className="mt-3 font-display text-2xl leading-tight text-primary md:text-3xl">
        {s.name}
      </h3>
      <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-widest text-accent">
        {s.period}
      </p>
      <p className="mt-1 text-xs text-muted-foreground">{s.classification}</p>
    </div>
  );
}

/* ---------- Section ---------- */

export function Projects() {
  const featured = specimens[0]!;
  const rest = specimens.slice(1);
  const FeaturedPlate = featured.plate;

  return (
    <section id="projects" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="label-field">Section 01 — Excavated Works</span>
            <h2 className="mt-3 font-display text-3xl text-primary md:text-4xl">Projects</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Technical specimens — discoveries of things built, catalogued with their structure,
            materials and field observations.
          </p>
        </div>

        {/* Featured specimen */}
        <article className="group mt-12 grid gap-8 border-t border-border pt-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="flex flex-col justify-between gap-8">
            <SpecimenHeading s={featured} />
            <p className="max-w-lg text-base leading-relaxed text-foreground/85">
              {featured.summary}
            </p>
            <WorkLog items={featured.work} id="work-01" />
            <div className="space-y-4">
              <span className="label-field">Materials</span>
              <TechList tech={featured.tech} />
              <Affordances s={featured} />
            </div>
          </div>

          <div className="flex flex-col gap-5 self-start">
            <PlateFrame
              caption={featured.plateCaption}
              code={featured.plateCode}
              className="transition-shadow group-hover:shadow-none"
            >
              <FeaturedPlate />
            </PlateFrame>
            {featured.captures.map((c) => (
              <FieldCapture key={c.fig} {...c} />
            ))}
          </div>
        </article>

        {/* Secondary specimens */}
        <div className="mt-14 grid gap-px bg-border lg:grid-cols-2">
          {rest.map((s) => {
            const Plate = s.plate;
            return (
              <article
                key={s.n}
                className="flex flex-col gap-6 bg-background p-6 transition-colors hover:bg-card md:p-8"
              >
                <SpecimenHeading s={s} />
                <PlateFrame caption={s.plateCaption} code={s.plateCode}>
                  <Plate />
                </PlateFrame>
                <div
                  className={`grid gap-4 ${s.captures.length > 1 ? "sm:grid-cols-2" : ""}`}
                >
                  {s.captures.map((c) => (
                    <FieldCapture key={c.fig} {...c} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground/85">{s.summary}</p>
                <WorkLog items={s.work} id={`work-${s.n}`} />
                <div className="mt-auto space-y-4 border-t border-border pt-5">
                  <span className="label-field">Materials</span>
                  <TechList tech={s.tech} />
                  <Affordances s={s} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
