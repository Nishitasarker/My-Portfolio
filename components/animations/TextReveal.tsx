"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const TextReveal = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const text = new SplitType(textRef.current, { types: "words,chars" });
    
    gsap.from(text.chars, {
      opacity: 0,
      y: 20,
      rotateX: -90,
      stagger: 0.02,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
      },
    });

    return () => {
      text.revert();
    };
  }, []);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
};

export default TextReveal;
