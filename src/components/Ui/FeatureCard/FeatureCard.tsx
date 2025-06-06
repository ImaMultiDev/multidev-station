import { Icon } from "@/app/components/Icons/Icon";

interface Feature {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="text-center p-6">
      <div
        className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center mx-auto mb-4`}
      >
        <Icon name={feature.icon} className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-text-muted">{feature.description}</p>
    </div>
  );
}
