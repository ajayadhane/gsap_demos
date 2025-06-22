import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedCards() {
  const containerRef = useRef(null);

  // Dummy card data
  const cards = Array.from({ length: 6 }, (_, i) => ({
    title: `Card Title ${i + 1}`,
    text: `This is card number ${
      i + 1
    }. It contains some example text that serves as a placeholder for longer paragraph content.`,
  }));

  useEffect(() => {
    // Split all card titles into span.char
    const titleEls = document.querySelectorAll(".card-title");

    titleEls.forEach((titleEl) => {
      const chars = titleEl.textContent.split("");
      titleEl.innerHTML = chars
        .map((char) => `<span class="char">${char}</span>`)
        .join("");
    });

    // Animate each character of titles
    gsap.set(".char", { opacity: 0, y: 20 });
    gsap.to(".char", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.02,
      ease: "power2.out",
      delay: 0.3,
    });

    // Animate cards with fade + scale
    gsap.set(".stagger .box", { opacity: 0, scale: 0.9 });
    gsap.to(".stagger .box", {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.2,
      ease: "back.out(1.5)",
    });
  }, []);

  return (
    <div
      className="container d-flex flex-column justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <h2 className="text-center text-light fw-bold mb-5 display-5">
        Animated Card Titles
      </h2>

      <div className="row stagger" ref={containerRef}>
        {cards.map((card, index) => (
          <div className="col-md-4 mb-4 box" key={index}>
            <div className="card text-white bg-dark h-100 shadow">
              <div className="card-header bg-secondary fw-bold">
                Header {index + 1}
              </div>
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
