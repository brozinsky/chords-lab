import CloseIconSVG from "@/components/elements/svg/icons/interface/CloseIconSVG";
import PlayIconSVG from "@/components/elements/svg/icons/media/PlayIconSVG";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import {cva} from "class-variance-authority";
import ExpandSVG from "@/components/elements/svg/icons/interface/ExpandSVG";
import ArrowSmSVG from "@/components/elements/svg/icons/interface/ArrowSmSVG";
import VolumeHiIconSVG from "@/components/elements/svg/icons/media/VolumeHiIconSVG";
import VolumeLoIconSVG from "@/components/elements/svg/icons/media/VolumeLoIconSVG";
import VolumeMuteIconSVG from "@/components/elements/svg/icons/media/VolumeMuteIconSVG";
import SpinnerSVG from "@/components/elements/svg/icons/interface/SpinnerSVG";
import shortid from "shortid";

type TProps = {
  onClick?: any;
  children?: ReactNode;
  variant?: "neutral" | "emerald" | "ghost" | null | undefined;
  icon?: string;
  className?: string;
  shape?: "rectangle" | "circle" | "square" | null | undefined;
  size?: "md" | "sm" | null | undefined;
  isLoading?: boolean;
  label?: string;
  isDiv?: boolean;
};

type TLoadingWrapper = {
  children?: ReactNode;
  isLoading?: boolean;
};

const LoadingWrapper = ({ isLoading, children }: TLoadingWrapper) => {
  return isLoading ? <div className="opacity-0">{children}</div> : children;
};

export default function Button({
  children,
  isLoading = false,
  onClick,
  variant = "neutral",
  icon,
  className,
  shape = "rectangle",
  size = "md",
  label,
  isDiv = false
}: TProps) {
  const classes = cva([className, "relative flex items-center justify-center w-fit  gap-2 rounded-xl cursor-pointer"], {
    variants: {
      variant: {
        neutral: "bg-neutral-500 hover:bg-neutral-400",
        emerald: "bg-emerald-500 text-neutral-600 font-bold",
        ghost: "group bg-transparent-500 hover:bg-neutral-500 text-neutral-500 hover:text-neutral-500 font-bold",
      },
      shape: {
        rectangle: "rounded-xl",
        circle: "rounded-full",
        square: "rounded-xl"
      },
      size: {
        md: "px-6 py-3",
        sm: "px-2 py-2",
      },
      isLoading: {
        true: "bg-emerald-700 !cursor-default"
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

  const MotionComponent = !isDiv ? motion.button : motion.div;

  return (
    <MotionComponent
      id={`Button-${shortid.generate()}`}
      aria-label={label}
      onClick={onClick}
      className={classes({variant, shape, size, isLoading})}
      whileHover={isLoading ? undefined : { scale: 1.05 }}
      whileTap={isLoading ? undefined : { scale: 0.9 }}
    >
      <LoadingWrapper isLoading={isLoading}>
        {icon === "play" && <PlayIconSVG pathClass={pathClass} />}
        {icon === "volume-hi" && <VolumeHiIconSVG />}
        {(icon === "volume" || icon === "volume-lo") && <VolumeLoIconSVG />}
        {icon === "volume-mute" && <VolumeMuteIconSVG />}
        {icon === "close" && <CloseIconSVG pathClass={pathClass} />}
        {icon === "expand" && <ExpandSVG className="-rotate-90" pathClass="transition fill-neutral-300 group-hover:fill-neutral-100"/>}
        {icon === "arrow-sm-top" && <ArrowSmSVG direction="top" pathClass="transition stroke-neutral-300 group-hover:stroke-neutral-100"/>}
      </LoadingWrapper>
      <LoadingWrapper isLoading={isLoading}>
        {children}
      </LoadingWrapper>
      {isLoading && <div className=" absolute left-1/2 -rotate-90 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <SpinnerSVG className="origin-center" pathClass="stroke-neutral-800"/>
      </div>}
     </MotionComponent>
  );
}
