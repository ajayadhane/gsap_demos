// SplitTextDemo.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const SplitTextDemo = () => {
  const textRef = useRef();

  useEffect(() => {
    const letters = textRef.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: "power3.out",
      }
    );
  }, []);

  const text = "Frontend React.js Developer";

  return (
    <h1
      ref={textRef}
      style={{
        fontSize: "3rem",
        fontWeight: "bold",
        display: "flex",
        flexWrap: "wrap",
        gap: "4px",
      }}
    >
      {text.split("").map((char, i) => (
        <span key={i} style={{ display: "inline-block" }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};

export default SplitTextDemo;
