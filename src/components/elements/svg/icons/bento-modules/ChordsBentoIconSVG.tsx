type SVGProps = {
  className?: string;
  width?: number;
  height?: number;
  pathClass?: string;
};

const ChordsBentoIconSVG = ({
  className,
  width = 24,
  height = 24,
  pathClass = "stroke-foreground",
}: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
  >
    <path
      stroke={"#C3C3C3"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M2 3h20M2 9h9M2 15h6M2 21h4"
    />
    <g
      stroke={"#fff"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M11.836 22a2.18 2.18 0 1 0 0-4.36 2.18 2.18 0 0 0 0 4.36Z" />
      <path d="M21.996 18.37V9.86c0-1.81-1.14-2.06-2.29-1.75l-4.35 1.19c-.79.22-1.34.84-1.34 1.75v8.77" />
      <path d="M19.813 20.55a2.18 2.18 0 1 0 0-4.36 2.18 2.18 0 0 0 0 4.36ZM14.016 13.6l7.98-2.18" />
    </g>
  </svg>
);
export default ChordsBentoIconSVG;
