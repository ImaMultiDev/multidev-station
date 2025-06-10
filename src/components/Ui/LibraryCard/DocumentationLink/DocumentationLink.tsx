import { RedirectIcon } from "@/components/Icons";
import { Library } from "@/constants/frameworkData";

export default function DocumentationLink({ lib }: { lib: Library }) {
  return (
    <div className="pt-2">
      <a
        href={lib.documentation}
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
