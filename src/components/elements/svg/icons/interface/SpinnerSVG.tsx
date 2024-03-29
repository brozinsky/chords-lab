import { TSVG } from "@/utils/types";

const SpinnerSVG = ({
  className,
  width = "24",
  pathClass = "stroke-foreground",
}: TSVG) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={width}
  >
    <path
      className={pathClass}
      d="M12 23a9.63 9.63 0 0 1-8-9.5 9.51 9.51 0 0 1 6.79-9.1A1.66 1.66 0 0 0 12 2.81a1.67 1.67 0 0 0-1.94-1.64A11 11 0 0 0 12 23Z"
    >
      <animateTransform
        attributeName="transform"
        dur="0.75s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </path>
  </svg>
);
export default SpinnerSVG;
