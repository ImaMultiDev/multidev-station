import ProjectCard from "@/components/Ui/ProjectCard";
import { projectTypes } from "@/constants/projectTypes";
import { useState } from "react";

export default function ProjectTypesGrid() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="proyectos">
      <div className="max-w-7xl items-center mx-auto">
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
  );
}
