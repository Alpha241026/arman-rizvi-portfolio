import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Overview", href: "#overview", stratum: "00", ready: true },
  { label: "Projects", href: "#projects", stratum: "01", ready: false },
  { label: "Journey", href: "#journey", stratum: "02", ready: false },
  { label: "Skills", href: "#skills", stratum: "03", ready: false },
  { label: "Contact", href: "#contact", stratum: "04", ready: false },
];


function Ammonite({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M24 24 m0 -16 a16 16 0 1 1 -11.3 4.7 a11.5 11.5 0 1 0 8.2 -3.4 a7.5 7.5 0 1 1 -5.3 2.2"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M24 8v32M8 24h32" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
    </svg>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1400px] items-center gap-6 px-5 py-3 md:px-10">
        <a href="#top" className="flex items-center gap-3 text-primary">
          <Ammonite className="h-8 w-8 text-accent" />
          <span className="leading-none">
            <span className="block font-display text-lg tracking-tight">Arman Rizvi</span>
            <span className="label-field block">Field Record</span>
          </span>
        </a>

        <nav className="ml-auto hidden items-center gap-7 md:flex">
          {nav.map((item) =>
            item.ready ? (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-baseline gap-1.5 text-sm text-foreground/80 transition-colors hover:text-foreground"
              >
                <span className="font-mono text-[0.6rem] text-accent">{item.stratum}</span>
                <span className="link-underline">{item.label}</span>
              </a>
            ) : (
              <span
                key={item.href}
                aria-disabled
                title="Not yet excavated"
                className="flex items-baseline gap-1.5 text-sm text-muted-foreground/70"
              >
                <span className="font-mono text-[0.6rem] text-muted-foreground/60">
                  {item.stratum}
                </span>
                <span className="border-b border-dotted border-border pb-px">{item.label}</span>
              </span>
            ),
          )}
        </nav>


        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="ml-auto inline-flex h-9 w-9 items-center justify-center border border-border text-foreground md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/70 bg-card md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-3 border-b border-border/60 px-5 py-3 text-sm last:border-b-0"
            >
              <span className="font-mono text-[0.6rem] text-accent">{item.stratum}</span>
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
