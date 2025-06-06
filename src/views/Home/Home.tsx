"use client";

import Header from "@/components/Ui/Header";
import Hero from "./components/Hero";
import ProjectTypesGrid from "./components/ProjectTypesGrid";
import Features from "./components/Features";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface to-background">
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Project Types Grid */}
      <ProjectTypesGrid />

      {/* Features Section */}
      <Features />
    </div>
  );
}
