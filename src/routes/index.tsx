import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { StrataBackground } from "@/components/site/StrataBackground";
import { Hero } from "@/components/site/Hero";
import { FieldNotes } from "@/components/site/FieldNotes";
import { Projects } from "@/components/site/Projects";
import { Journey } from "@/components/site/Journey";
import { Skills } from "@/components/site/Skills";
import { FieldRecord } from "@/components/site/FieldRecord";
import { Contact } from "@/components/site/Contact";
import { MotionSystem } from "@/components/site/MotionSystem";

const title = "Arman Rizvi — Backend-Oriented Software Engineer";
const description =
  "Field record of Arman Rizvi, a CSE student and backend-oriented developer building systems, APIs and clean architecture.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <MotionSystem />
      <StrataBackground />
      <SiteHeader />
      <main>
        <Hero />
        <FieldNotes />
        <Projects />
        <Journey />
        <Skills />
        <FieldRecord />
        <Contact />
      </main>
      <footer className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 px-5 py-8 md:px-10">
        <span className="label-field">Arman Rizvi · Field Record</span>
        <span className="font-mono text-[0.65rem] text-muted-foreground">
          Edition 01 · in progress
        </span>
      </footer>
    </div>
  );
}
