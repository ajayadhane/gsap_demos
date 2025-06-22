// src/hooks/useGsap.js
import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsap = (animationFn, deps = []) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(animationFn);
    return () => ctx.revert();
  }, deps);
};

export default useGsap;
