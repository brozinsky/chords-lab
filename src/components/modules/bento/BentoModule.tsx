import BentoChordsBg from "@/components/elements/svg/bento/BentoChordsBg";
import LibraryIconSVG from "@/components/elements/svg/icons/LibraryIconSVG";
import ChordsBentoIconSVG from "@/components/elements/svg/icons/bento-modules/ChordsBentoIconSVG";
import ScalesBentoIconSVG from "@/components/elements/svg/icons/bento-modules/ScalesBentoIconSVG";
import ArrowSmSVG from "@/components/elements/svg/icons/interface/ArrowSmSVG";
import clsx from "clsx";
import MarqueeBento from "./MarqueeBento";
import ChordMapIconSVG from "@/components/elements/svg/icons/bento-modules/ChordMapIconSVG";
import BentoProgressionBg from "@/components/elements/svg/bento/BentoProgressionBg";
import EditIconSVG from "@/components/elements/svg/icons/interface/EditIconSVG";
import { Link } from "react-router-dom";

type Props = {
  width?: string;
  height?: string;
  category?: "library" | "playground";
  variant?: "chords" | "scales" | "progression";
  isDisabled?: boolean;
  order?: string;
};

const BentoModule = ({
  width,
  height,
  category,
  variant,
  isDisabled,
  order,
}: Props) => {
  const classes =
    "relative px-4 py-4 rounded-xl bg-transparent border-2 border-neutral-400 text-light flex flex-col items-center justify-center gap-2";
  return (
    <section
      id="BentoModule"
      className={clsx(
        classes,
        width,
        height,
        order,
        isDisabled && "opacity-60 grayscale"
      )}
    >
      {category && (
        <div className="capitalize flex flex-row gap-2 items-center text-base absolute top-3 py-1 px-6 border border-neutral-400 rounded-xl">
          {category === "library" && <LibraryIconSVG />}
          {category === "playground" && <EditIconSVG width={18} />}
          <span>{category}</span>
        </div>
      )}

      <div className="grid grid-cols-2 w-full h-full">
        <div className="px-8 flex flex-col justify-center">
          <div
            className={clsx(
              "border-b-4 border-emerald-500 w-fit pb-2 mb-4"
              // variant === "chords" && "border-blue-500",
              // variant === "scales" && "border-red-500"
            )}
          >
            <div className="flex flex-row gap-2 items-center">
              {variant === "chords" && (
                <>
                  <ChordsBentoIconSVG />
                  <h2 className="self-start text-4xl">Chords</h2>
                </>
              )}
              {variant === "scales" && (
                <>
                  <ScalesBentoIconSVG />
                  <h2 className="self-start text-4xl">Scales</h2>
                </>
              )}
              {variant === "progression" && (
                <>
                  <ChordMapIconSVG />
                  <h2 className="self-start text-4xl">Progression</h2>
                </>
              )}
            </div>
          </div>

          {!isDisabled ? (
            <Link
              to={`/${variant}`}
              className="group hover:bg-emerald-500 border-emerald-500 py-2 px-4 mt-4 border w-fit rounded-lg group cursor-pointer flex flex-row gap-2 items-center"
            >
              <div className="group-hover:text-black font-medium">
                Get started
              </div>
              <div className="group-hover:translate-x-1 transition">
                <ArrowSmSVG
                  pathClass={"stroke-white group-hover:stroke-black"}
                  width={"14"}
                />
              </div>
            </Link>
          ) : (
            <div className="">Not available yet</div>
          )}
        </div>

        {/* Background */}
        {variant === "chords" && <MarqueeBento />}
        {variant === "scales" && <BentoChordsBg width="250" height="192" />}
        {variant === "progression" && (
          <BentoProgressionBg width="250" height="192" />
        )}
      </div>
    </section>
  );
};

export default BentoModule;
