import { Technology } from "@/constants/projectData";
import TechDifficulty from "./TechDifficulty";
import TechCategory from "./TechCategory";
import TechFeatures from "./TechFeatures";
import ExpandButton from "./ExpandButton";
import { useState } from "react";
import TechInstallation from "./TechInstallation";
import DocumentationLink from "./DocumentationLink";
import TechUseCases from "./TechUseCases";

export default function TechnologyCard({ tech }: { tech: Technology }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="bg-surface border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Componente Categoría Tecnología */}
          <TechCategory tech={tech} />
          <div>
            {/* Nombre Tecnología */}
            <h3 className="text-lg font-semibold">{tech.name}</h3>
            {/* Componente Dificultad Tecnología */}
            <TechDifficulty tech={tech} />
          </div>
        </div>
        {/* Botón para expandir Card */}
        <ExpandButton
          isExpanded={isExpanded}
          onClick={() => setIsExpanded((prev) => !prev)}
        />
      </div>
      {/* Descripción Tecnología */}
      <p className="text-text-muted text-sm mb-4">{tech.description}</p>

      {/* Contenido Expandido */}
      {isExpanded && (
        <div className="flex flex-col gap-4 border-t border-border">
          {/* Instalación Tecnología */}
          <TechInstallation tech={tech} />

          {/* Características Tecnología */}
          <TechFeatures tech={tech} />

          {/* Use Cases */}
          <TechUseCases tech={tech} />

          {/* Documentation Link */}
          <DocumentationLink tech={tech} />
        </div>
      )}
    </div>
  );
}
