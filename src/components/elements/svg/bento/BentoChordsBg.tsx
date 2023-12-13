import clsx from "clsx";

type SVGProps = {
  className?: string;
  width?: string;
  height?: string;
  pathClass?: string;
  direction?: "left" | "right" | "top" | "bottom";
};

export default function BentoChordsBg({
  width = "180",
  height = "112",
}: SVGProps) {
  return (
    <div className="flex flex-col justify-end items-end -mr-4">
      <svg
        className="transition opacity-80 hover:opacity-90"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 180 112"
      >
        <path
          className="fill-emerald-500 hover:fill-emerald-300 transition"
          fill="#6EE7B7"
          d="M0 1h28v105a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V1Z"
        />
        <path
          fill="#fff"
          d="M91 1h28v105a6 6 0 0 1-6 6H97a6 6 0 0 1-6-6V1ZM30 1h28v105a6 6 0 0 1-6 6H36a6 6 0 0 1-6-6V1Z"
        />
        <path
          className="fill-emerald-500 hover:fill-emerald-300 transition"
          fill="#6EE7B7"
          d="M121 1h28v105a6 6 0 0 1-6 6h-16a6 6 0 0 1-6-6V1Z"
        />
        <path
          fill="#fff"
          d="M152 1h28v105a6 6 0 0 1-6 6h-16a6 6 0 0 1-6-6V1Z"
        />
        <path
          className="fill-emerald-500 hover:fill-emerald-300 transition"
          fill="#6EE7B7"
          d="M61 1h28v105a6 6 0 0 1-6 6H67a6 6 0 0 1-6-6V1Z"
        />
        <path
          fill="#000"
          d="M19 0h20v62a6 6 0 0 1-6 6h-8a6 6 0 0 1-6-6V0ZM110 0h20v62a6 6 0 0 1-6 6h-8a6 6 0 0 1-6-6V0ZM50 0h20v62a6 6 0 0 1-6 6h-8a6 6 0 0 1-6-6V0ZM140 0h20v62a6 6 0 0 1-6 6h-8a6 6 0 0 1-6-6V0ZM170 0h10v68h-4a6 6 0 0 1-6-6V0Z"
        />
      </svg>
    </div>
  );
}
