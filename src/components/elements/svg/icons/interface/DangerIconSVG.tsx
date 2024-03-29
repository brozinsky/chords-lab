import { TSVG } from "@/utils/types";

export default function DangerIconSVG({ className, width = "24" }: TSVG) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={width}
      fill="none"
    >
      <path
        stroke="#DAE74A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 9v5M12 21.41H5.94c-3.47 0-4.92-2.48-3.24-5.51l3.12-5.62L8.76 5c1.78-3.21 4.7-3.21 6.48 0l2.94 5.29 3.12 5.62c1.68 3.03.22 5.51-3.24 5.51H12v-.01Z"
      />
      <path
        stroke="#DAE74A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.992 17h.01"
      />
    </svg>
  );
}
