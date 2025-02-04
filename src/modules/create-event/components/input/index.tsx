import { motion } from "framer-motion";
import { useState } from "react";

interface CreateEventInputProps {
  label: string;
  textarea?: boolean;
  placeholder?: string;
}

export function CreateEventInput({
  label,
  textarea,
  placeholder = "Write something beautiful...",
}: CreateEventInputProps) {
  const [focused, setFocused] = useState(false);
  const [text, setText] = useState("");

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
        className={`text-xl font-bold text-purple-900`}
      >
        {label}
      </motion.label>

      {textarea ? (
        <motion.div
          className="relative w-full max-w-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.textarea
            className="w-full h-56 p-2 bg-white text-purple-900 border rounded-md  resize-none"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={placeholder}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            rows={4}
          />
        </motion.div>
      ) : (
        <motion.input
          type="text"
          className="px-4 border border-gray-300 rounded-md w-full h-14"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

export default CreateEventInput;
