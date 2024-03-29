import { motion } from "framer-motion";
import SettingsIconSVG from "@/components/elements/svg/icons/interface/SettingsIconSVG";

type TProps = {
  onClick?: () => void;
  srOnly?: string;
};

export default function ButtonSettings({
  onClick,
  srOnly = "Settings",
}: TProps) {
  return (
    <motion.button
      id="ButtonSettings"
      aria-label="Settings"
      onClick={onClick}
      className="flex items-center hover:bg-neutral-500 rounded-xl justify-center p-2 w-fit cursor-pointer"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 30 }}
        whileTap={{ scale: 0.85 }}
      >
        <SettingsIconSVG />
      </motion.div>
      {srOnly && <span className="sr-only">{srOnly}</span>}
    </motion.button>
  );
}
