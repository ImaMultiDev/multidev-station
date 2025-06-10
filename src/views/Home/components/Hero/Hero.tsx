import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const redirectToFramework = () => {
    router.push("/framework");
  };

  return (
    <section className="w-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col gap-8">
          {/* Main heading */}
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-in">
              Tu <span className="text-gradient">Central de Desarrollo</span>
            </h1>
            <p
              className="text-xl md:text-2xl text-text-muted max-w-4xl mx-auto leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Explora tecnologías, frameworks y herramientas organizadas por
              tipo de proyecto. Todo lo que necesitas para crear proyectos
              increíbles en un solo lugar.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={redirectToFramework}
              className="px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform min-w-[200px]"
            >
              Explorar Frameworks
            </button>
            <button className="px-10 py-4 border-2 border-border text-text hover:bg-surface hover:border-primary rounded-xl font-semibold text-lg transition-all duration-300 min-w-[200px]">
              Ver Documentación
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="flex flex-col items-center space-y-2 text-text-muted">
              <span className="text-sm font-medium">Descubre más</span>
              <div className="animate-bounce">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
