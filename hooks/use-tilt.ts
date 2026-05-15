"use client";

import { useState, useCallback } from "react";

export const useTilt = (intensity: number = 20) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      const tiltX = (y - 0.5) * intensity;
      const tiltY = (x - 0.5) * -intensity;
      
      setTilt({ x: tiltX, y: tiltY });
    },
    [intensity]
  );

  const onMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return { tilt, onMouseMove, onMouseLeave };
};
