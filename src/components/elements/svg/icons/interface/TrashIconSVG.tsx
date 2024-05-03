import { TSVG } from "@/utils/types";

export default function TrashIconSVG({
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
      viewBox={`0 0 24 24`}
    >
      <path
        className={pathClass}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 5.98c-3.33-.33-6.68-.5-10.02-.5-1.98 0-3.96.1-5.94.3L3 5.98M8.5 4.97l.22-1.31C8.88 2.71 9 2 10.69 2h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3M18.848 9.14l-.65 10.07c-.11 1.57-.2 2.79-2.99 2.79h-6.42c-2.79 0-2.88-1.22-2.99-2.79l-.65-10.07"
      />
    </svg>
  );
}
