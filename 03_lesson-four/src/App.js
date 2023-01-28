import React, { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import "./styles.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <AnimateSharedLayout>
        <motion.header layoutId="header" onClick={() => setIsLoading(true)}>
          <motion.h1 layoutId="headerLogo" className="fake-logo">
            Level up Tutorials
          </motion.h1>
        </motion.header>

        <AnimatePresence>
          {isLoading && (
            <motion.div
              layoutId="header"
              onClick={() => setIsLoading(false)}
              className="loading"
            >
              <motion.h3 layoutId="headerLogo">Level Up Tutorials</motion.h3>
              <motion.div
                exit={{
                  opacity: 0,
                }}
              >
                <p>Loading ...</p>

                <motion.div
                  style={{
                    background: "var(--primary)",
                    height: 6,
                    width: 120,
                  }}
                  initial={{
                    x: -100,
                  }}
                  animate={{
                    x: 100,
                  }}
                  transition={{
                    flip: Infinity,
                    duration: 1,
                  }}
                />
                <motion.div
                  initial={{
                    x: -200,
                  }}
                  animate={{
                    x: 200,
                  }}
                  transition={{
                    flip: Infinity,
                    duration: 1.2,
                  }}
                  style={{
                    background: "var(--danger)",
                    height: 6,
                    width: 20,
                  }}
                />
                <motion.div
                  initial={{
                    x: -180,
                  }}
                  animate={{
                    x: 180,
                  }}
                  transition={{
                    flip: Infinity,
                    duration: 1.4,
                  }}
                  style={{
                    background: "var(--yellow)",
                    height: 6,
                    width: 160,
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
      </AnimateSharedLayout>
    </div>
  );
}

const images = ["1000", "1001", "1002", "1003", "1004", "1005", "1006", "1008"];
