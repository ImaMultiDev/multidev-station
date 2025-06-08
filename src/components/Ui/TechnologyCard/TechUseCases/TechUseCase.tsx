import { Technology } from "@/constants/projectData";

export default function TechUseCases({ tech }: { tech: Technology }) {
  return (
    <div>
      <h4 className="font-medium mb-2 text-sm">Casos de uso:</h4>
      <div className="flex flex-wrap gap-2">
        {tech.useCases.map((useCase, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
          >
            {useCase}
          </span>
        ))}
      </div>
    </div>
  );
}
