import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./animations.css"; // For .char styling

export default function AnimatedHeading() {
  const headingRef = useRef(null);

  useEffect(() => {
    const el = headingRef.current;

    // Split text into spans
    const chars = el.textContent.split("");
    el.innerHTML = chars
      .map((char) => `<span class="char">${char}</span>`)
      .join("");

    // Animation for heading characters
    gsap.set(".char", { opacity: 0, y: 40 });
    gsap.to(".char", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "power3.out",
    });
  }, []);

  return (
    <h2
      ref={headingRef}
      className="text-center text-light fw-bold mb-5 display-4"
    >
      I'm Ajay Adhane
    </h2>
  );
}
