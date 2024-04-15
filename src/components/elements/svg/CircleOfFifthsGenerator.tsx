const CIRCLE_OF_FIFTHS_DATA = [
  {
    note: "C",
    relativeMinor: "Am",
    diminished: "Bdim",
    keySignature: "",
  },
  {
    note: "G",
    relativeMinor: "Em",
    diminished: "Bdim",
    keySignature: "s",
  },
  {
    note: "D",
    relativeMinor: "Bm",
    diminished: "Bdim",
    keySignature: "ss",
  },
];

const segmentPath = (
  x: number,
  y: number,
  r0: number,
  r1: number,
  d0: number,
  d1: number
): string => {
  // https://svgwg.org/specs/paths/#PathDataEllipticalArcCommands
  const arc = Math.abs(d0 - d1) > 180 ? 1 : 0;
  const point = (radius: number, degree: number) =>
    polarToCartesian(x, y, radius, degree)
      .map((n) => n.toPrecision(5))
      .join(",");
  return [
    `M${point(r0, d0)}`,
    `A${r0},${r0},0,${arc},1,${point(r0, d1)}`,
    `L${point(r1, d1)}`,
    `A${r1},${r1},0,${arc},0,${point(r1, d0)}`,
    "Z",
  ].join("");
};

const polarToCartesian = (
  x: number,
  y: number,
  r: number,
  degrees: number
): [number, number] => {
  const radians = (degrees * Math.PI) / 180.0;
  return [x + r * Math.cos(radians), y + r * Math.sin(radians)];
};

type TProps = {
  x: number;
  y: number;
  r0: number;
  r1: number;
  d0: number;
  d1: number;
}

const CircleOfFifthsWedge = ({
  x,
  y,
  r0,
  r1,
  d0,
  d1,
}: TProps) => {
  return (
    <path
      d={segmentPath(x, y, r0, r1, d0, d1)}
      stroke="black"
      fill="green"
    ></path>
  );
};

const CircleOfFifthsSVG = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <div className="container py-4 m-auto">
        <svg
          className="m-auto text-lime-900"
          version="1.1"
          width="800"
          height="800"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 400"
        >
          <g
            style={{
              transform: "rotate(15deg)",
              transformOrigin: "200px 200px",
            }}
          >
            {...data.map((v, i) => {
              return (
                <CircleOfFifthsWedge
                  x={200}
                  y={200}
                  r0={140}
                  r1={120}
                  d0={i * 30}
                  d1={(i + 1) * 30}
                />
              );
            })}
            {...data.map((v, i) => {
              return (
                <CircleOfFifthsWedge
                  x={200}
                  y={200}
                  r0={120}
                  r1={80}
                  d0={i * 30}
                  d1={(i + 1) * 30}
                />
              );
            })}
            {...data.map((v, i) => {
              return (
                <CircleOfFifthsWedge
                  x={200}
                  y={200}
                  r0={80}
                  r1={50}
                  d0={i * 30}
                  d1={(i + 1) * 30}
                />
              );
            })}
          </g>
          <g>
            {...CIRCLE_OF_FIFTHS_DATA.map((v, i) => {
              const [center_x, center_y] = polarToCartesian(
                200,
                200,
                150,
                i * 30
              );
              return (
                <text
                  style={{ textAnchor: "middle", dominantBaseline: "central" }}
                  x={center_x}
                  y={center_y}
                >
                  {v.note}
                </text>
              );
            })}
            {...CIRCLE_OF_FIFTHS_DATA.map((v, i) => {
              const [center_x, center_y] = polarToCartesian(
                200,
                200,
                100,
                i * 30
              );
              return (
                <text
                  style={{
                    textAnchor: "middle",
                    dominantBaseline: "central",
                    fontSize: "small",
                  }}
                  x={center_x}
                  y={center_y}
                >
                  {v.relativeMinor}
                </text>
              );
            })}
            {...CIRCLE_OF_FIFTHS_DATA.map((v, i) => {
              const [center_x, center_y] = polarToCartesian(
                200,
                200,
                65,
                i * 30
              );
              return (
                <text
                  style={{
                    textAnchor: "middle",
                    dominantBaseline: "central",
                    fontSize: "xx-small",
                  }}
                  x={center_x}
                  y={center_y}
                >
                  {v.diminished}
                </text>
              );
            })}
          </g>
        </svg>
      </div>
    </>
  );
};

// const CircleOfFifthsSVG = () => {
//   return (
//     <svg id="app" width={800} height={800} className="cf" viewBox="0 0 300 300">
//       <g className="cf-arcs">
//         <path d="M300.00,150.00A150,150,0,0,1,278.58,227.26L235.72,201.50A100,100,0,0,0,250.00,150.00Z"></path>
//         <path d="M250.00,150.00A100,100,0,0,1,235.72,201.50L210.00,186.05A70,70,0,0,0,220.00,150.00Z"></path>
//         <path d="M220.00,150.00A70,70,0,0,1,210.00,186.05L184.29,170.60A40,40,0,0,0,190.00,150.00Z"></path>
//       </g>
//       <g transform="translate(260, 0)">
//         <use width="30" xlinkHref="#staff"></use>

//         <use width="2" xlinkHref="#sharp" className="cf-sharp-1"></use>
//         <use width="2" xlinkHref="#sharp" className="cf-sharp-2"></use>
//         <use width="2" xlinkHref="#sharp" className="cf-sharp-3"></use>
//       </g>
//       <text x="235" y="153" className="cf-text-middle">
//         A
//       </text>
//       <text x="205" y="152" className="cf-text-inner">
//         F<tspan baseline-shift="super">#</tspan>m
//       </text>

//       <g className="cf-arcs">
//         <path d="M279.90,225.00A150,150,0,0,1,222.72,281.19L198.48,237.46A100,100,0,0,0,236.60,200.00Z"></path>
//         <path d="M236.60,200.00A100,100,0,0,1,198.48,237.46L183.94,211.22A70,70,0,0,0,210.62,185.00Z"></path>
//         <path d="M210.62,185.00A70,70,0,0,1,183.94,211.22L169.39,184.98A40,40,0,0,0,184.64,170.00Z"></path>
//       </g>
//       <g transform="translate(243.25317547305485, 62.5)">
//         <use width="30" xlinkHref="#staff"></use>

//         <use width="2" xlinkHref="#sharp" className="cf-sharp-1"></use>
//         <use width="2" xlinkHref="#sharp" className="cf-sharp-2"></use>
//         <use width="2" xlinkHref="#sharp" className="cf-sharp-3"></use>
//         <use width="2" xlinkHref="#sharp" className="cf-sharp-4"></use>
//       </g>
//       <text x="223.6121593216773" y="195.5" className="cf-text-middle">
//         E
//       </text>
//       <text x="197.63139720814414" y="179.5" className="cf-text-inner">
//         C<tspan baseline-shift="super">#</tspan>m
//       </text>

//       <g className="cf-arcs">
//         <path d="M225.00,279.90A150,150,0,0,1,147.38,299.98L148.25,249.98A100,100,0,0,0,200.00,236.60Z"></path>
//         <path d="M200.00,236.60A100,100,0,0,1,148.25,249.98L148.78,219.99A70,70,0,0,0,185.00,210.62Z"></path>
//         <path d="M185.00,210.62A70,70,0,0,1,148.78,219.99L149.30,189.99A40,40,0,0,0,170.00,184.64Z"></path>
//       </g>
//       <g transform="translate(197.5, 108.25317547305485)">
//         <use width="30" xlinkHref="#staff"></use>

//         <use width="2" xlinkHref="#sharp" className="cf-sharp-1"></use>
//         <use width="2" xlinkHref="#sharp" className="cf-sharp-2"></use>
//         <use width="2" xlinkHref="#sharp" className="cf-sharp-3"></use>
//         <use width="2" xlinkHref="#sharp" className="cf-sharp-4"></use>
//         <use width="2" xlinkHref="#sharp" className="cf-sharp-5"></use>
//       </g>
//       <text x="192.5" y="226.61215932167727" className="cf-text-middle">
//         B
//       </text>
//       <text x="177.5" y="199.6313972081441" className="cf-text-inner">
//         G<tspan baseline-shift="super">#</tspan>m
//       </text>

//       <g className="cf-arcs">
//         <path d="M150.00,300.00A150,150,0,0,1,72.744,278.58L98.496,235.72A100,100,0,0,0,150.00,250.00Z"></path>
//         <path d="M150.00,250.00A100,100,0,0,1,98.496,235.72L113.95,210.00A70,70,0,0,0,150.00,220.00Z"></path>
//         <path d="M150.00,220.00A70,70,0,0,1,113.95,210.00L129.40,184.29A40,40,0,0,0,150.00,190.00Z"></path>
//       </g>
//       <g transform="translate(135, 125)">
//         <use width="30" xlinkHref="#staff"></use>

//         <use width="2" xlinkHref="#sharp" className="cf-sharp-1"></use>
//         <use width="2" xlinkHref="#sharp" className="cf-sharp-2"></use>
//         <use width="2" xlinkHref="#sharp" className="cf-sharp-3"></use>
//         <use width="2" xlinkHref="#sharp" className="cf-sharp-4"></use>
//         <use width="2" xlinkHref="#sharp" className="cf-sharp-5"></use>
//         <use width="2" xlinkHref="#sharp" className="cf-sharp-6"></use>
//       </g>
//       <text x="150" y="238" className="cf-text-middle">
//         G<tspan baseline-shift="super">b</tspan>
//       </text>
//       <text x="150" y="207" className="cf-text-inner">
//         D<tspan baseline-shift="super">#</tspan>m
//       </text>

//       <g className="cf-arcs">
//         <path d="M75.000,279.90A150,150,0,0,1,18.807,222.72L62.538,198.48A100,100,0,0,0,100.00,236.60Z"></path>
//         <path d="M100.00,236.60A100,100,0,0,1,62.538,198.48L88.777,183.94A70,70,0,0,0,115.00,210.62Z"></path>
//         <path d="M115.00,210.62A70,70,0,0,1,88.777,183.94L115.02,169.39A40,40,0,0,0,130.00,184.64Z"></path>
//       </g>
//       <g transform="translate(72.50000000000003, 108.25317547305485)">
//         <use width="30" xlinkHref="#staff"></use>

//         <use width="2" xlinkHref="#flat" className="cf-flat-1"></use>
//         <use width="2" xlinkHref="#flat" className="cf-flat-2"></use>
//         <use width="2" xlinkHref="#flat" className="cf-flat-3"></use>
//         <use width="2" xlinkHref="#flat" className="cf-flat-4"></use>
//         <use width="2" xlinkHref="#flat" className="cf-flat-5"></use>
//       </g>
//       <text
//         x="107.50000000000003"
//         y="226.6121593216773"
//         className="cf-text-middle"
//       >
//         D<tspan baseline-shift="super">b</tspan>
//       </text>
//       <text
//         x="122.50000000000001"
//         y="199.63139720814414"
//         className="cf-text-inner"
//       >
//         B<tspan baseline-shift="super">b</tspan>m
//       </text>

//       <g className="cf-arcs">
//         <path d="M20.096,225.00A150,150,0,0,1,0.022846,147.38L50.015,148.25A100,100,0,0,0,63.397,200.00Z"></path>
//         <path d="M63.397,200.00A100,100,0,0,1,50.015,148.25L80.011,148.78A70,70,0,0,0,89.378,185.00Z"></path>
//         <path d="M89.378,185.00A70,70,0,0,1,80.011,148.78L110.01,149.30A40,40,0,0,0,115.36,170.00Z"></path>
//       </g>
//       <g transform="translate(26.74682452694516, 62.5)">
//         <use width="30" xlinkHref="#staff"></use>

//         <use width="2" xlinkHref="#flat" className="cf-flat-1"></use>
//         <use width="2" xlinkHref="#flat" className="cf-flat-2"></use>
//         <use width="2" xlinkHref="#flat" className="cf-flat-3"></use>
//         <use width="2" xlinkHref="#flat" className="cf-flat-4"></use>
//       </g>
//       <text x="76.3878406783227" y="195.5" className="cf-text-middle">
//         A<tspan baseline-shift="super">b</tspan>
//       </text>
//       <text x="102.36860279185586" y="179.5" className="cf-text-inner">
//         Fm
//       </text>

//       <g className="cf-arcs">
//         <path d="M0.0000,150.00A150,150,0,0,1,21.425,72.744L64.283,98.496A100,100,0,0,0,50.000,150.00Z"></path>
//         <path d="M50.000,150.00A100,100,0,0,1,64.283,98.496L89.998,113.95A70,70,0,0,0,80.000,150.00Z"></path>
//         <path d="M80.000,150.00A70,70,0,0,1,89.998,113.95L115.71,129.40A40,40,0,0,0,110.00,150.00Z"></path>
//       </g>
//       <g transform="translate(10, 2.842170943040401e-14)">
//         <use width="30" xlinkHref="#staff"></use>

//         <use width="2" xlinkHref="#flat" className="cf-flat-1"></use>
//         <use width="2" xlinkHref="#flat" className="cf-flat-2"></use>
//         <use width="2" xlinkHref="#flat" className="cf-flat-3"></use>
//       </g>
//       <text x="65" y="153" className="cf-text-middle">
//         E<tspan baseline-shift="super">b</tspan>
//       </text>
//       <text x="95" y="152" className="cf-text-inner">
//         Cm
//       </text>

//       <g className="cf-arcs">
//         <path d="M20.096,75.000A150,150,0,0,1,77.279,18.807L101.52,62.538A100,100,0,0,0,63.397,100.00Z"></path>
//         <path d="M63.397,100.00A100,100,0,0,1,101.52,62.538L116.06,88.777A70,70,0,0,0,89.378,115.00Z"></path>
//         <path d="M89.378,115.00A70,70,0,0,1,116.06,88.777L130.61,115.02A40,40,0,0,0,115.36,130.00Z"></path>
//       </g>
//       <g transform="translate(26.746824526945176, -62.500000000000014)">
//         <use width="30" xlinkHref="#staff"></use>

//         <use width="2" xlinkHref="#flat" className="cf-flat-1"></use>
//         <use width="2" xlinkHref="#flat" className="cf-flat-2"></use>
//       </g>
//       <text x="76.38784067832272" y="110.5" className="cf-text-middle">
//         B<tspan baseline-shift="super">b</tspan>
//       </text>
//       <text x="102.36860279185588" y="124.5" className="cf-text-inner">
//         Gm
//       </text>

//       <g className="cf-arcs">
//         <path d="M75.000,20.096A150,150,0,0,1,152.62,0.022846L151.75,50.015A100,100,0,0,0,100.00,63.397Z"></path>
//         <path d="M100.00,63.397A100,100,0,0,1,151.75,50.015L151.22,80.011A70,70,0,0,0,115.00,89.378Z"></path>
//         <path d="M115.00,89.378A70,70,0,0,1,151.22,80.011L150.70,110.01A40,40,0,0,0,130.00,115.36Z"></path>
//       </g>
//       <g transform="translate(72.49999999999994, -108.25317547305481)">
//         <use width="30" xlinkHref="#staff"></use>

//         <use width="2" xlinkHref="#flat" className="cf-flat-1"></use>
//       </g>
//       <text
//         x="107.49999999999997"
//         y="79.38784067832273"
//         className="cf-text-middle"
//       >
//         F
//       </text>
//       <text
//         x="122.49999999999997"
//         y="104.36860279185589"
//         className="cf-text-inner"
//       >
//         Dm
//       </text>

//       <g className="cf-arcs">
//         <path d="M150.00,0.0000A150,150,0,0,1,227.26,21.425L201.50,64.283A100,100,0,0,0,150.00,50.000Z"></path>
//         <path d="M150.00,50.000A100,100,0,0,1,201.50,64.283L186.05,89.998A70,70,0,0,0,150.00,80.000Z"></path>
//         <path d="M150.00,80.000A70,70,0,0,1,186.05,89.998L170.60,115.71A40,40,0,0,0,150.00,110.00Z"></path>
//       </g>
//       <g transform="translate(134.99999999999997, -125)">
//         <use width="30" xlinkHref="#staff"></use>
//       </g>
//       <text x="149.99999999999997" y="68" className="cf-text-middle">
//         C
//       </text>
//       <text x="150" y="97" className="cf-text-inner">
//         Am
//       </text>

//       <g className="cf-arcs">
//         <path d="M225.00,20.096A150,150,0,0,1,281.19,77.279L237.46,101.52A100,100,0,0,0,200.00,63.397Z"></path>
//         <path d="M200.00,63.397A100,100,0,0,1,237.46,101.52L211.22,116.06A70,70,0,0,0,185.00,89.378Z"></path>
//         <path d="M185.00,89.378A70,70,0,0,1,211.22,116.06L184.98,130.61A40,40,0,0,0,170.00,115.36Z"></path>
//       </g>
//       <g transform="translate(197.5, -108.25317547305482)">
//         <use width="30" xlinkHref="#staff"></use>

//         <use width="2" xlinkHref="#sharp" className="cf-sharp-1"></use>
//       </g>
//       <text x="192.5" y="79.38784067832272" className="cf-text-middle">
//         G
//       </text>
//       <text x="177.5" y="104.36860279185588" className="cf-text-inner">
//         Em
//       </text>

//       <g className="cf-arcs">
//         <path d="M279.90,75.000A150,150,0,0,1,299.98,152.62L249.98,151.75A100,100,0,0,0,236.60,100.00Z"></path>
//         <path d="M236.60,100.00A100,100,0,0,1,249.98,151.75L219.99,151.22A70,70,0,0,0,210.62,115.00Z"></path>
//         <path d="M210.62,115.00A70,70,0,0,1,219.99,151.22L189.99,150.70A40,40,0,0,0,184.64,130.00Z"></path>
//       </g>
//       <g transform="translate(243.2531754730548, -62.50000000000006)">
//         <use width="30" xlinkHref="#staff"></use>

//         <use width="2" xlinkHref="#sharp" className="cf-sharp-1"></use>
//         <use width="2" xlinkHref="#sharp" className="cf-sharp-2"></use>
//       </g>
//       <text
//         x="223.61215932167727"
//         y="110.49999999999997"
//         className="cf-text-middle"
//       >
//         D
//       </text>
//       <text
//         x="197.6313972081441"
//         y="124.49999999999997"
//         className="cf-text-inner"
//       >
//         Bm
//       </text>
//     </svg>
//   );
// };

export default CircleOfFifthsSVG;
