import SpinnerSVG from "@/components/elements/svg/icons/interface/SpinnerSVG";
import PlayIconSVG from "@/components/elements/svg/icons/media/PlayIconSVG";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import shortid from "shortid";

type TProps = {
  onClick?: any;
  srOnly?: string;
  isLoading?: boolean;
};

type TLoadingWrapper = {
  children?: ReactNode;
  isLoading?: boolean;
};

const LoadingWrapper = ({ isLoading, children }: TLoadingWrapper) => {
  return isLoading ? <div className="opacity-0">{children}</div> : children;
};

const slideUpMotion = {
  rest: { opacity: 0, ease: "linear", duration: 0.15, type: "tween", y: 20 },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.22,
      type: "tween",
      ease: "linear",
    },
  },
};

export default function ButtonPlayTile({
  onClick,
  srOnly = "Play",
  isLoading = false,
}: TProps) {
  return (
    <motion.button
      id={`ButtonPlayTile-${shortid.generate()}`}
      onClick={onClick}
      variants={slideUpMotion}
      className="absolute bottom-2 right-2 flex items-center justify-center p-2.5 active:bg-emerald-300 hover:bg-emerald-400 bg-emerald-500 rounded-full cursor-pointer"
      whileTap={{ scale: 0.95 }}
    >
      <LoadingWrapper isLoading={isLoading}>
        <PlayIconSVG
          width="16"
          pathClass="stroke-neutral-600 fill-neutral-600"
        />
      </LoadingWrapper>
      {srOnly && <span className="sr-only">{srOnly}</span>}
      {isLoading && (
        <div className=" absolute left-1/2 -rotate-90 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <SpinnerSVG
            className="origin-center"
            pathClass="stroke-neutral-800"
          />
        </div>
      )}
    </motion.button>
  );
}
