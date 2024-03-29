import { TSVG } from "@/utils/types";

export default function UserIconSVG({ className, width = "24" }: TSVG) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={width}
      fill="none"
    >
      <path
        className="stroke-foreground"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM20.586 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7"
      />
    </svg>
  );
}
