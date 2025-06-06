import Link from "next/link";
import { Icon } from "@/components/Icons";

interface ProjectType {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: ProjectType;
  index: number;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}

export default function ProjectCard({
  project,
  index,
  isHovered,
  onHover,
}: ProjectCardProps) {
  return (
    <Link
      href={`/project/${project.id}`}
      className="group block"
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div
        className={`
          relative overflow-hidden rounded-xl border border-border bg-surface p-6 h-full
          transition-all duration-300 hover:shadow-lg hover:-translate-y-2
          ${isHovered ? "border-primary shadow-lg" : ""}
        `}
        style={{
          animationDelay: `${index * 0.1}s`,
        }}
      >
        {/* Background gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
        />

        {/* Icon */}
        <div
          className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} text-white mb-4`}
        >
          <Icon name={project.icon} />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-text-muted mb-4 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Technologies preview */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-surface-hover rounded-md text-text-muted border border-border"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 text-xs text-text-muted">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Arrow indicator */}
          <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
            Explorar
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
