"use client";

import Features from "../../components/Ui/Features";
import FrameworkTypesGrid from "./components/FrameworkTypesGrid";

export default function Frameworks() {
  return (
    <div className="w-full py-24 flex flex-col gap-24 bg-gradient-to-br from-background via-surface to-background">
      <FrameworkTypesGrid />
      <Features />
    </div>
  );
}
