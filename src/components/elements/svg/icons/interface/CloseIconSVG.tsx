import { TSVG } from "@/utils/types";

export default function CloseIconSVG({
  className,
  width = "24",
  pathClass = "stroke-foreground",
}: TSVG) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={width}
      fill="none"
    >
      <path
        className={pathClass}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 18 18 6M18 18 6 6"
      />
    </svg>
  );
}
