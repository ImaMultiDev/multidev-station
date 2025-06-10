"use client";

import { useState } from "react";
import Link from "next/link";
import { frameworkData, Library } from "@/constants/frameworkData";
import { Icon } from "@/components/Icons";
import { ExpandIcon } from "@/components/Icons";

interface FrameworkDetailProps {
  framework: {
    id: string;
    name: string;
    description: string;
    icon: string;
    color: string;
    libraries: string[];
  };
}

function LibraryCard({ lib }: { lib: Library }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const difficultyColors = {
    beginner: "bg-green-100 text-green-800 border-green-200",
    intermediate: "bg-yellow-100 text-yellow-800 border-yellow-200",
    advanced: "bg-red-100 text-red-800 border-red-200",
  };

  return (
    <div className="bg-surface border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold">
            <p className="text-xl text-white font-bold">FW</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">{lib.name}</h3>
            <div className="flex items-center space-x-2 mt-1">
              <span
                className={`px-2 py-1 text-xs rounded-md border ${
                  difficultyColors[lib.difficulty]
                }`}
              >
                {lib.difficulty}
              </span>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < lib.popularity ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary hover:text-primary-dark transition-colors"
        >
          <ExpandIcon
            className={`w-5 h-5 transform transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <p className="text-text-muted text-sm mb-4">{lib.description}</p>

      {isExpanded && (
        <div className="space-y-4 border-t border-border pt-4">
          {/* Installation */}
          <div>
            <h4 className="font-medium mb-2 text-sm">Instalación:</h4>
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-3">
              {lib.installation.map((step, index) => (
                <div
                  key={index}
                  className="font-mono text-sm text-neutral-700 dark:text-neutral-300"
                >
                  <span className="text-neutral-500 mr-2">{index + 1}.</span>
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Documentation Link */}
          <div className="pt-2">
            <a
              href={lib.documentation}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors text-sm"
            >
              <span>Ver documentación</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

type TabType = "libraries" | "roadmap" | "resources";

export default function FrameworkDetail({ framework }: FrameworkDetailProps) {
  const [activeTab, setActiveTab] = useState<TabType>("libraries");

  // Buscar los datos detallados del proyecto
  const detailedFramework = frameworkData.find((p) => p.id === framework.id);

  if (!detailedFramework) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-surface to-background">
        <div className="py-20 px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Framework en desarrollo</h1>
          <p className="text-text-muted mb-8">
            Los detalles de este framework estarán disponibles pronto.
          </p>
          <Link href="/" className="text-primary hover:text-primary-dark">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-background via-surface to-background">
      {/* Hero Section */}
      <section className="mx-auto w-2/3 p-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-6">
            <Link
              href="/framework"
              className="text-text-muted hover:text-text transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </Link>
            <span className="text-text-muted">•</span>
            <span className="text-text-muted text-sm">Otros Frameworks</span>
          </div>

          <div className="flex items-center gap-6 mb-8">
            <div
              className={`w-16 h-16 bg-gradient-to-br ${framework.color} rounded-xl flex items-center justify-center text-white`}
            >
              <Icon name={framework.icon} className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {framework.name}
              </h1>
              <p className="text-xl text-text-muted max-w-2xl">
                {framework.description}
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-border">
            <nav className="flex gap-8">
              {[
                {
                  id: "libraries" as TabType,
                  label: "Librerías",
                  count: detailedFramework.libraries.length,
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? "border-primary text-primary"
                      : "border-transparent text-text-muted hover:text-text hover:border-border"
                  }`}
                >
                  {tab.label}
                  <span className="ml-2 bg-surface-hover text-text-muted px-2 py-1 rounded-full text-xs">
                    {tab.count}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="lg:w-2/3 lg:mx-auto pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {activeTab === "libraries" && (
            <div className="grid grid-cols-1 gap-6">
              {detailedFramework.libraries.map((lib) => (
                <LibraryCard key={lib.id} lib={lib} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
