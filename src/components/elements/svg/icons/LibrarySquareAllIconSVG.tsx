import { TSVG } from "@/utils/types";

export default function LibrarySquareAllIconSVG({
  className,
  width = "24",
}: TSVG) {
  return (
    <svg
      className={className}
      width={width}
      height={width}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 10V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H11"
        className="stroke-foreground"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.0807 19.6724V14.1404C23.0807 13.5904 22.6316 13.1824 22.0861 13.2283H22.0586C21.0961 13.3108 19.6341 13.8012 18.8182 14.3145L18.7403 14.3649C18.6074 14.4474 18.3874 14.4474 18.2545 14.3649L18.1399 14.2962C17.3241 13.7874 15.8666 13.3016 14.9041 13.2237C14.3586 13.1779 13.9141 13.5904 13.9141 14.1358V19.6724C13.9141 20.1124 14.2716 20.5249 14.7116 20.5799L14.8445 20.5983C15.8391 20.7312 17.3745 21.2354 18.2545 21.7166L18.2728 21.7258C18.3966 21.7945 18.5936 21.7945 18.7128 21.7258C19.5928 21.2399 21.1328 20.7312 22.132 20.5983L22.2832 20.5799C22.7232 20.5249 23.0807 20.1124 23.0807 19.6724Z"
        className="stroke-foreground"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 14.5161V21.3911"
        className="stroke-foreground"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
