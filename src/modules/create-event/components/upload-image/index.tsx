import { FaUpload } from "@react-icons/all-files/fa/FaUpload";

import { useState } from "react";
import { motion } from "framer-motion";

export default function MemoryUpload({ label }: { label: string }) {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event: any) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => {
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(file as any);
      });
    });
    Promise.all(newImages).then((results) =>
      setImages([...images, ...results] as any)
    );
  };

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
        className="w-full max-w-md mx-auto p-3 border border-purple-500 rounded-md bg-white text-purple-900 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <label
          htmlFor="file-upload"
          className="cursor-pointer flex flex-col items-center justify-center p-6 border-2 border-dashed border-purple-500 rounded-lg hover:border-purple-500 transition"
        >
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaUpload />
            <p className="mt-2 text-purple-900">Add memories</p>
          </motion.div>
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          className="hidden"
          multiple
          onChange={handleImageUpload}
        />
        <div className="mt-4 grid grid-cols-3 gap-2">
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt="Uploaded Memory"
              className="w-full h-24 object-cover rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
