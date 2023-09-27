import React from "react";

// const keyY: string = "50.9287";

const whiteKeyWidth = "74.6428";
const whiteKeyHeight = "242.738";
const blackKeyWidth = "31.619";
const blackKeyHeight = "149.286";

interface KeyCoords {
  note: string;
  x: number;
}

const WHITE_KEY_COORDS: KeyCoords[] = [
  { note: "C1", x: 0.5 },
  { note: "D1", x: 76.1446 },
  { note: "E1", x: 151.7892 },

  { note: "F1", x: 227.4338 },
  { note: "G1", x: 303.0784 },
  { note: "A1", x: 378.72299999999996 },
  { note: "B1", x: 454.3676 },

  { note: "C2", x: 530.0122 },
  { note: "D2", x: 605.6568 },
  { note: "E2", x: 681.3014 },

  { note: "F2", x: 756.9459999999999 },
  { note: "G2", x: 832.5906 },
  { note: "A2", x: 908.2352 },
  { note: "B2", x: 983.8797999999999 },
];

const BLACK_KEY_COORDS: KeyCoords[] = [
  { note: "C#1", x: 59.832 },
  { note: "D#1", x: 135.477 },
  { note: "F#1", x: 286.762 },
  { note: "G#1", x: 362.406 },
  { note: "A#1", x: 438.051 },

  { note: "C#2", x: 589.332 },
  { note: "D#2", x: 664.977 },
  { note: "F#2", x: 816.262 },
  { note: "G#2", x: 891.906 },
  { note: "A#2", x: 967.551 },
];

interface PianoScaleProps {
  scale: string[];
  className: string;
}

const PianoScaleSVG: React.FC<PianoScaleProps> = ({ scale, className }) => {
  return (
    <svg
      className={className}
      width="706.67"
      height="230"
      viewBox="0 0 1060 345"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {WHITE_KEY_COORDS.map(({ note, x }) => (
        <rect
          x={x}
          width={whiteKeyWidth}
          height={whiteKeyHeight}
          fill={scale.includes(note) ? "#6EE7B7" : "#fff"}
          stroke="#1F2428"
          strokeWidth="1"
        />
      ))}
      {BLACK_KEY_COORDS.map(({ note, x }) => (
        <rect
          x={x}
          width={blackKeyWidth}
          height={blackKeyHeight}
          fill={scale.includes(note) ? "#059669" : "#000"}
          stroke="#1F2428"
          strokeWidth="2"
        />
      ))}
    </svg>
  );
};

export default PianoScaleSVG;
