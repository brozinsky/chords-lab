import { TSVG } from "@/utils/types";

export default function VolumeMuteIconSVG({
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 8.37v-.96c0-2.98-2.07-4.12-4.59-2.54L7.49 6.7c-.32.19-.69.3-1.06.3H5c-2 0-3 1-3 3v4c0 2 1 3 3 3h2M10.406 19.13c2.52 1.58 4.59.43 4.59-2.54v-3.64M22 2 2 22"
      />
    </svg>
  );
}
