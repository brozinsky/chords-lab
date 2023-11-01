import PlayIconSVG from "@/components/elements/svg/icons/media/PlayIconSVG";
import { motion } from "framer-motion";

type Props = {
  onClick?: any;
  srOnly?: string;
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

// TODO - expand to different icons and 'custom' with icon passed in children
export default function ButtonPlayTile({ onClick, srOnly = "Play" }: Props) {
  return (
    <motion.button
      onClick={onClick}
      variants={slideUpMotion}
      className="absolute bottom-2 right-2 flex items-center justify-center p-2.5 bg-emerald-500 rounded-full cursor-pointer"
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.15 }}
    >
      <PlayIconSVG width="16" pathClass="stroke-neutral-600 fill-neutral-600" />
      {srOnly && <span className="sr-only">{srOnly}</span>}
    </motion.button>
  );
}
