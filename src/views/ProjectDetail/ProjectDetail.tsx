"use client";

import { useState } from "react";
import Link from "next/link";
import { projectsData, Technology } from "@/constants/projectData";
import { Icon } from "@/components/Icons";
import { ExpandIcon } from "@/components/Icons";

interface ProjectDetailProps {
  project: {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    technologies: string[];
  };
}

function TechnologyCard({ tech }: { tech: Technology }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const difficultyColors = {
    beginner: "bg-green-100 text-green-800 border-green-200",
    intermediate: "bg-yellow-100 text-yellow-800 border-yellow-200",
    advanced: "bg-red-100 text-red-800 border-red-200",
  };

  const categoryIcons = {
    language: "LNG",
    framework: "FW",
    library: "LIB",
    tool: "🔧",
    database: "DB",
    platform: "PLA",
  };

  return (
    <div className="bg-surface border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold">
            <span className="text-xl">{categoryIcons[tech.category]}</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold">{tech.name}</h3>
            <div className="flex items-center space-x-2 mt-1">
              <span
                className={`px-2 py-1 text-xs rounded-md border ${
                  difficultyColors[tech.difficulty]
                }`}
              >
                {tech.difficulty}
              </span>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < tech.popularity ? "text-yellow-400" : "text-gray-300"
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

      <p className="text-text-muted text-sm mb-4">{tech.description}</p>

      {isExpanded && (
        <div className="space-y-4 border-t border-border pt-4">
          {/* Installation */}
          <div>
            <h4 className="font-medium mb-2 text-sm">Instalación:</h4>
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-3">
              {tech.installation.map((step, index) => (
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

          {/* Features */}
          <div>
            <h4 className="font-medium mb-2 text-sm">
              Características principales:
            </h4>
            <ul className="space-y-1">
              {tech.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-text-muted">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h4 className="font-medium mb-2 text-sm">Casos de uso:</h4>
            <div className="flex flex-wrap gap-2">
              {tech.useCases.map((useCase, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>

          {/* Documentation Link */}
          <div className="pt-2">
            <a
              href={tech.documentation}
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

type TabType = "technologies" | "roadmap" | "resources";

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [activeTab, setActiveTab] = useState<TabType>("technologies");

  // Buscar los datos detallados del proyecto
  const detailedProject = projectsData.find((p) => p.id === project.id);

  if (!detailedProject) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-surface to-background">
        <div className="py-20 px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Proyecto en desarrollo</h1>
          <p className="text-text-muted mb-8">
            Los detalles de este proyecto estarán disponibles pronto.
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
              href="/"
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
            <span className="text-text-muted text-sm">Tipos de Proyectos</span>
          </div>

          <div className="flex items-center gap-6 mb-8">
            <div
              className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center text-white`}
            >
              <Icon name={project.icon} className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {project.title}
              </h1>
              <p className="text-xl text-text-muted max-w-2xl">
                {project.description}
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-border">
            <nav className="flex gap-8">
              {[
                {
                  id: "technologies" as TabType,
                  label: "Tecnologías",
                  count: detailedProject.technologies.length,
                },
                {
                  id: "roadmap" as TabType,
                  label: "Roadmap",
                  count: detailedProject.roadmap.length,
                },
                {
                  id: "resources" as TabType,
                  label: "Recursos",
                  count: detailedProject.resources.length,
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
          {activeTab === "technologies" && (
            <div className="grid grid-cols-1 gap-6">
              {detailedProject.technologies.map((tech) => (
                <TechnologyCard key={tech.id} tech={tech} />
              ))}
            </div>
          )}

          {activeTab === "roadmap" && (
            <div className="space-y-8">
              {detailedProject.roadmap.map((phase, index) => (
                <div
                  key={index}
                  className="bg-surface border border-border rounded-xl p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-text-muted mb-4">
                        {phase.description}
                      </p>
                      <ul className="space-y-2">
                        {phase.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start space-x-3"
                          >
                            <svg
                              className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-text-muted">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "resources" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {detailedProject.resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-surface border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                        {resource.type === "documentation" && (
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        )}
                        {resource.type === "tutorial" && (
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10V9a2 2 0 012-2h2a2 2 0 012 2v1m-4 0v10m0-10h4v10"
                            />
                          </svg>
                        )}
                        {resource.type === "course" && (
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        )}
                        {resource.type === "tool" && (
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        )}
                        {resource.type === "template" && (
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                            />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold">{resource.title}</h3>
                        <span className="text-xs text-text-muted capitalize">
                          {resource.type}
                        </span>
                      </div>
                    </div>
                    {resource.free && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-md font-medium">
                        Gratis
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-text-muted mb-4">
                    {resource.description}
                  </p>

                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors text-sm font-medium"
                  >
                    <span>Ver recurso</span>
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
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
