type SVGProps = {
  className?: string;
  width?: string;
  height?: string;
  pathClass?: string;
  direction?: "left" | "right" | "top" | "bottom";
};

export default function BentoProgressionBg({
  width = "248",
  height = "77",
}: SVGProps) {
  return (
    <div className="flex flex-col justify-end items-end mr-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 248 77"
      >
        <rect
          width={76}
          height={76}
          x={0.5}
          y={0.5}
          stroke="#72767D"
          rx={5.5}
        />
        <rect
          width={76}
          height={76}
          x={171.5}
          y={0.5}
          stroke="#72767D"
          rx={5.5}
        />
        <path
          fill="#F2F3F5"
          d="M136.354 42.354a.5.5 0 0 0 0-.708l-3.182-3.181a.501.501 0 0 0-.708.707L135.293 42l-2.829 2.828a.5.5 0 0 0 .708.707l3.182-3.181ZM100 42.5h36v-1h-36v1ZM27.923 23.344a.83.83 0 0 1 .48.656.963.963 0 0 1-.224.816.733.733 0 0 1-.544.32 1.226 1.226 0 0 1-.656-.128 4.075 4.075 0 0 0-1.696-.368c-.576 0-1.094.09-1.552.272a3.206 3.206 0 0 0-1.152.784c-.32.33-.566.725-.736 1.184a4.59 4.59 0 0 0-.24 1.52c0 .65.09 1.216.272 1.696.192.48.453.88.784 1.2.33.32.72.56 1.168.72.448.15.933.224 1.456.224.288 0 .576-.027.864-.08.288-.053.565-.15.832-.288.224-.107.443-.144.656-.112.224.032.41.144.56.336.213.267.288.544.224.832a.818.818 0 0 1-.48.608 6.102 6.102 0 0 1-.864.352c-.288.085-.581.15-.88.192-.299.053-.603.08-.912.08a6.523 6.523 0 0 1-2.192-.368 5.638 5.638 0 0 1-1.84-1.088 5.093 5.093 0 0 1-1.264-1.792c-.31-.725-.464-1.563-.464-2.512 0-.821.139-1.579.416-2.272a5.347 5.347 0 0 1 3.04-2.976 6.027 6.027 0 0 1 2.304-.432c.47 0 .928.053 1.376.16.448.107.87.261 1.264.464Zm6.527 1.936c.853 0 1.483.208 1.888.624.405.405.672.933.8 1.584l-.272-.144.128-.256c.128-.245.325-.507.592-.784.267-.288.587-.528.96-.72.384-.203.81-.304 1.28-.304.768 0 1.35.165 1.744.496.405.33.683.773.832 1.328a6.89 6.89 0 0 1 .224 1.824v4.096c0 .277-.09.512-.272.704a.933.933 0 0 1-.688.272.932.932 0 0 1-.688-.272.987.987 0 0 1-.272-.704v-4.096c0-.352-.043-.667-.128-.944a1.305 1.305 0 0 0-.464-.688c-.224-.17-.544-.256-.96-.256-.405 0-.752.085-1.04.256-.288.17-.507.4-.656.688a2.082 2.082 0 0 0-.208.944v4.096c0 .277-.09.512-.272.704a.933.933 0 0 1-.688.272.932.932 0 0 1-.688-.272.987.987 0 0 1-.272-.704v-4.096c0-.352-.043-.667-.128-.944a1.305 1.305 0 0 0-.464-.688c-.224-.17-.544-.256-.96-.256-.405 0-.752.085-1.04.256-.288.17-.507.4-.656.688a2.082 2.082 0 0 0-.208.944v4.096c0 .277-.09.512-.272.704a.933.933 0 0 1-.688.272.932.932 0 0 1-.688-.272.987.987 0 0 1-.272-.704v-6.608c0-.277.09-.507.272-.688a.906.906 0 0 1 .688-.288c.277 0 .507.096.688.288.181.181.272.41.272.688v.688l-.24-.048a3.33 3.33 0 0 1 .4-.576 3.313 3.313 0 0 1 1.44-1.024c.299-.117.624-.176.976-.176Zm17.262 0c.277 0 .507.09.688.272.181.181.272.416.272.704v6.768c0 .277-.09.512-.272.704a.933.933 0 0 1-.688.272.932.932 0 0 1-.688-.272.987.987 0 0 1-.272-.704v-.784l.352.144c0 .139-.075.31-.224.512-.15.192-.352.384-.608.576-.256.192-.56.357-.912.496a3.166 3.166 0 0 1-1.12.192 3.697 3.697 0 0 1-2-.56 4.131 4.131 0 0 1-1.424-1.568c-.341-.672-.512-1.44-.512-2.304 0-.875.17-1.643.512-2.304.352-.672.821-1.195 1.408-1.568a3.489 3.489 0 0 1 1.952-.576 3.696 3.696 0 0 1 2.256.736c.288.213.507.432.656.656.16.213.24.395.24.544l-.576.208v-1.168c0-.277.09-.507.272-.688a.906.906 0 0 1 .688-.288ZM48.48 32.4c.47 0 .88-.117 1.232-.352a2.32 2.32 0 0 0 .816-.96 3 3 0 0 0 .304-1.36c0-.512-.101-.97-.304-1.376a2.32 2.32 0 0 0-.816-.96 2.169 2.169 0 0 0-1.232-.352 2.14 2.14 0 0 0-1.216.352c-.352.235-.63.555-.832.96a3.176 3.176 0 0 0-.288 1.376c0 .501.096.955.288 1.36.203.405.48.725.832.96a2.14 2.14 0 0 0 1.216.352Zm8.43 1.76c0 .608-.116 1.13-.351 1.568-.235.448-.55.795-.944 1.04a2.464 2.464 0 0 1-1.328.368.811.811 0 0 1-.64-.272.85.85 0 0 1-.256-.624v-.176c0-.235.08-.421.24-.56.15-.139.341-.245.576-.32.256-.085.437-.208.544-.368.107-.15.17-.33.192-.544.032-.213.048-.437.048-.672v-7.184c0-.277.09-.507.272-.688a.906.906 0 0 1 .688-.288c.277 0 .507.096.688.288.181.181.272.41.272.688v7.744Zm-.991-9.76c-.363 0-.619-.059-.768-.176-.15-.117-.224-.325-.224-.624v-.304c0-.31.08-.517.24-.624.17-.117.427-.176.768-.176.373 0 .635.059.784.176.15.117.224.325.224.624v.304c0 .31-.08.523-.24.64-.16.107-.421.16-.784.16ZM195.75 22.8c.768 0 1.451.144 2.048.432a4.169 4.169 0 0 1 1.504 1.216 5.12 5.12 0 0 1 .928 1.792 7.11 7.11 0 0 1 .32 2.16c0 1.035-.187 1.979-.56 2.832-.373.843-.917 1.515-1.632 2.016-.704.501-1.573.752-2.608.752h-3.824a.988.988 0 0 1-.704-.272.989.989 0 0 1-.272-.704v-9.248a.958.958 0 0 1 .976-.976h3.824Zm-.16 9.36c.672 0 1.221-.17 1.648-.512.427-.352.736-.81.928-1.376.203-.576.304-1.2.304-1.872 0-.501-.059-.976-.176-1.424a3.49 3.49 0 0 0-.512-1.2 2.573 2.573 0 0 0-.896-.832c-.363-.203-.795-.304-1.296-.304h-2.8l.16-.144v7.84l-.096-.176h2.736Zm11.134-6.88c.853 0 1.482.208 1.888.624.405.405.672.933.799 1.584l-.271-.144.127-.256c.129-.245.326-.507.593-.784.266-.288.586-.528.96-.72.384-.203.81-.304 1.28-.304.768 0 1.349.165 1.744.496.405.33.682.773.832 1.328.149.544.224 1.152.224 1.824v4.096a.989.989 0 0 1-.272.704.934.934 0 0 1-.688.272.931.931 0 0 1-.688-.272.984.984 0 0 1-.272-.704v-4.096c0-.352-.043-.667-.128-.944a1.309 1.309 0 0 0-.464-.688c-.224-.17-.544-.256-.96-.256-.406 0-.752.085-1.04.256-.288.17-.507.4-.656.688a2.078 2.078 0 0 0-.208.944v4.096a.989.989 0 0 1-.272.704.934.934 0 0 1-.688.272.931.931 0 0 1-.688-.272.984.984 0 0 1-.272-.704v-4.096c0-.352-.043-.667-.128-.944a1.309 1.309 0 0 0-.464-.688c-.224-.17-.544-.256-.96-.256-.406 0-.752.085-1.04.256-.288.17-.507.4-.656.688a2.078 2.078 0 0 0-.208.944v4.096a.989.989 0 0 1-.272.704.934.934 0 0 1-.688.272.931.931 0 0 1-.688-.272.984.984 0 0 1-.272-.704v-6.608a.93.93 0 0 1 .272-.688.904.904 0 0 1 .688-.288c.277 0 .506.096.688.288.181.181.272.41.272.688v.688l-.24-.048c.096-.181.229-.373.4-.576a3.277 3.277 0 0 1 1.44-1.024c.298-.117.624-.176.976-.176Zm12.062 7.744a.989.989 0 0 1-.272.704.934.934 0 0 1-.688.272.931.931 0 0 1-.688-.272.984.984 0 0 1-.272-.704v-6.608a.93.93 0 0 1 .272-.688.904.904 0 0 1 .688-.288c.277 0 .506.096.688.288.181.181.272.41.272.688v6.608Zm-.976-8.624c-.363 0-.619-.059-.768-.176-.15-.117-.224-.325-.224-.624v-.304c0-.31.08-.517.24-.624.17-.117.426-.176.768-.176.373 0 .634.059.784.176.149.117.224.325.224.624v.304c0 .31-.08.523-.24.64-.16.107-.422.16-.784.16Zm7.525.88c.789 0 1.386.165 1.792.496.416.33.698.773.848 1.328.16.544.24 1.152.24 1.824v4.096a.989.989 0 0 1-.272.704.934.934 0 0 1-.688.272.931.931 0 0 1-.688-.272.984.984 0 0 1-.272-.704v-4.096c0-.352-.048-.667-.144-.944a1.28 1.28 0 0 0-.48-.688c-.235-.17-.571-.256-1.008-.256-.427 0-.79.085-1.088.256-.288.17-.512.4-.672.688-.15.277-.224.592-.224.944v4.096a.989.989 0 0 1-.272.704.934.934 0 0 1-.688.272.931.931 0 0 1-.688-.272.984.984 0 0 1-.272-.704v-6.608a.93.93 0 0 1 .272-.688.904.904 0 0 1 .688-.288c.277 0 .506.096.688.288.181.181.272.41.272.688v.688l-.24-.048c.096-.181.234-.373.416-.576.181-.213.394-.41.64-.592.245-.181.522-.325.832-.432a2.817 2.817 0 0 1 1.008-.176ZM39.497 55.024a.933.933 0 0 1-.304.704 1.024 1.024 0 0 1-.704.272c-.299 0-.539-.09-.72-.272a.987.987 0 0 1-.272-.704v-9.248c0-.277.096-.507.288-.688a.997.997 0 0 1 .736-.288c.256 0 .48.096.672.288.203.181.304.41.304.688v9.248ZM208.567 55.024a.989.989 0 0 1-.272.704.934.934 0 0 1-.688.272.931.931 0 0 1-.688-.272.984.984 0 0 1-.272-.704v-6.608a.93.93 0 0 1 .272-.688.904.904 0 0 1 .688-.288c.277 0 .506.096.688.288.181.181.272.41.272.688v6.608Zm-.976-8.624c-.363 0-.619-.059-.768-.176-.15-.117-.224-.325-.224-.624v-.304c0-.31.08-.517.24-.624.17-.117.426-.176.768-.176.373 0 .634.059.784.176.149.117.224.325.224.624v.304c0 .31-.08.523-.24.64-.16.107-.422.16-.784.16Zm4.757 8.624a.989.989 0 0 1-.272.704.933.933 0 0 1-.688.272.933.933 0 0 1-.688-.272.989.989 0 0 1-.272-.704v-6.608c0-.277.091-.507.272-.688a.906.906 0 0 1 .688-.288c.277 0 .507.096.688.288.181.181.272.41.272.688v6.608Zm-.976-8.624c-.363 0-.619-.059-.768-.176-.149-.117-.224-.325-.224-.624v-.304c0-.31.08-.517.24-.624.171-.117.427-.176.768-.176.373 0 .635.059.784.176.149.117.224.325.224.624v.304c0 .31-.08.523-.24.64-.16.107-.421.16-.784.16Z"
        />
      </svg>
    </div>
  );
}
