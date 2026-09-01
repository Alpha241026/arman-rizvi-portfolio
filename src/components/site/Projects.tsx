import { useState } from "react";
import { ChevronDown, ExternalLink, Github, ArrowUpRight } from "lucide-react";

/* ---------- Project-specific specimen plates ---------- */

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
      <div className="relative overflow-hidden">{children}</div>
      <figcaption className="mt-3 flex items-baseline justify-between gap-4 border-t border-border pt-2">
        <span className="label-field">{caption}</span>
        <span className="font-mono text-[0.65rem] text-muted-foreground">{code}</span>
      </figcaption>
    </figure>
  );
}

function LayeredArchitecture() {
  const layers = ["Route", "Controller", "Service", "Repository", "Model"];

  return (
    <svg
      viewBox="0 0 520 280"
      className="h-auto w-full"
      role="img"
      aria-label="Chimera layered backend architecture diagram"
    >
      <g stroke="var(--strata)" strokeWidth="0.5" opacity="0.35" fill="none">
        <path d="M16 16h24M16 16v24M504 264h-24M504 264v-24" />
        <path d="M16 54h488M16 232h488" strokeDasharray="2 4" />
      </g>

      <text
        x="28"
        y="44"
        fill="var(--muted-foreground)"
        fontFamily="var(--font-mono)"
        fontSize="8"
        letterSpacing="1.6"
      >
        ARCHITECTURAL SECTION / REQUEST PATH
      </text>

      {layers.map((layer, i) => (
        <g key={layer}>
          <rect
            x="44"
            y={68 + i * 31}
            width="240"
            height="22"
            fill="var(--background)"
            stroke={i === 2 ? "var(--ochre)" : "var(--strata)"}
            strokeWidth={i === 2 ? "1" : "0.7"}
          />
          <text
            x="56"
            y={82 + i * 31}
            fill="var(--ink)"
            fontFamily="var(--font-mono)"
            fontSize="8.5"
            letterSpacing="1.2"
          >
            {layer.toUpperCase()}
          </text>
          <text
            x="272"
            y={82 + i * 31}
            textAnchor="end"
            fill="var(--ochre)"
            fontFamily="var(--font-mono)"
            fontSize="6.5"
          >
            L0{i + 1}
          </text>
          {i < layers.length - 1 && (
            <path
              d={`M164 ${90 + i * 31}v9`}
              stroke="var(--ochre)"
              strokeWidth="0.8"
            />
          )}
        </g>
      ))}

      <g fill="none" stroke="var(--strata)" strokeWidth="0.6" strokeDasharray="2 3">
        <path d="M284 79h74v93h-74" />
        <path d="M284 172h74" />
      </g>

      <circle cx="358" cy="79" r="2.2" fill="var(--ochre)" />
      <circle cx="358" cy="172" r="2.2" fill="var(--ochre)" />

      <text
        x="370"
        y="101"
        fill="var(--ink)"
        fontFamily="var(--font-mono)"
        fontSize="7.5"
        letterSpacing="1"
      >
        DEPENDENCY
      </text>
      <text
        x="370"
        y="114"
        fill="var(--muted-foreground)"
        fontFamily="var(--font-mono)"
        fontSize="7"
      >
        INJECTION
      </text>

      <path d="M360 125h62" stroke="var(--ochre)" strokeWidth="0.7" />
      <circle cx="422" cy="125" r="2" fill="var(--ochre)" />

      <text
        x="370"
        y="145"
        fill="var(--muted-foreground)"
        fontFamily="var(--font-mono)"
        fontSize="7"
      >
        EXTERNAL API
      </text>
      <text
        x="370"
        y="156"
        fill="var(--muted-foreground)"
        fontFamily="var(--font-mono)"
        fontSize="7"
      >
        EXECUTION
      </text>

      <text
        x="44"
        y="254"
        fill="var(--muted-foreground)"
        fontFamily="var(--font-mono)"
        fontSize="7"
        letterSpacing="1"
      >
        VALIDATION → EXECUTION → STANDARDISED RESPONSE
      </text>
    </svg>
  );
}

function RelationDiagram() {
  return (
    <svg
      viewBox="0 0 520 300"
      className="h-auto w-full"
      role="img"
      aria-label="MemoryTrail field map showing a trip path connecting memories, photos and locations"
    >
      <g stroke="var(--strata)" strokeWidth="0.5" opacity="0.35" fill="none">
        <path d="M18 18h26M18 18v26M502 282h-26M502 282v-26" />
        <path d="M18 64h484M18 250h484" strokeDasharray="2 4" />
      </g>

      <text
        x="28"
        y="43"
        fill="var(--muted-foreground)"
        fontFamily="var(--font-mono)"
        fontSize="8"
        letterSpacing="1.6"
      >
        FIELD MAP / TRIP RECORD
      </text>

      {/* faint terrain/grid lines */}
      <g stroke="var(--strata)" strokeWidth="0.45" opacity="0.22" fill="none">
        <path d="M30 98 C110 72 152 116 220 92 S350 76 490 108" />
        <path d="M30 132 C112 108 164 146 238 126 S378 112 490 140" />
        <path d="M30 170 C120 146 178 190 252 162 S392 154 490 182" />
        <path d="M30 208 C118 182 178 224 250 198 S386 190 490 218" />
        <path d="M86 78v154M174 78v154M286 78v154M398 78v154" />
      </g>

      {/* route / trip trace */}
      <path
        d="M76 204 C108 188 104 146 154 132 S226 112 268 146 S340 198 382 168 S426 116 456 96"
        fill="none"
        stroke="var(--ochre)"
        strokeWidth="1.4"
      />
      <path
        d="M76 204 C108 188 104 146 154 132 S226 112 268 146 S340 198 382 168 S426 116 456 96"
        fill="none"
        stroke="var(--ochre)"
        strokeWidth="0.6"
        strokeDasharray="2 4"
        opacity="0.75"
      />

      {/* record nodes */}
      <g>
        <circle cx="76" cy="204" r="5" fill="var(--background)" stroke="var(--ochre)" strokeWidth="1" />
        <circle cx="154" cy="132" r="4" fill="var(--background)" stroke="var(--strata)" strokeWidth="0.8" />
        <circle cx="268" cy="146" r="6" fill="var(--background)" stroke="var(--ochre)" strokeWidth="1" />
        <circle cx="382" cy="168" r="4" fill="var(--background)" stroke="var(--strata)" strokeWidth="0.8" />
        <circle cx="456" cy="96" r="5" fill="var(--background)" stroke="var(--ochre)" strokeWidth="1" />
      </g>

      <g fill="var(--ink)" fontFamily="var(--font-mono)" fontSize="7" letterSpacing="1">
        <text x="58" y="225">MEMORY</text>
        <text x="132" y="116">PHOTO</text>
        <text x="250" y="170">TRIP</text>
        <text x="360" y="190">LOCATION</text>
        <text x="430" y="80">PHOTO</text>
      </g>

      <g fill="var(--muted-foreground)" fontFamily="var(--font-mono)" fontSize="6.5">
        <text x="58" y="236">ENTRY 01</text>
        <text x="132" y="127">CAPTURE</text>
        <text x="250" y="182">ANCHOR</text>
        <text x="360" y="202">COORDINATE</text>
        <text x="430" y="91">CAPTURE</text>
      </g>

      <path
        d="M28 260h464"
        stroke="var(--strata)"
        strokeWidth="0.5"
        strokeDasharray="2 3"
      />
      <text
        x="28"
        y="276"
        fill="var(--muted-foreground)"
        fontFamily="var(--font-mono)"
        fontSize="6.5"
        letterSpacing="1"
      >
        TRIP TRACE · MEMORY INDEX · PHOTO / LOCATION RELATION
      </text>
    </svg>
  );
}

function SyncDiagram() {
  return (
    <svg
      viewBox="0 0 520 300"
      className="h-auto w-full"
      role="img"
      aria-label="Synclip synchronization flow showing web and Android clients exchanging shared clipboard state through Firestore"
    >
      <g stroke="var(--strata)" strokeWidth="0.5" opacity="0.35" fill="none">
        <path d="M18 18h26M18 18v26M502 282h-26M502 282v-26" />
        <path d="M18 64h484M18 246h484" strokeDasharray="2 4" />
      </g>

      <text
        x="28"
        y="43"
        fill="var(--muted-foreground)"
        fontFamily="var(--font-mono)"
        fontSize="8"
        letterSpacing="1.6"
      >
        SYNCHRONIZATION FLOW / SHARED STATE
      </text>

      {/* client lanes */}
      <text
        x="38"
        y="92"
        fill="var(--ink)"
        fontFamily="var(--font-mono)"
        fontSize="8"
        letterSpacing="1.2"
      >
        WEB
      </text>
      <text
        x="38"
        y="106"
        fill="var(--muted-foreground)"
        fontFamily="var(--font-mono)"
        fontSize="6.5"
      >
        CLIPBOARD API
      </text>

      <text
        x="38"
        y="170"
        fill="var(--ink)"
        fontFamily="var(--font-mono)"
        fontSize="8"
        letterSpacing="1.2"
      >
        ANDROID
      </text>
      <text
        x="38"
        y="184"
        fill="var(--muted-foreground)"
        fontFamily="var(--font-mono)"
        fontSize="6.5"
      >
        FLUTTER CLIENT
      </text>

      <line x1="118" y1="88" x2="468" y2="88" stroke="var(--strata)" strokeWidth="0.5" />
      <line x1="118" y1="166" x2="468" y2="166" stroke="var(--strata)" strokeWidth="0.5" />

      {/* shared state column */}
      <rect
        x="270"
        y="72"
        width="118"
        height="110"
        fill="var(--background)"
        stroke="var(--ochre)"
        strokeWidth="0.9"
      />
      <text
        x="329"
        y="105"
        textAnchor="middle"
        fill="var(--ink)"
        fontFamily="var(--font-mono)"
        fontSize="8"
        letterSpacing="1"
      >
        FIRESTORE
      </text>
      <text
        x="329"
        y="119"
        textAnchor="middle"
        fill="var(--muted-foreground)"
        fontFamily="var(--font-mono)"
        fontSize="6.5"
      >
        SHARED STATE
      </text>
      <path d="M294 137h70M294 149h70M294 161h70" stroke="var(--strata)" strokeWidth="0.5" />
      <circle cx="294" cy="137" r="2" fill="var(--ochre)" />
      <circle cx="364" cy="149" r="2" fill="var(--ochre)" />
      <circle cx="294" cy="161" r="2" fill="var(--ochre)" />

      {/* transfer paths */}
      <path d="M118 88 H238 L270 112" fill="none" stroke="var(--ochre)" strokeWidth="1" />
      <path d="M388 142 H424 L468 88" fill="none" stroke="var(--ochre)" strokeWidth="1" />
      <path d="M118 166 H238 L270 142" fill="none" stroke="var(--ochre)" strokeWidth="1" />
      <path d="M388 112 H424 L468 166" fill="none" stroke="var(--ochre)" strokeWidth="1" />

      {/* dashed return paths emphasize bidirectionality */}
      <path d="M118 98 H226 L258 120" fill="none" stroke="var(--ochre)" strokeWidth="0.6" strokeDasharray="3 3" />
      <path d="M402 150 H432 L468 98" fill="none" stroke="var(--ochre)" strokeWidth="0.6" strokeDasharray="3 3" />
      <path d="M118 176 H226 L258 150" fill="none" stroke="var(--ochre)" strokeWidth="0.6" strokeDasharray="3 3" />
      <path d="M402 122 H432 L468 176" fill="none" stroke="var(--ochre)" strokeWidth="0.6" strokeDasharray="3 3" />

      <g fill="var(--ochre)">
        <circle cx="238" cy="88" r="2" />
        <circle cx="388" cy="142" r="2" />
        <circle cx="238" cy="166" r="2" />
        <circle cx="388" cy="112" r="2" />
      </g>

      {/* event markers */}
      <text
        x="468"
        y="82"
        textAnchor="end"
        fill="var(--muted-foreground)"
        fontFamily="var(--font-mono)"
        fontSize="6.5"
      >
        WRITE / SHARE
      </text>
      <text
        x="468"
        y="194"
        textAnchor="end"
        fill="var(--muted-foreground)"
        fontFamily="var(--font-mono)"
        fontSize="6.5"
      >
        UPDATE / DELETE
      </text>

      <path
        d="M28 218h464"
        stroke="var(--strata)"
        strokeWidth="0.5"
        strokeDasharray="2 3"
      />
      <text
        x="28"
        y="235"
        fill="var(--muted-foreground)"
        fontFamily="var(--font-mono)"
        fontSize="6.5"
        letterSpacing="1"
      >
        BIDIRECTIONAL TRANSFER · SHARED REALTIME STATE · RACE-CONDITION TESTING
      </text>
    </svg>
  );
}


/* ---------- Project evidence ---------- */

type EvidenceImage = {
  src: string;
  alt: string;
  label: string;
  className?: string;
};

function EvidencePlate({
  images,
  diagram: Diagram,
  caption,
  code,
  layout = "featured",
}: {
  images: EvidenceImage[];
  diagram: () => React.ReactElement;
  caption: string;
  code: string;
  layout?: "featured" | "memory" | "sync";
}) {
  return (
    <PlateFrame caption={caption} code={code} className="self-start">
      <div className="space-y-3">
        {layout === "featured" && (
          <>
            <div className="relative overflow-hidden border border-border/70 bg-background/75">
              <img
                src={images[0]?.src}
                alt={images[0]?.alt}
                className="block h-auto w-full"
                loading="lazy"
              />
              <div className="absolute bottom-2 left-2 border border-border/70 bg-background/90 px-2 py-1 font-mono text-[0.55rem] uppercase tracking-[0.16em] text-muted-foreground">
                {images[0]?.label}
              </div>
            </div>

            <div className="border border-border/55 bg-background/45 p-2.5 md:p-3">
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="label-field text-[0.55rem]">Technical reading</span>
                <span className="font-mono text-[0.52rem] uppercase tracking-[0.16em] text-muted-foreground/60">
                  derived structure
                </span>
              </div>
              <Diagram />
            </div>
          </>
        )}

        {layout === "memory" && (
          <>
            <div className="relative overflow-hidden border border-border/70 bg-background/75">
              <img
                src={images[2]?.src}
                alt={images[2]?.alt}
                className="block h-auto w-full"
                loading="lazy"
              />
              <div className="absolute bottom-2 left-2 border border-border/70 bg-background/90 px-2 py-1 font-mono text-[0.55rem] uppercase tracking-[0.16em] text-muted-foreground">
                {images[2]?.label}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {images.slice(0, 2).map((image) => (
                <div
                  key={image.src}
                  className="relative overflow-hidden border border-border/65 bg-background/75"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="block h-auto w-full"
                    loading="lazy"
                  />
                  <div className="absolute bottom-1.5 left-1.5 border border-border/70 bg-background/90 px-1.5 py-0.5 font-mono text-[0.5rem] uppercase tracking-[0.14em] text-muted-foreground">
                    {image.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-border/55 bg-background/45 p-2.5">
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="label-field text-[0.55rem]">Technical reading</span>
                <span className="font-mono text-[0.52rem] uppercase tracking-[0.16em] text-muted-foreground/60">
                  relation model
                </span>
              </div>
              <Diagram />
            </div>
          </>
        )}

        {layout === "sync" && (
          <>
            <div className="grid grid-cols-[1.62fr_0.78fr] items-start gap-3">
              <div className="relative overflow-hidden border border-border/70 bg-background/75">
                <img
                  src={images[0]?.src}
                  alt={images[0]?.alt}
                  className="block h-auto w-full"
                  loading="lazy"
                />
                <div className="absolute bottom-2 left-2 border border-border/70 bg-background/90 px-2 py-1 font-mono text-[0.55rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {images[0]?.label}
                </div>
              </div>

              <div className="relative flex max-h-[360px] justify-center overflow-hidden border border-border/70 bg-background/75 p-2">
                <img
                  src={images[1]?.src}
                  alt={images[1]?.alt}
                  className="block h-[340px] w-auto max-w-full object-contain"
                  loading="lazy"
                />
                <div className="absolute bottom-2 left-2 border border-border/70 bg-background/90 px-2 py-1 font-mono text-[0.5rem] uppercase tracking-[0.14em] text-muted-foreground">
                  {images[1]?.label}
                </div>
              </div>
            </div>

            <div className="border border-border/55 bg-background/45 p-2.5">
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="label-field text-[0.55rem]">Technical reading</span>
                <span className="font-mono text-[0.52rem] uppercase tracking-[0.16em] text-muted-foreground/60">
                  shared state
                </span>
              </div>
              <Diagram />
            </div>
          </>
        )}
      </div>
    </PlateFrame>
  );
}

/* ---------- Data ---------- */

type Specimen = {
  n: string;
  name: string;
  period: string;
  classification: string;
  github: string;
  summary: string;
  work: string[];
  tech: string[];
  plate: () => React.ReactElement;
  plateCaption: string;
  plateCode: string;
  evidence: EvidenceImage[];
  evidenceLayout: "featured" | "memory" | "sync";
};

const specimens: Specimen[] = [
  {
    n: "01",
    name: "Chimera API Workspace",
    github: "https://github.com/Alpha241026/Project-Chimera",
    period: "August 2026 — Present",
    classification: "Developer tooling · Layered backend",
    summary:
      "A developer-focused API workspace for organizing, configuring, executing and inspecting HTTP requests through a unified interface.",
    work: [
      "Layered Flask backend: Route → Controller → Service → Repository → Model",
      "Dependency injection",
      "Project and Endpoint CRUD",
      "Hierarchical project → endpoint ownership",
      "Reusable request definitions",
      "Request validation and JSON handling",
      "External API execution with standardized responses",
      "Dynamic frontend rendering",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Python", "Flask"],
    plate: LayeredArchitecture,
    plateCaption: "Plate II — Field Capture / Architecture",
    plateCode: "fig. 2.0 · spec. AR-P01",
    evidence: [
      {
        src: "/projects/chimera-workspace.png",
        alt: "Chimera API Workspace showing projects, endpoint configuration, parameters, headers, request body and HTTP response",
        label: "field capture · workspace",
      },
    ],
    evidenceLayout: "featured",
  },
  {
    n: "02",
    name: "MemoryTrail",
    github: "https://github.com/AjayGodara2/MemoryTrail",
    period: "February 2026",
    classification: "Full-stack web · Team of four",
    summary:
      "A full-stack web application for documenting travel experiences through trips, photos, locations and notes.",
    work: [
      "Four-member team project",
      "Designed and tested backend models and routes for users, trips and memories",
      "Backend integration with the React frontend",
      "Memory timeline and trip statistics",
      "Location data storage",
      "Modular backend architecture",
      "Cross-team development under hackathon constraints",
    ],
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt.js",
      "Multer",
    ],
    plate: RelationDiagram,
    plateCaption: "Plate III — Field Record / Relation Study",
    plateCode: "fig. 3.0 · spec. AR-P02",
    evidence: [
      {
        src: "/projects/memorytrail-repository.png",
        alt: "MemoryTrail GitHub repository root showing the project structure and README",
        label: "repository",
      },
      {
        src: "/projects/memorytrail-backend.png",
        alt: "MemoryTrail backend GitHub directory showing config, controllers, middleware, models and routes",
        label: "backend",
      },
      {
        src: "/projects/memorytrail-frontend.png",
        alt: "MemoryTrail frontend GitHub directory showing the React application structure",
        label: "frontend",
      },
    ],
    evidenceLayout: "memory",
  },
  {
    n: "03",
    name: "Synclip",
    github: "https://github.com/Alpha241026/SynClip",
    period: "November 2025 — December 2025",
    classification: "Real-time sync · Web + Android",
    summary:
      "A real-time cross-device text sharing and synchronization platform supporting text transfer between web and Android.",
    work: [
      "Collaborative team project",
      "Mobile application built with Flutter",
      "Communication between the JavaScript web side and the mobile app",
      "Firebase Firestore backend",
      "Tested bidirectional text transfer and simultaneous sharing / deletion",
      "Focused on reliable synchronization without race conditions or synchronization bugs",
    ],
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Flutter",
      "Web Clipboard API",
      "Firebase Firestore",
    ],
    plate: SyncDiagram,
    plateCaption: "Plate IV — Field Capture / Flow Study",
    plateCode: "fig. 4.0 · spec. AR-P03",
    evidence: [
      {
        src: "/projects/synclip-web.png",
        alt: "Synclip web interface with a text area and Copy, Paste and Clear controls",
        label: "web client",
      },
      {
        src: "/projects/synclip-android.png",
        alt: "Synclip Android interface showing the shared text area and Copy, Paste and Clear controls",
        label: "android client",
      },
    ],
    evidenceLayout: "sync",
  },
];

/* ---------- Shared pieces ---------- */

function TechList({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-1.5">
      {tech.map((item) => (
        <li
          key={item}
          className="border-b border-dotted border-border pb-px font-mono text-[0.68rem] tracking-wide text-muted-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function Affordances({
  name,
  github,
}: {
  name: string;
  github: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-muted-foreground/70">
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-widest transition-colors hover:text-accent"
        aria-label={`${name} — GitHub repository`}
      >
        <Github className="h-3.5 w-3.5" />
        GitHub
      </a>
    </div>
  );
}

function WorkLog({ items, id }: { items: string[]; id: string }) {
  const [open, setOpen] = useState(false);
  const visible = open ? items : items.slice(0, 3);

  return (
    <div id={id}>
      <span className="label-field">Field observations</span>
      <ul className="mt-3 space-y-2">
        {visible.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-relaxed text-foreground/85"
          >
            <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {items.length > 3 && (
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={id}
          className="mt-4 inline-flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-widest text-accent"
        >
          {open ? "Collapse notes" : `Expand notes (+${items.length - 3})`}
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      )}
    </div>
  );
}

function SpecimenHeading({
  specimen,
  compact = false,
}: {
  specimen: Specimen;
  compact?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-accent" />
        <span className="label-field">Specimen {specimen.n}</span>
      </div>

      <h3
        className={`mt-3 font-display leading-tight text-primary ${
          compact ? "text-2xl" : "text-3xl md:text-4xl"
        }`}
      >
        {specimen.name}
      </h3>

      <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-widest text-accent">
        {specimen.period}
      </p>
      <p className="mt-1 text-xs text-muted-foreground">
        {specimen.classification}
      </p>
    </div>
  );
}

/* ---------- Section ---------- */

export function Projects() {
  const featured = specimens[0]!;
  const rest = specimens.slice(1);
  const FeaturedPlate = featured.plate;

  return (
    <section id="projects" className="scroll-mt-20 border-b border-border motion-section" data-motion="section">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        {/* Section header */}
        <header className="relative border-b border-border pb-8 md:pb-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="label-field">
                Section 01 — Excavated Works
              </span>
              <h2 className="mt-3 font-display text-4xl text-primary md:text-5xl">
                Projects
              </h2>
            </div>

            <div className="max-w-lg">
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Technical specimens — things built, tested and learned from,
                catalogued through their structure rather than reduced to
                screenshots.
              </p>
            </div>
          </div>

          <div className="mt-7 flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground/70">
            <span className="h-px w-10 bg-accent/60" />
            <span>03 specimens on record</span>
            <span className="h-1 w-1 rounded-full bg-accent" />
            <span>01 active excavation</span>
          </div>
        </header>

        {/* Featured specimen: the section's architectural centerpiece */}
        <article className="relative mt-12 overflow-hidden border border-border bg-card/20 p-5 md:mt-16 md:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-3 border border-border/40 md:inset-5" />
          <div className="pointer-events-none absolute left-0 top-8 h-px w-20 bg-accent/70" />
          <div className="pointer-events-none absolute bottom-8 right-0 h-px w-20 bg-accent/70" />

          <div className="relative grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
            <div className="flex flex-col">
              <div className="flex-1">
                <SpecimenHeading specimen={featured} />

                <p className="mt-7 max-w-xl text-base leading-relaxed text-foreground/85 md:text-lg">
                  {featured.summary}
                </p>

                <div className="mt-8 border-l border-accent/60 pl-5">
                  <span className="label-field">Current excavation</span>
                  <p className="mt-2 max-w-lg font-display text-lg leading-snug text-primary md:text-xl">
                    A backend workspace shaped around layered architecture,
                    reusable request definitions and the mechanics of actually
                    executing an HTTP request.
                  </p>
                </div>
              </div>

              <div className="mt-10 space-y-7 border-t border-border pt-7">
                <WorkLog items={featured.work} id="work-01" />

                <div>
                  <span className="label-field">Materials</span>
                  <div className="mt-3">
                    <TechList tech={featured.tech} />
                  </div>
                </div>

                <Affordances name={featured.name} github={featured.github} />
              </div>
            </div>

            <EvidencePlate
              images={featured.evidence}
              diagram={FeaturedPlate}
              caption={featured.plateCaption}
              code={featured.plateCode}
              layout={featured.evidenceLayout}
            />
          </div>
        </article>

        {/* Secondary specimens: each gets its own visual composition */}
        <div className="mt-12 space-y-12 md:mt-16 md:space-y-16">
          {rest.map((specimen, index) => {
            const Plate = specimen.plate;
            const isMemoryTrail = index === 0;

            return (
              <article
                key={specimen.n}
                className={`group relative overflow-hidden border-y border-border ${
                  isMemoryTrail ? "bg-card/15" : "bg-card/25"
                }`}
              >
                <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
                  {/* Visual side */}
                  <div
                    className={`relative p-5 md:p-8 ${
                      isMemoryTrail
                        ? "order-2 lg:order-1 lg:border-r lg:border-border"
                        : "order-2 lg:order-2 lg:border-l lg:border-border"
                    }`}
                  >
                    <div className="absolute inset-4 border border-border/35 md:inset-6" />
                    <div
                      className={`relative ${
                        isMemoryTrail
                          ? "bg-card/35 p-4 md:p-5"
                          : "border border-dashed border-border/70 bg-background/20 p-4 md:p-5"
                      }`}
                    >
                      <EvidencePlate
                        images={specimen.evidence}
                        diagram={Plate}
                        caption={specimen.plateCaption}
                        code={specimen.plateCode}
                        layout={specimen.evidenceLayout}
                      />
                    </div>

                    <div className="relative mt-4 flex items-center justify-between font-mono text-[0.56rem] uppercase tracking-[0.18em] text-muted-foreground/60">
                      <span>{isMemoryTrail ? "relation / field trace" : "client / state / transfer"}</span>
                      <span>plate {specimen.n}</span>
                    </div>
                  </div>

                  {/* Record side */}
                  <div
                    className={`flex flex-col justify-between p-6 md:p-9 lg:p-10 ${
                      isMemoryTrail ? "order-1 lg:order-2" : "order-1 lg:order-1"
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-5">
                        <SpecimenHeading specimen={specimen} compact />
                        <span className="shrink-0 font-mono text-[0.58rem] uppercase tracking-widest text-muted-foreground/60">
                          {isMemoryTrail ? "field study" : "flow study"}
                        </span>
                      </div>

                      <p className="mt-7 max-w-xl text-sm leading-relaxed text-foreground/85 md:text-base">
                        {specimen.summary}
                      </p>

                      <div className="mt-8">
                        <WorkLog items={specimen.work} id={`work-${specimen.n}`} />
                      </div>
                    </div>

                    <div className="mt-9 border-t border-border pt-5">
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="label-field">Materials</span>
                        <span className="font-mono text-[0.58rem] uppercase tracking-widest text-muted-foreground/60">
                          {specimen.tech.length} recorded
                        </span>
                      </div>

                      <div className="mt-3">
                        <TechList tech={specimen.tech} />
                      </div>

                      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                        <Affordances name={specimen.name} github={specimen.github} />
                        <ArrowUpRight className="h-4 w-4 text-accent/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Closing field note — intentionally quiet so Projects remains the star */}
        <div className="mt-14 border-t border-border pt-6 md:mt-20">
          <div className="flex flex-wrap items-baseline justify-between gap-5">
            <div className="flex items-center gap-3">
              <span className="label-field text-accent">Field note</span>
              <span className="h-px w-10 bg-accent/60" />
              <span className="font-mono text-[0.62rem] uppercase tracking-widest text-muted-foreground">
                catalogue remains open
              </span>
            </div>

            <p className="font-display text-sm italic text-muted-foreground md:text-base">
              More work will enter the record as it earns its place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}