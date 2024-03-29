import { TSVG } from "@/utils/types";

export default function InfoIconSVG({ className, width = "24" }: TSVG) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={width}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        className="stroke-neutral-300 group-hover:stroke-foreground transition duration-200"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM12 16v-5"
      />
      <path
        className="stroke-neutral-300 group-hover:stroke-foreground transition duration-200"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.008 8h-.01"
      />
    </svg>
  );
}
