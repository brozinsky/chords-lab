import { TSVG } from "@/utils/types";

export default function StopIconSVG({ className, width = "24" }: TSVG) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      fill="none"
    >
      <path
        className="stroke-foreground"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.3 21h5.4c4.5 0 6.3-1.8 6.3-6.3V9.3C21 4.8 19.2 3 14.7 3H9.3C4.8 3 3 4.8 3 9.3v5.4C3 19.2 4.8 21 9.3 21Z"
      />
    </svg>
  );
}
