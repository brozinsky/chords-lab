import MarqueeCMinSVG from "@/components/elements/svg/bento/MarqueeCMinSVG";
import MarqueeDMajSVG from "@/components/elements/svg/bento/MarqueeDMajSVG";
import MarqueeFmaj7SVG from "@/components/elements/svg/bento/MarqueeFmaj7SVG";
import Marquee from "react-fast-marquee";

export default function MarqueeBento() {
  return (
    <div className="flex flex-col justify-end">
      <div className="marquee">
        <Marquee direction="left" speed={20} pauseOnHover>
          <MarqueeCMinSVG />
          <MarqueeDMajSVG />
          <MarqueeFmaj7SVG />
        </Marquee>
      </div>
      <div className="marquee">
        <Marquee direction="right" speed={18} pauseOnHover>
          <MarqueeCMinSVG />
          <MarqueeDMajSVG />
          <MarqueeFmaj7SVG />
        </Marquee>
      </div>
    </div>
  );
}
