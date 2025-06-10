import { frameworkTypes } from "@/constants/frameworkTypes";
import FrameworkDetail from "@/views/FrameworkDetail";
import { notFound } from "next/navigation";

interface FrameworkPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return frameworkTypes.map((framework) => ({
    id: framework.id,
  }));
}

export async function generateMetadata({ params }: FrameworkPageProps) {
  const { id } = await params;
  const framework = frameworkTypes.find((p) => p.id === id);

  if (!framework) {
    return {
      title: "Proyecto no encontrado - Multidev Station",
    };
  }

  return {
    title: `${framework.name} - Multidev Station`,
    description: framework.description,
  };
}

export default async function FrameworkPage({ params }: FrameworkPageProps) {
  const { id } = await params;
  const framework = frameworkTypes.find((p) => p.id === id);

  if (!framework) {
    notFound();
  }

  return <FrameworkDetail framework={framework} />;
}
