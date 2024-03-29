import { TSVG } from "@/utils/types";

export default function VolumeLoIconSVG({
  className,
  pathClass = "stroke-foreground",
  width = "24",
}: TSVG) {
  return (
    <svg
      className={className}
      width={width}
      height={width}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        className={pathClass}
        strokeWidth={1.5}
        d="M3.328 10v4c0 2 1 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54V7.41c0-2.98-2.07-4.12-4.59-2.54L8.818 6.7c-.32.19-.69.3-1.06.3h-1.43c-2 0-3 1-3 3Z"
      />
      <path
        className={pathClass}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.328 8a6.66 6.66 0 0 1 0 8"
      />
    </svg>
  );
}
