"use client";

import Hero from "./components/Hero";
import ProjectTypesGrid from "./components/ProjectTypesGrid";
import Features from "./components/Features";

export default function Home() {
  return (
    <div className="w-full py-24 flex flex-col gap-24 bg-gradient-to-br from-background via-surface to-background">
      <Hero />
      <ProjectTypesGrid />
      <Features />
    </div>
  );
}
