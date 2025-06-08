import { Technology } from "@/constants/projectData";

const categoryIcons = {
  language: "🔤",
  framework: "🏗️",
  library: "📚",
  tool: "🔧",
  database: "🗄️",
  platform: "🌐",
};

export default function TechCategory({ tech }: { tech: Technology }) {
  return (
    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold">
      <span className="text-xl">{categoryIcons[tech.category]}</span>
    </div>
  );
}
