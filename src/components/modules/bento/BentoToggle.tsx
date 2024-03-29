import GuitarIconSVG from "@/components/elements/svg/icons/interface/GuitarIconSVG";
import PianoIconSVG from "@/components/elements/svg/icons/interface/PianoIconSVG";
import { TInstrumentsToggle } from "@/utils/types";
import clsx from "clsx";
import { useEffect } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

type TProps = {
  width?: string;
  height?: string;
  order?: string;
  value: TInstrumentsToggle;
  setValue: (value: TInstrumentsToggle) => void;
};

const BentoToggle = ({ width, height, value, setValue, order }: TProps) => {
  const classes =
    "gap-4 relative px-4 py-4 rounded-xl bg-transparent border-2 border-neutral-400 text-light flex flex-col items-center justify-center gap-2";
  return (
    <section id="BentoTitle" className={clsx(classes, width, height, order)}>
      <button
        aria-label="Set instrument to piano"
        onClick={() => setValue("piano")}
        className={clsx(
          "transition bg-neutral-800 rounded-lg",
          value === "piano" && "bg-neutral-600"
        )}
      >
        <PianoIconSVG
          fill={clsx(
            "fill-neutral-400",
            value === "piano" && "fill-white/[.6]"
          )}
          className="w-20 h-20"
        />
      </button>
      <button
        aria-label="Set instrument to guitar"
        data-tooltip-id={"not-available"}
        className={clsx(
          "transition bg-neutral-800 rounded-lg",
          value === "guitar" && "bg-neutral-600"
        )}
      >
        <GuitarIconSVG
          fill={clsx(
            "fill-neutral-400",
            value === "guitar" && "fill-white/[.6]"
          )}
          className="w-20 h-20"
        />
        <ReactTooltip
          id={"not-available"}
          place="bottom"
          variant="light"
          content={"Not available yet"}
        />
      </button>
    </section>
  );
};

export default BentoToggle;
