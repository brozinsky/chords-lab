import LogoSVG from "@/components/elements/svg/LogoSVG";
import clsx from "clsx";

type Props = {
  width?: string;
  height?: string;
  order?: string;
};

const BentoTitle = ({ width, height, order }: Props) => {
  const classes =
    "relative px-4 py-4 rounded-xl bg-transparent border-2 border-neutral-400 text-light flex flex-col items-center justify-center gap-2";
  return (
    <section id="BentoTitle" className={clsx(classes, width, height, order)}>
      <div className="flex items-center flex-shrink-0 mr-6 text-white select-none">
        <LogoSVG width={80} height={68} />
        <div className="mt-1 ml-2 text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Chords <span className="font-bold">Lab</span>
          <span className="absolute bottom-0 right-0 px-4 py-2 text-sm rounded-lg text-neutral-300">
            version alpha
          </span>
        </div>
      </div>
    </section>
  );
};

export default BentoTitle;
