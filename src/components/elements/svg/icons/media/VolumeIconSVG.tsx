type SVGProps = {
  className?: string;
  width?: string;
};

export default function VolumeIconSVG({ className, width = "24" }: SVGProps) {
  return (
    <svg
      className={className}
      width={width}
      height={width}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        className="stroke-foreground"
        strokeWidth={1.5}
        d="M5.5 10v4c0 2 1 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54V7.41c0-2.98-2.07-4.12-4.59-2.54L10.99 6.7c-.32.19-.69.3-1.06.3H8.5c-2 0-3 1-3 3Z"
      />
    </svg>
  );
}