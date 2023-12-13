type SVGProps = {
  className?: string;
  width?: number;
  height?: number;
  pathClass?: string;
};

const ChordMapIconSVG = ({
  className,
  width = 24,
  height = 24,
}: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
  >
    <path fill="#F2F3F5" d="M5 1h6v6H5z" />
    <path fill="#6EE7B7" d="M13 4h6v6h-6z" />
    <path fill="#F2F3F5" d="M5 9h6v6H5zM13 12h6v6h-6z" />
    <path fill="#6EE7B7" d="M5 17h6v6H5z" />
  </svg>
);
export default ChordMapIconSVG;
