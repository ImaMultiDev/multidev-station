import FrameworkCard from "@/components/Ui/FrameworkCard";
import { frameworkTypes } from "@/constants/frameworkTypes";
import { useState } from "react";

export default function FrameworkTypesGrid() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="frameworks">
      <div className="max-w-7xl items-center mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Tipos de Frameworks</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Selecciona el Framework con el que quieres desarrollar y descubre
            las mejores librerías y herramientas para realizar el proyecto
            deseado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frameworkTypes.map((framework, index) => (
            <FrameworkCard
              key={framework.id}
              framework={framework}
              index={index}
              isHovered={hoveredCard === framework.id}
              onHover={setHoveredCard}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
