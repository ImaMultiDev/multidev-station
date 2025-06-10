import Link from "next/link";
import GithubIcon from "../Icons/GithubIcon";
import { InstagramIcon, PortfolioIcon } from "../Icons";
import LinkedinIcon from "../Icons/LinkedinIcon";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">MD</span>
                </div>
                <span className="text-lg font-bold">Multidev Station</span>
              </div>
            </Link>

            <p className="text-text-muted max-w-md">
              Tu central de desarrollo. Explora, aprende y crea proyectos
              increíbles con las mejores tecnologías del mercado.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Proyectos</h4>
            <ul className="space-y-2 text-text-muted text-sm">
              <li>
                <Link
                  href="/project/web"
                  className="hover:text-primary transition-colors"
                >
                  Aplicaciones Web
                </Link>
              </li>
              <li>
                <Link
                  href="/project/backend"
                  className="hover:text-primary transition-colors"
                >
                  Backend/API
                </Link>
              </li>
              <li>
                <Link
                  href="/project/multiplataforma"
                  className="hover:text-primary transition-colors"
                >
                  Multiplataforma
                </Link>
              </li>
              <li>
                <Link
                  href="/project/videojuegos"
                  className="hover:text-primary transition-colors"
                >
                  Videojuegos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-text-muted text-sm">
              <li>
                <Link
                  href="/#proyectos"
                  className="hover:text-primary transition-colors"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="/framework"
                  className="hover:text-primary transition-colors"
                >
                  Frameworks
                </Link>
              </li>
              <li>
                <Link
                  href="/framework/react"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  React 🌐
                </Link>
              </li>
              <li>
                <Link
                  href="/framework/nextjs"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Next.js 🌐
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-muted text-sm">
            © 2025 Multidev Station. Desarrollado con ❤️ para la comunidad de
            desarrolladores.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://imamultidev.dev/"
              className="text-text-muted hover:text-primary transition-colors"
            >
              <PortfolioIcon />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ImaMultiDev"
              className="text-text-muted hover:text-primary transition-colors"
            >
              <GithubIcon />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/imanol-mugueta-unsain/"
              className="text-text-muted hover:text-primary transition-colors pl-1"
            >
              <LinkedinIcon />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/ima_munsa/"
              className="text-text-muted hover:text-primary transition-colors"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
