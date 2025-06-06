import FeatureCard from "@/components/Ui/FeatureCard";

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

export default function Features() {
  return (
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
  );
}
