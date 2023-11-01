import PlayIconSVG from "@/components/elements/svg/icons/media/PlayIconSVG";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  onClick?: any;
  children: ReactNode;
  variant?: string;
  icon?: string;
};

export default function Button({
  children,
  onClick,
  variant = "neutral",
  icon,
}: Props) {
  const classes = clsx(
    "flex items-center justify-center w-fit px-6 py-3 gap-2 rounded-xl cursor-pointer",
    {
      "bg-neutral-500 hover:bg-neutral-400": variant === "neutral",
      "bg-emerald-500 text-neutral-600 font-bold": variant === "emerald",
    }
  );

  const pathClass = clsx({
    "stroke-neutral-600": variant === "emerald",
    "stroke-neutral-100": variant === "neutral",
  });
  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon === "play" && <PlayIconSVG pathClass={pathClass} />}
      {children}
    </motion.button>
  );
}
