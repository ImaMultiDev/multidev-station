import { ExpandIcon } from "@/components/Icons";

interface ExpandButtonProps {
  isExpanded: boolean;
  onClick: () => void;
}

export default function ExpandButton({
  isExpanded,
  onClick,
}: ExpandButtonProps) {
  return (
    <button
      onClick={onClick}
      className="text-primary hover:text-primary-dark transition-colors"
    >
      <ExpandIcon
        className={`w-5 h-5 transform transition-transform ${
          isExpanded ? "rotate-180" : ""
        }`}
      />
    </button>
  );
}
