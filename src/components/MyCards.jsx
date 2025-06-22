import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MyCards() {
  const containerRef = useRef(null);

  // Dummy card data
  const cards = Array.from({ length: 6 }, (_, i) => ({
    title: `Card Title ${i + 1}`,
    text: `This is card number ${
      i + 1
    }. It contains some example text that serves as a placeholder for longer paragraph content, simulating real-world usage scenarios for better design visibility.`,
  }));

  useEffect(() => {
    gsap.set(".stagger .box", { y: 50, opacity: 0 });

    gsap.to(".stagger .box", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "back.out(1.7)",
    });
  }, []);

  return (
    <div className="container my-5">
      <div
        className="row stagger"
        ref={containerRef}
        style={{ justifyContent: "center", gap: "16px" }}
      >
        {cards.map((card, index) => (
          <div className="col-md-4 mb-4 box" key={index}>
            <div className="card text-white bg-dark h-100">
              <div className="card-header">Header {index + 1}</div>
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
