import { motion } from "framer-motion";
import InfoIconSVG from "@/components/elements/svg/icons/interface/InfoIconSVG";

type Props = {
  onClick?: any;
  srOnly?: string;
};

export default function ButtonInfo({
  onClick,
  srOnly = "Info",
}: Props) {
  return (
    <motion.button
      id="ButtonInfo"
      onClick={onClick}
      className="flex items-center justify-center p-1 w-fit cursor-pointer"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.85 }}
    >
      <InfoIconSVG className="group" width="20"/>
      {srOnly && <span className="sr-only">{srOnly}</span>}
    </motion.button>
  );
}
