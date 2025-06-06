export default function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Tu <span className="text-gradient">Central de Desarrollo</span>
        </h1>
        <p
          className="text-xl text-text-muted mb-8 max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Explora tecnologías, frameworks y herramientas organizadas por tipo de
          proyecto. Todo lo que necesitas para crear proyectos increíbles en un
          solo lugar.
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
  );
}
