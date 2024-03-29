import { TSVG } from "@/utils/types";

export default function SuccessIconSVG({ className, width = "24" }: TSVG) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={width}
      fill="none"
    >
      <path
        stroke="#4AE7A6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z"
      />
      <path
        stroke="#4AE7A6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7.75 12 2.83 2.83 5.67-5.66"
      />
    </svg>
  );
}
