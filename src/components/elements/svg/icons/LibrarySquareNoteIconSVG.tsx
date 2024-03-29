import { TSVG } from "@/utils/types";

export default function LibrarySquareNoteIconSVG({
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
      <g>
        <path
          d="M15.5078 22C16.6124 22 17.5078 21.1046 17.5078 20C17.5078 18.8954 16.6124 18 15.5078 18C14.4032 18 13.5078 18.8954 13.5078 20C13.5078 21.1046 14.4032 22 15.5078 22Z"
          className="stroke-foreground"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5078 19.9998V13.0098"
          className="stroke-foreground"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.8178 12.0699L21.0278 12.8099C21.5578 12.9899 21.9978 13.5899 21.9978 14.1599V14.7499C21.9978 15.5099 21.4078 15.9399 20.6878 15.6999L18.4778 14.9599C17.9478 14.7799 17.5078 14.1799 17.5078 13.6099V13.0199C17.5078 12.2499 18.0978 11.8299 18.8178 12.0699Z"
          className="stroke-foreground"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
