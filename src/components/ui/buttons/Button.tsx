import CloseIconSVG from "@/components/elements/svg/icons/interface/CloseIconSVG";
import PlayIconSVG from "@/components/elements/svg/icons/media/PlayIconSVG";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import {cva} from "class-variance-authority";

type Props = {
  onClick?: any;
  children?: ReactNode;
  variant?: "neutral" | "emerald" | null | undefined;
  icon?: string;
  className?: string;
  shape?: "rectangle" | "circle" | "square" | null | undefined;
  size?: "md" | "sm" | null | undefined;
};

export default function Button({
  children,
  onClick,
  variant = "neutral",
  icon,
  className,
  shape = "rectangle",
  size = "md"
}: Props) {
  const classes = cva([className, "flex items-center justify-center w-fit  gap-2 rounded-xl cursor-pointer"], {
    variants: {
      variant: {
        neutral: "bg-neutral-500 hover:bg-neutral-400",
        emerald: "bg-emerald-500 text-neutral-600 font-bold",
      },
      shape: {
        rectangle: "rounded-xl",
        circle: "rounded-full",
        square: "rounded-xl"
      },
      size: {
        md: "px-6 py-3",
        sm: "px-2 py-2",
      }
    },
    compoundVariants: [
      {
        size: "sm",
        shape: "square",
        className: "px-2 py-2",
      },
      {
        size: "sm",
        shape: "circle",
        className: "px-2 py-2",
      },
    ],
  });

  const pathClass = clsx({
    "stroke-neutral-600": variant === "emerald",
    "stroke-neutral-100": variant === "neutral",
  });
  return (
    <motion.button
      id="Button"
      onClick={onClick}
      className={classes({variant, shape, size})}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon === "play" && <PlayIconSVG pathClass={pathClass} />}
      {icon === "close" && <CloseIconSVG pathClass={pathClass} />}
      {children}
    </motion.button>
  );
}
