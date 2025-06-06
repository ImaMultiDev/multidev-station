"use client";

import { useState } from "react";
import ProjectCard from "@/app/components/Ui/ProjectCard";
import Header from "@/app/components/Ui/Header";
import { projectTypes } from "@/app/constants/projectTypes";

const features = [
  {
    icon: "lightning",
    title: "Rápido y Organizado",
    description:
      "Encuentra rápidamente las tecnologías que necesitas, organizadas por tipo de proyecto y casos de uso.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: "shield",
    title: "Mejores Prácticas",
    description:
      "Documentación curada con las mejores prácticas y patrones de desarrollo para cada tecnología.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: "heart",
    title: "Siempre Actualizado",
    description:
      "Información actualizada sobre las últimas versiones, tendencias y novedades del mundo del desarrollo.",
    gradient: "from-accent to-primary",
  },
];

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface to-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Tu <span className="text-gradient">Central de Desarrollo</span>
          </h1>
          <p
            className="text-xl text-text-muted mb-8 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Explora tecnologías, frameworks y herramientas organizadas por tipo
            de proyecto. Todo lo que necesitas para crear proyectos increíbles
            en un solo lugar.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              Explorar Proyectos
            </button>
            <button className="px-8 py-3 border border-border text-text hover:bg-surface rounded-lg font-medium transition-all duration-300">
              Ver Documentación
            </button>
          </div>
        </div>
      </section>

      {/* Project Types Grid */}
      <section id="proyectos" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tipos de Proyectos</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Selecciona el tipo de proyecto que quieres desarrollar y descubre
              las mejores tecnologías, frameworks y herramientas para llevarlo a
              cabo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectTypes.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isHovered={hoveredCard === project.id}
                onHover={setHoveredCard}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              ¿Por qué Multidev Station?
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Una plataforma diseñada para acelerar tu desarrollo y ayudarte a
              tomar las mejores decisiones tecnológicas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
