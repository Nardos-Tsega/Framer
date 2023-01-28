import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Slide({
  isActive,
  children,
  direction = 1,
  distance = 200,
}) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          exit={{ opacity: 0, x: direction * -distance }}
          initial={{ opacity: 0, x: direction * distance }}
          animate={{ opacity: 1, x: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
