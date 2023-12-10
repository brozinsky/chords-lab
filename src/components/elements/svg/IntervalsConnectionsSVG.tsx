import { consonancesLib } from "@/lib/intervals";
import clsx from "clsx";

type Props = {
  intervals: string[];
}

const IntervalsConnectionsSVG = ({ intervals }: Props) => {
  const lines = [
    {
      className: consonancesLib[4].className,
      intervals: ["7M"],
      x1: 136.106,
      y1: 19.4887,
      x2: 76.1059,
      y2: 32.4887,
    },
    {
      className: consonancesLib[4].className,
      intervals: ["7m"],
      x1: 136.24,
      y1: 19.4385,
      x2: 32.2403,
      y2: 76.4385,
    },
    {
      className: consonancesLib[3].className,
      intervals: ["6m", "5A"],
      x1: 136.431,
      y1: 19.2533,
      x2: 32.4311,
      y2: 196.253,
    },
    {
      className: consonancesLib[2].className,
      intervals: ["6M", "7d"],
      x1: 136.349,
      y1: 19.358,
      x2: 16.3491,
      y2: 136.358,
    },
    {
      className: consonancesLib[3].className,
      intervals: ["5p", "5d"],
      x1: 136.5,
      y1: 19,
      x2: 136.5,
      y2: 256,
    },
    {
      className: consonancesLib[1].className,
      intervals: ["5P", "5D"],
      x1: 136.483,
      y1: 19.131,
      x2: 76.4825,
      y2: 240.131,
    },
    {
      className: consonancesLib[1].className,
      intervals: ["4P", "4A"],
      x1: 136.483,
      y1: 18.869,
      x2: 196.483,
      y2: 239.869,
    },
    {
      className: consonancesLib[3].className,
      intervals: ["3M"],
      x1: 136.431,
      y1: 18.7467,
      x2: 240.431,
      y2: 195.747,
    },
    {
      className: consonancesLib[2].className,
      intervals: ["3m"],
      x1: 136.349,
      y1: 18.642,
      x2: 256.349,
      y2: 135.642,
    },
    {
      className: consonancesLib[4].className,
      intervals: ["2M"],
      x1: 136.24,
      y1: 18.5615,
      x2: 240.24,
      y2: 75.5615,
    },
    {
      className: consonancesLib[4].className,
      intervals: ["2m"],
      x1: 136.106,
      y1: 18.5113,
      x2: 196.106,
      y2: 31.5113,
    },
  ];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={272}
      height={272}
      fill="none"
    >
      {lines.map((line, index) => {
        if (!line.intervals!.some((interval) => intervals.includes(interval)))
          return;
        return (
          <>
              <line
                key={line.intervals![0]}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                className={clsx(line.className, "shadow-md shadow-red-400")}
              />
          </>
        );
      })}
    </svg>
  );
};

export default IntervalsConnectionsSVG;
