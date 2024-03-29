import { TSVG } from "@/utils/types";

export default function LibrarySquareRomanIconSVG({
  className,
  width = "24",
}: TSVG) {
  return (
    <svg
      className={className}
      width={width}
      height={width}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 10V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H11"
        className="stroke-foreground"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.7031 17.0556V13"
        className="stroke-foreground"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 13H20.4074"
        className="stroke-foreground"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.7031 17.3937L17.7031 21.4492"
        className="stroke-foreground"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.4062 22.125L14.9988 22.125"
        className="stroke-foreground"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
