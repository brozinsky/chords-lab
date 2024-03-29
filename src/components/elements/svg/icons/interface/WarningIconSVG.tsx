import { TSVG } from "@/utils/types";

export default function WarningIconSVG({ className, width = "24" }: TSVG) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={width}
      fill="none"
    >
      <path
        stroke="#E74A4A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM9.172 14.83l5.66-5.66M14.832 14.83l-5.66-5.66"
      />
    </svg>
  );
}
