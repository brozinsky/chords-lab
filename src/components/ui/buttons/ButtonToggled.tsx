import { clsx } from "clsx";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cva } from "class-variance-authority";
import ArrowSmSVG from "@/components/elements/svg/icons/interface/ArrowSmSVG";

type TProps = {
  onToggle?: () => void;
  toggleState: boolean;
  children?: ReactNode;
  variant?: "neutral" | "emerald" | "ghost" | "neutral-dark" | null | undefined;
  icon?: string;
  className?: string;
  classNameToggled?: string;
  classNameIcon?: string;
  classNameIconToggled?: string;
  shape?: "rectangle" | "circle" | "square" | "hemicircle" | null | undefined;
  size?: "md" | "sm" | "wide" | null | undefined;
};

export default function ButtonToggled({
  children,
  toggleState,
  onToggle,
  variant = "neutral",
  icon,
  className,
  classNameIcon,
  classNameIconToggled,
  shape = "rectangle",
  size = "md",
}: TProps) {
  const classes = cva(
    [
      className,
      "flex border-t border-l border-r border-neutral-500 items-center justify-center w-fit  gap-2 cursor-pointer",
    ],
    {
      variants: {
        variant: {
          neutral: "bg-neutral-500 hover:bg-neutral-400",
          "neutral-dark": "group bg-neutral-700 text-neutral-500",
          emerald: "bg-emerald-500 text-neutral-600 font-bold",
          ghost:
            "group bg-transparent-500 hover:bg-neutral-500 text-neutral-500 hover:text-neutral-500 font-bold",
        },
        shape: {
          rectangle: "rounded-xl",
          circle: "rounded-full",
          square: "rounded-xl",
          hemicircle: "rounded-tl-full rounded-tr-full",
        },
        size: {
          md: "px-6 py-3",
          sm: "px-2 py-2",
          wide: "px-12 pt-1 pb-1"
        },
      },
    }
  );

  return (
    <motion.button
      id="ButtonToggled"
      aria-label={`${toggleState ? "Collapse tabs" : "Expand tabs"}`}
      onClick={onToggle}
      className={classes({ variant, shape, size })}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon === "arrow-sm-top" && (
        <ArrowSmSVG
          className={clsx(toggleState ? classNameIcon : classNameIconToggled)}
          pathClass="transition stroke-neutral-300 group-hover:stroke-neutral-100"
        />
      )}
      {children}
    </motion.button>
  );
}
