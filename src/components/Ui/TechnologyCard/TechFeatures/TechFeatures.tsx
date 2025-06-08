import { Technology } from "@/constants/projectData";

export default function TechFeatures({ tech }: { tech: Technology }) {
  return (
    <div>
      <h4 className="font-medium mb-2 text-sm">Características principales:</h4>
      <ul className="space-y-1">
        {tech.features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-2 text-sm">
            <span className="text-primary mt-1">•</span>
            <span className="text-text-muted">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
