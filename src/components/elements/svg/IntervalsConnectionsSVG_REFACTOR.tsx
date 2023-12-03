import { consonancesLib } from "@/lib/intervals";

type Props = {
    intervals: string[];
  }
  
  const IntervalsConnectionsSVG_REFACTOR = ({ intervals }: Props) => {
  const pathsAttributes = [
    {
      defs: { id: "a", width: 10, height: 246, x: 120, y: 2 },
      filter: "url(#a)",
      stroke: "#fff",
      d: "M125 3v235",
      className: consonancesLib[4].className,
      intervals: ["7M"],
    },
    {
      defs: { id: "b", width: 69.477, height: 230.07, x: 60.227, y: 2.227 },
      filter: "url(#b)",
      stroke: "#fff",
      d: "m124.703 3.227-59.476 219.07",
      className: consonancesLib[4].className,
      intervals: ["7m"],
    },
    {
      defs: { id: "c", width: 112.992, height: 186.276, x: 16.367, y: 2.369 },
      filter: "url(#c)",
      stroke: "#fff",
      d: "M124.356 3.369 21.369 178.644",
      className: consonancesLib[3].className,
      intervals: ["6m", "5A"],
    },
    {
      defs: { id: "d", width: 128.57, height: 126.604, x: 0.414, y: 2.414 },
      filter: "url(#d)",
      stroke: "#fff",
      d: "M123.982 3.414 5.414 119.018",
      className: consonancesLib[2].className,
      intervals: ["6M", "7d"],
    },
    {
      defs: { id: "e", width: 112.242, height: 67.039, x: 16.359, y: 2.357 },
      filter: "url(#e)",
      stroke: "#fff",
      d: "M123.604 3.358 21.358 59.396",
      className: consonancesLib[3].className,
      intervals: ["5p", "5d"],
    },
    {
      defs: { id: "f", width: 68.047, height: 23.577, x: 60.188, y: 2.189 },
      filter: "url(#f)",
      stroke: "#fff",
      d: "M123.234 3.189 65.189 15.766",
      className: consonancesLib[1].className,
      intervals: ["5P", "5D"],
    },
    {
      defs: { id: "g", width: 69.477, height: 230.07, x: 120.227, y: 1.703 },
      filter: "url(#g)",
      stroke: "#fff",
      d: "m125.227 2.703 59.476 219.07",
      className: consonancesLib[1].className,
      intervals: ["4P", "4A"],
    },
    {
      defs: { id: "h", width: 112.992, height: 186.276, x: 120.367, y: 1.355 },
      filter: "url(#h)",
      stroke: "#fff",
      d: "m125.369 2.356 102.987 175.275",
      className: consonancesLib[3].className,
      intervals: ["3M"],
    },
    {
      defs: { id: "i", width: 128.57, height: 126.604, x: 120.414, y: 0.982 },
      filter: "url(#i)",
      stroke: "#fff",
      d: "m125.414 1.982 118.568 115.604",
      className: consonancesLib[4].className,
      intervals: ["2M"],
    },
    {
      defs: { id: "j", width: 112.242, height: 67.039, x: 120.359, y: 0.604 },
      filter: "url(#j)",
      stroke: "#fff",
      d: "m125.358 1.604 102.246 56.038",
      className: consonancesLib[4].className,
      intervals: ["2m"],
    },
    {
      defs: { id: "k", width: 68.047, height: 23.577, x: 120.188, y: 0.234 },
      filter: "url(#k)",
      stroke: "#fff",
      d: "m125.189 1.234 58.045 12.577",
      className: consonancesLib[4].className,
      intervals: ["2m"],
    },
  ];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={272}
      height={272}
      fill="none"
    >
      {pathsAttributes.map((path, index) => {
        const {defs} = path;
        // console.log("!!!intervals", intervals);
        if (!path.intervals!.some((interval) => intervals.includes(interval)))
          return;
        // if (line.interval !== "2m") return;
        return (
          <>
            <g filter={path.filter}>
              <path
                stroke={path.stroke}
                strokeLinecap="round"
                strokeWidth={2}
                d={path.d}
              />
            </g>
            <defs>
              <filter
                id={defs.id}
                width={defs.width}
                height={defs.height}
                x={defs.x}
                y={defs.y}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy={5} />
                <feGaussianBlur stdDeviation={2} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
                <feBlend
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1793_643"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1793_643"
                  result="shape"
                />
              </filter>
            </defs>
          </>
        );
      })}
    </svg>
  );
};

export default IntervalsConnectionsSVG_REFACTOR;
