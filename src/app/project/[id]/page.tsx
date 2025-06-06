import { projectTypes } from "@/constants/projectTypes";
import ProjectDetail from "@/views/ProjectDetail";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return projectTypes.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projectTypes.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Proyecto no encontrado - Multidev Station",
    };
  }

  return {
    title: `${project.title} - Multidev Station`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projectTypes.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
