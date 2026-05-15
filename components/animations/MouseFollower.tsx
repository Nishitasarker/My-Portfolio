"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const MouseFollower = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const x = useSpring(mousePos.x, springConfig);
  const y = useSpring(mousePos.y, springConfig);

  return (
    <>
      <motion.div
        style={{ x, y }}
        className="fixed top-0 left-0 w-8 h-8 border border-brand-purple rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden lg:block"
      />
      <motion.div
        style={{ x, y }}
        className="fixed top-0 left-0 w-1 h-1 bg-brand-purple rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden lg:block"
      />
    </>
  );
};

export default MouseFollower;
