import React from "react";
import { motion } from "framer-motion";
import useWindowScrollPosition from "@rehooks/window-scroll-position";

import "./styles.css";

export default function App() {
  const { y } = useWindowScrollPosition({
    throttle: 100,
  });

  return (
    <div className="App">
      <motion.header
        style={{
          justifyContent: y > 20 ? "center" : "flex-start",
        }}
        animate={{
          background: y > 20 ? "var(--headerBackground)" : "var(--Background)",
          color: y > 20 ? "white" : "var(--headerBackground)",
        }}
      >
        <motion.h1 layout className="fake-logo">
          Level-up
        </motion.h1>
      </motion.header>

      <main className="layout">
        <h3>Grid Gallery</h3>
        <div className="grid gallery">
          {images.map((image, index) => (
            <img
              style={{
                cursor: "pointer",
              }}
              src={`https://picsum.photos/seed/${image}/500/300`}
              alt="placeholder"
            />
          ))}
        </div>
      </main>
    </div>
  );
}

const images = ["1000", "1001", "1002", "1003", "1004", "1005", "1006", "1008"];
