// src/components/BoxAnimations.jsx
import React, { useRef } from "react";
import useGsap from "../hooks/useGsap";
import gsap from "gsap";
import "../styles/BoxAnimations.css";

const BoxAnimations = () => {
  const containerRef = useRef();

  useGsap(() => {
    const boxes = gsap.utils.toArray(".box");

    // Fade In
    gsap.to(".fade", { opacity: 1, duration: 1 });

    // Slide In
    gsap.to(".slide-left", { opacity: 1, x: 0, duration: 1 });
    gsap.set(".slide-left", { x: -100 });

    gsap.to(".slide-right", { opacity: 1, x: 0, duration: 1 });
    gsap.set(".slide-right", { x: 100 });

    gsap.to(".slide-up", { opacity: 1, y: 0, duration: 1 });
    gsap.set(".slide-up", { y: 100 });

    gsap.to(".slide-down", { opacity: 1, y: 0, duration: 1 });
    gsap.set(".slide-down", { y: -100 });

    // Zoom / Scale
    gsap.fromTo(".zoom", { scale: 0.5 }, { scale: 1, opacity: 1, duration: 1 });

    // Rotate
    gsap.fromTo(
      ".rotate",
      { rotation: 180 },
      { rotation: 0, opacity: 1, duration: 1 }
    );

    // Skew
    gsap.fromTo(".skew", { skewX: 20 }, { skewX: 0, opacity: 1, duration: 1 });

    // Flip (rotate Y)
    gsap.fromTo(
      ".flip",
      { rotationY: 180 },
      { rotationY: 0, opacity: 1, duration: 1 }
    );

    // Elastic Bounce
    gsap.fromTo(
      ".bounce",
      { y: -200 },
      { y: 0, opacity: 1, ease: "bounce.out", duration: 1.5 }
    );

    // Stagger group
    gsap.to(".stagger .box", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "back.out(1.7)",
    });
    gsap.set(".stagger .box", { y: 50 });
  }, []);

  return (
    <div ref={containerRef} className="box-grid">
      <div className="box fade">Fade In</div>
      <div className="box slide-left">Slide Left</div>
      <div className="box slide-right">Slide Right</div>
      <div className="box slide-up">Slide Up</div>
      <div className="box slide-down">Slide Down</div>
      <div className="box zoom">Zoom / Scale</div>
      <div className="box rotate">Rotate</div>
      <div className="box skew">Skew</div>
      <div className="box flip">Flip (Y)</div>
      <div className="box bounce">Bounce</div>

      {/* Group of staggered boxes */}
      <div
        className="stagger"
        style={{
          gridColumn: "1 / -1",
          display: "flex",
          gap: "16px",
          justifyContent: "center",
        }}
      >
        <div className="box">Stagger 1</div>
        <div className="box">Stagger 2</div>
        <div className="box">Stagger 3</div>
      </div>
    </div>
  );
};

export default BoxAnimations;
