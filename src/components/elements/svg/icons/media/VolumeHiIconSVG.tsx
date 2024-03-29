import { TSVG } from "@/utils/types";

export default function VolumeHiIconSVG({
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
        d="M2 10v4c0 2 1 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54V7.41c0-2.98-2.07-4.12-4.59-2.54L7.49 6.7c-.32.19-.69.3-1.06.3H5c-2 0-3 1-3 3Z"
      />
      <path
        className={pathClass}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 8a6.66 6.66 0 0 1 0 8M19.828 5.5a10.83 10.83 0 0 1 0 13"
      />
    </svg>
  );
}
