import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-border bg-surface/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MD</span>
              </div>
              <h1 className="text-xl font-bold text-gradient">
                Multidev Station
              </h1>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#proyectos"
              className="text-text-muted hover:text-text transition-colors"
            >
              Proyectos
            </Link>
            <Link
              href="#tecnologias"
              className="text-text-muted hover:text-text transition-colors"
            >
              Tecnologías
            </Link>
            <Link
              href="#recursos"
              className="text-text-muted hover:text-text transition-colors"
            >
              Recursos
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
