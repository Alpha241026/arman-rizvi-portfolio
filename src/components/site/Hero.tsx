import heroPlate from "@/assets/hero-plate.jpg";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const strata = [
  { era: "Cenozoic", note: "Backend systems & scalable services", depth: "0–1 km" },
  { era: "Mesozoic", note: "Web development, databases, real projects", depth: "1–4 km" },
  { era: "Paleozoic", note: "C, C++, Java — fundamentals", depth: "4–8 km" },
  { era: "Precambrian", note: "First curiosity about how things work", depth: "8+ km" },
];

export function Hero() {
  return (
    <section id="top" className="relative border-b border-border">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Left: editorial title block */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="label-field">Specimen 01 · Software Engineer</span>
          </div>

          <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,5.2rem)] font-semibold leading-[0.95] tracking-tight text-primary">
            Arman Rizvi
          </h1>

          <p className="mt-4 max-w-lg font-display text-xl text-foreground/85 md:text-2xl">
            Backend-oriented builder documenting a slow, layered evolution into systems, APIs and
            clean architecture.
          </p>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Computer Science &amp; Engineering student. This site is kept like a field record —
            each project logged as a specimen, each phase as a stratum of learning.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 border border-primary bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore the record
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <div className="flex items-center gap-4 text-muted-foreground">
              <a href="#contact" aria-label="GitHub" className="transition-colors hover:text-accent">
                <Github className="h-5 w-5" />
              </a>
              <a href="#contact" aria-label="LinkedIn" className="transition-colors hover:text-accent">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#contact" aria-label="Email" className="transition-colors hover:text-accent">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right: illustrated plate + stratigraphic column */}
        <div className="grid gap-6 sm:grid-cols-[1fr_auto] lg:gap-8">
          <figure className="plate paper-grain p-3">
            <img
              src={heroPlate}
              alt="Engraved natural-history landscape plate with sauropods among ferns at dusk"
              width={1536}
              height={1024}
              className="h-full w-full object-cover"
            />
            <figcaption className="mt-3 flex items-baseline justify-between gap-4 border-t border-border pt-2">
              <span className="label-field">Plate I — Deep Time</span>
              <span className="font-mono text-[0.65rem] text-muted-foreground">fig. 1.0</span>
            </figcaption>
          </figure>

          <ol className="relative flex flex-col justify-between gap-5 border-l border-border pl-5 sm:w-52">
            {strata.map((s, i) => (
              <li key={s.era} className="relative">
                <span
                  className="absolute -left-[1.55rem] top-1.5 h-2 w-2 rounded-full border border-accent"
                  style={{ backgroundColor: i === 0 ? "var(--ochre)" : "var(--background)" }}
                />
                <p className="font-display text-sm uppercase tracking-widest text-primary">{s.era}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.note}</p>
                <p className="mt-1 font-mono text-[0.6rem] text-accent">{s.depth}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
