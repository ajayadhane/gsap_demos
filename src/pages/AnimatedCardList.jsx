import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import AnimatedHeading from "./AnimatedHeading";
import "./animations.css";

export default function AnimatedCardList() {
  const containerRef = useRef(null);

  const cards = Array.from({ length: 6 }, (_, i) => ({
    title: `Card Title ${i + 1}`,
    text: `This is card number ${
      i + 1
    }. It contains some example text that serves as a placeholder for longer paragraph content.`,
  }));

  useEffect(() => {
    gsap.set(".box", { opacity: 0, scale: 0.9 });
    gsap.to(".box", {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.2,
      ease: "back.out(1.4)",
      delay: 0.3,
    });
  }, []);

  return (
    <div
      className="container d-flex flex-column justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      {/* Main Heading */}
      <AnimatedHeading />

      {/* Cards */}
      <div className="row stagger" ref={containerRef}>
        {cards.map((card, index) => (
          <div className="col-md-4 mb-4 box" key={index}>
            <div className="card text-white bg-dark h-100 shadow">
              <div className="card-header bg-secondary fw-bold">
                Header {index + 1}
              </div>
              <div className="card-body">
                <h4>Card Heading</h4>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
