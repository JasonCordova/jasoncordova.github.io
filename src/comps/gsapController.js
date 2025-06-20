'use client';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const GsapController = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Instant scroll to top (smooth can interfere with initial animations)
    window.scrollTo(0, 0);

    gsap.registerPlugin(ScrollTrigger);

    // Clean up previous animations
    gsap.killTweensOf(".fade-in");
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Create animation for each element individually
    const elements = gsap.utils.toArray(".fade-in");
    elements.forEach(element => {
      gsap.fromTo(element, 
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 100%",
            toggleActions: "play none none none",
            invalidateOnRefresh: true // Important for route changes
          }
        }
      );
    });

    // Refresh ScrollTrigger after setup
    ScrollTrigger.refresh();

    return () => {
      gsap.killTweensOf(".fade-in");
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [pathname]); // Re-run on route changes

  return null;
};

export default GsapController;