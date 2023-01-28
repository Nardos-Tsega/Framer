import React, { useState } from "react";
import { motion } from "framer-motion";

import "./styles.css";

export default function App() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="App">
      <header>
        <h1 className="fake-logo">Level Up</h1>
      </header>
      <main className="layout">
        <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>

        <motion.div layout className="card">
          <motion.h4 layout>Post Number one</motion.h4>
          {isToggled && (
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          )}
        </motion.div>
      </main>
    </div>
  );
}
