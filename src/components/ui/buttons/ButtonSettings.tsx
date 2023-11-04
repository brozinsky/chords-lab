import { motion } from "framer-motion";
import SettingsIconSVG from "@/components/elements/svg/icons/interface/SettingsIconSVG";

type Props = {
  onClick?: any;
  srOnly?: string;
};

export default function ButtonSettings({ onClick, srOnly = "Settings" }: Props) {
  return (
    <motion.button
      id="ButtonSettings"
      onClick={onClick}
      className="flex items-center justify-center p-2 w-fit cursor-pointer"
      whileHover={{ scale: 1.1, rotate: 30 }}
      whileTap={{ scale: 0.85 }}
    >
      <SettingsIconSVG />
      {srOnly && <span className="sr-only">{srOnly}</span>}
    </motion.button>
  );
}
