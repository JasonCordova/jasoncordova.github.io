'use client'; // Required for Next.js 13+ App Router

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

const GsapController = () => {
  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".fade-in", { opacity: 0, y: 20 });

    gsap.to(".fade-in", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".fade-in",
        start: "top bottom",
        toggleActions: "play none none none",
        markers: false
      }
    });

    return () => {
      gsap.killTweensOf(".fade-in");
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null;
};

export default GsapController;