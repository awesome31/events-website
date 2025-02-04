import { motion } from "framer-motion";
import { ButtonProps } from "./types";

function Button(props: ButtonProps) {
  const { label, onClick, variant = "primary", backIcon, frontIcon } = props;

  return (
    <motion.button
      whileTap={{ y: 2 }}
      className={`px-4 h-12 text-white w-full  rounded-md shadow-md active:shadow-sm active:translate-y-1 transition-all flex flex-row items-center justify-center ${
        variant === "primary"
          ? "bg-purple-500"
          : variant === "success"
          ? "bg-green-500"
          : "bg-gray-500"
      }`}
      onClick={onClick}
    >
      {backIcon ? <div className="mr-2">{backIcon}</div> : null}
      <div className="text-white font-semibold text-lg">{label}</div>
      {frontIcon ? <div className="ml-2">{frontIcon}</div> : null}
    </motion.button>
  );
}

export default Button;
