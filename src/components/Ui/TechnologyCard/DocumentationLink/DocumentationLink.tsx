import { RedirectIcon } from "@/components/Icons";
import { Technology } from "@/constants/projectData";

export default function DocumentationLink({ tech }: { tech: Technology }) {
  return (
    <div className="pt-2">
      <a
        href={tech.documentation}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors text-sm"
      >
        <span>Ver documentación</span>
        <RedirectIcon />
      </a>
    </div>
  );
}
