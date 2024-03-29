import { TSVG } from "@/utils/types";

export default function LibraryNoteIconSVG({
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
        d="M7.96875 22C10.1779 22 11.9688 20.2091 11.9688 18C11.9688 15.7909 10.1779 14 7.96875 14C5.75961 14 3.96875 15.7909 3.96875 18C3.96875 20.2091 5.75961 22 7.96875 22Z"
        className="stroke-foreground"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9688 18V4"
        className="stroke-foreground"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6066 2.11L19.0266 3.58C20.0966 3.94 20.9766 5.15 20.9766 6.28V7.45C20.9766 8.98 19.7966 9.83 18.3466 9.35L13.9266 7.88C12.8566 7.52 11.9766 6.31 11.9766 5.18V4C11.9666 2.48 13.1566 1.62 14.6066 2.11Z"
        className="stroke-foreground"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
