import Link from "next/link";
import { Icon } from "@/components/Icons";

interface FrameworkType {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  libraries: string[];
}

interface FrameworkCardProps {
  framework: FrameworkType;
  index: number;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}

export default function FrameworkCard({
  framework,
  index,
  isHovered,
  onHover,
}: FrameworkCardProps) {
  return (
    <Link
      href={`/framework/${framework.id}`}
      className="group block"
      onMouseEnter={() => onHover(framework.id)}
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
          className={`absolute inset-0 bg-gradient-to-br ${framework.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
        />

        {/* Icon */}
        <div
          className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${framework.color} text-white mb-4`}
        >
          <Icon name={framework.icon} />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {framework.name}
          </h3>
          <p className="text-text-muted mb-4 text-sm leading-relaxed">
            {framework.description}
          </p>

          {/* Libraries preview */}
          <div className="flex flex-wrap gap-2 mb-4">
            {framework.libraries.slice(0, 3).map((lib) => (
              <span
                key={lib}
                className="px-2 py-1 text-xs bg-surface-hover rounded-md text-text-muted border border-border"
              >
                {lib}
              </span>
            ))}
            {framework.libraries.length > 3 && (
              <span className="px-2 py-1 text-xs text-text-muted">
                +{framework.libraries.length - 3}
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
