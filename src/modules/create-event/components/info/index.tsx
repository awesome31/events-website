import { motion } from "motion/react";

interface CreateEventInfoTextProps {
  children?: React.ReactNode;
  textCenter?: boolean;
}

export function CreateEventInfoText({
  children,
  textCenter,
}: CreateEventInfoTextProps) {
  const getVariant = () => {
    if (typeof children === "string") {
      if (children.length > 20) {
        return "text-2xl";
      } else {
        return "text-4xl";
      }
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1.1, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`${getVariant()} font-bold  text-purple-900 px-6 ${
        textCenter ? "text-center" : "text-left"
      }`}
      key={children?.toString()}
    >
      {children}
    </motion.div>
  );
}

export default CreateEventInfoText;
