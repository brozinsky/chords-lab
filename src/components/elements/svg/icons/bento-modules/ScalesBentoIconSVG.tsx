type SVGProps = {
  className?: string;
  width?: number;
  height?: number;
};

const ScalesBentoIconSVG = ({
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
    <path
      fill="#C3C3C3"
      d="M0 2.5A.5.5 0 0 1 .5 2h21a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5Z"
    />
    <rect width={22} height={1} y={8} fill="#C3C3C3" rx={0.5} />
    <rect width={22} height={1} y={14} fill="#C3C3C3" rx={0.5} />
    <rect width={22} height={1} y={20} fill="#C3C3C3" rx={0.5} />
    <circle cx={4.5} cy={20.5} r={3.5} fill="#fff" />
    <circle cx={12.5} cy={14.5} r={3.5} fill="#fff" />
    <circle cx={17.5} cy={3.5} r={3.5} fill="#fff" />
  </svg>
);
export default ScalesBentoIconSVG;
