import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function SelectableList({
  options,
  label,
}: {
  options: any;
  label: string;
}) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative flex flex-col w-full gap-3">
      <motion.label
        initial={{ opacity: 0, y: 0, x: 100 }}
        animate={{
          scale: 1,
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 0.5 }}
        className={`text-lg font-bold text-purple-900`}
      >
        {label}
      </motion.label>
      <motion.div
        className="w-full max-w-md mx-auto grid grid-cols-2 gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {options.map((option: any, index: number) => (
          <motion.div
            key={option}
            className={`p-3 rounded-lg cursor-pointer border transition-all text-center ${
              selected === option
                ? "bg-purple-500 text-white border-purple-500"
                : "bg-white text-purple-900 border-purple-500 font-medium text-medium"
            }`}
            onClick={() => setSelected(option)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {option}
            <AnimatePresence>
              {selected === option && (
                <motion.div
                  className="w-2 h-2 bg-white rounded-full inline-block ml-2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
