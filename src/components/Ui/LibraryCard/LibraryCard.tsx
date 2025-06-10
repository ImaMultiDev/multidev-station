import { Library } from "@/constants/frameworkData";
import LibDifficulty from "./LibDifficulty";
import ExpandButton from "./ExpandButton";
import { useState } from "react";
import LibInstallation from "./LibInstallation";
import DocumentationLink from "./DocumentationLink";

export default function LibraryCard({ lib }: { lib: Library }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="bg-surface border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div>
            {/* Nombre Tecnología */}
            <h3 className="text-lg font-semibold">{lib.name}</h3>
            {/* Componente Dificultad Tecnología */}
            <LibDifficulty lib={lib} />
          </div>
        </div>
        {/* Botón para expandir Card */}
        <ExpandButton
          isExpanded={isExpanded}
          onClick={() => setIsExpanded((prev) => !prev)}
        />
      </div>
      {/* Descripción Tecnología */}
      <p className="text-text-muted text-sm mb-4">{lib.description}</p>

      {/* Contenido Expandido */}
      {isExpanded && (
        <div className="flex flex-col gap-4 border-t border-border">
          {/* Instalación Tecnología */}
          <LibInstallation lib={lib} />

          {/* Documentation Link */}
          <DocumentationLink lib={lib} />
        </div>
      )}
    </div>
  );
}
