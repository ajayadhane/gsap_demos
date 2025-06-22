import React, { useEffect } from "react";
import gsap from "gsap";
import "./animations.css"; // Make sure you have .char styles in this file

export default function CardTitleSplitAnimation() {
  const titles = [
    "Design Magic",
    "Creative Flow",
    "Code Mastery",
    "Visual Impact",
    "UX Genius",
    "React Wizard",
  ];

  useEffect(() => {
    const titleEls = document.querySelectorAll(".card-title");

    titleEls.forEach((titleEl) => {
      const chars = titleEl.textContent.split("");
      titleEl.innerHTML = chars
        .map((char) => `<span class="char">${char}</span>`)
        .join("");
    });

    gsap.set(".card-title .char", { opacity: 0, rotateY: -90 });
    gsap.to(".card-title .char", {
      opacity: 1,
      rotateY: 0,
      duration: 0.6,
      stagger: 0.03,
      ease: "back.out(1.7)",
      delay: 0.2,
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {titles.map((title, index) => (
        <div
          key={index}
          className="bg-white/10 rounded-xl p-6 shadow-md text-white"
        >
          <h5 className="card-title text-xl font-semibold mb-2">{title}</h5>
          <p className="text-sm text-white/80">
            This is card number {index + 1}. It has an animated title using GSAP
            and SplitText-style character animation.
          </p>
        </div>
      ))}
    </div>
  );
}
