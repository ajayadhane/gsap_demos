// src/components/LandingPage.jsx
import React, { useRef } from "react";
import useGsap from "../hooks/useGsap";
import gsap from "gsap";
import "../css/LandingStyle.css";

const LandingPage = () => {
  const container = useRef();

  useGsap(() => {
    // Hero letters stagger
    gsap.from(".hero-title span", {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.05,
      ease: "back.out(1.7)",
    });

    gsap.from(".hero-subtext", {
      opacity: 0,
      y: 20,
      delay: 0.5,
      duration: 1,
      ease: "power2.out",
    });

    // Scroll sections
    gsap.utils.toArray(".fade-up").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    gsap.utils.toArray(".zoom-in").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    });

    gsap.utils.toArray(".slide-left").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    });

    gsap.utils.toArray(".slide-right").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <div ref={container}>
      <section className="hero">
        <h1 className="hero-title">
          {"GSAP Rocks React!".split("").map((char, i) => (
            <span key={i}>{char === " " ? "\u00A0" : char}</span>
          ))}
        </h1>
        <p className="hero-subtext">
          Scroll down to explore powerful animations
        </p>
      </section>

      <section className="section fade-up">
        <h2>Fade & Slide Animations</h2>
        <p>This section fades in from below using GSAP ScrollTrigger.</p>
      </section>

      <section className="section section-alt zoom-in">
        <h2>Zoom In</h2>
        <p>Notice the scaling effect as this block enters view.</p>
      </section>

      <section className="section slide-left">
        <h2>Slide from Left</h2>
        <p>This content smoothly enters from the left.</p>
      </section>

      <section className="section section-alt slide-right">
        <h2>Slide from Right</h2>
        <p>This one slides in from the right for variety.</p>
      </section>

      <footer>
        © {new Date().getFullYear()} — Made with 💚 using React + GSAP by Ajay
      </footer>
    </div>
  );
};

export default LandingPage;
