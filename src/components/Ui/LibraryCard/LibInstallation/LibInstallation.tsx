import { Library } from "@/constants/frameworkData";

export default function LibInstallation({ lib }: { lib: Library }) {
  return (
    <div>
      <h4 className="font-medium mb-2 text-sm">Instalación:</h4>
      <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-3">
        {lib.installation.map((step, index) => (
          <div
            key={index}
            className="font-mono text-sm text-neutral-700 dark:text-neutral-300"
          >
            <span className="text-neutral-500 mr-2">{index + 1}.</span>
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}
