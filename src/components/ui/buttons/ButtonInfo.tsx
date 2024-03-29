import { motion } from "framer-motion";
import InfoIconSVG from "@/components/elements/svg/icons/interface/InfoIconSVG";
import { forwardRef } from "react";

type TProps = {
  onClick?: () => void;
  srOnly?: string;
};

const ButtonInfo = forwardRef<HTMLButtonElement, TProps>(
  ({ onClick, srOnly = "Info" }, ref) => {
    return (
      <motion.button
        ref={ref}
        id="ButtonInfo"
        onClick={onClick}
        className="flex items-center justify-center p-1 w-fit cursor-pointer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.85 }}
      >
        <InfoIconSVG className="group" width="20" />
        {srOnly && <span className="sr-only">{srOnly}</span>}
      </motion.button>
    );
  }
);

export default ButtonInfo;
