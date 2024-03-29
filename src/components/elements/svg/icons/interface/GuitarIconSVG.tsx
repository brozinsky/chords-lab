import { TSVG } from "@/utils/types";

export default function GuitarIconSVG({
  className,
  width = 138,
  height = 132,
  fill = "fill-white"
}: TSVG) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 138 132"
    >
      <path
        className={fill}
        d="m77.64 92.404.02-.202c.312-3.129.607-6.084 2.201-8.504 1.083-1.644 2.311-2.801 3.611-4.027 1.19-1.12 2.42-2.28 3.594-3.859 4.548-6.11 3.389-13.275-3.136-19.806L96.27 39.423l4.21-2.344c.367-.2.693-.485.942-.82l5.748-7.723a2.927 2.927 0 0 0-.6-4.092l-6.407-4.768a2.928 2.928 0 0 0-4.092.6l-5.747 7.723c-.25.335-.428.729-.513 1.126l-1.04 4.718L76.43 50.427c-8.025-4.298-15.154-3.31-19.704 2.804-1.175 1.579-1.932 3.09-2.665 4.55-.8 1.598-1.556 3.107-2.82 4.616-1.861 2.221-4.607 3.352-7.514 4.549l-.188.077c-4.767 1.964-8.003 4.325-10.494 7.653-2.156 2.882-3.132 6.62-2.746 10.527.45 4.568 2.956 11.479 12.336 18.46 9.38 6.982 16.72 7.398 21.225 6.518 3.852-.752 7.154-2.76 9.295-5.653 2.583-3.487 4.008-7.34 4.486-12.124Zm15.464-53.96L71.918 66.909l-2.483-1.848L90.62 36.595l2.484 1.849Zm5.356-16.14 6.083 4.527-5.602 7.527-3.359 1.87-3.552-2.643.828-3.755 5.601-7.527Zm-35.2 84.81c-3.887.759-10.296.342-18.76-5.958-8.464-6.299-10.703-12.319-11.092-16.259-.308-3.128.451-6.093 2.139-8.348 2.163-2.89 4.909-4.875 9.182-6.635l.187-.078c3.13-1.288 6.365-2.62 8.72-5.432 1.498-1.789 2.373-3.534 3.219-5.221.703-1.403 1.367-2.727 2.378-4.085 2.135-2.87 4.774-4.237 8.068-4.18 2.621.045 5.202 1.01 7.24 2.049l-8.546 11.482a1.563 1.563 0 0 0 .32 2.186l4.991 3.715a1.563 1.563 0 0 0 2.187-.32l8.548-11.486c1.612 1.677 3.333 3.923 4.157 6.48 1.017 3.155.481 6.074-1.64 8.922-1.01 1.359-2.088 2.375-3.23 3.45-1.373 1.295-2.794 2.634-4.077 4.583-2.017 3.063-2.365 6.545-2.7 9.913l-.02.201c-.426 4.257-1.625 7.52-3.889 10.576-1.676 2.264-4.298 3.843-7.382 4.445Z"
      />
    </svg>
  );
}
