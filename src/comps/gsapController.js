'use client';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const GsapController = () => {
  const pathname = usePathname();

  useEffect(() => {
  
    window.scrollTo(0, 0);

    gsap.registerPlugin(ScrollTrigger);


    gsap.killTweensOf(".fade-in");
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const elements = gsap.utils.toArray(".fade-in");
    elements.forEach(element => {
      gsap.fromTo(element, 
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "circ.out",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            toggleActions: "play none none none",
            invalidateOnRefresh: true
          }
        }
      );
    });

    ScrollTrigger.refresh();

    return () => {
      gsap.killTweensOf(".fade-in");
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [pathname]);

  return null;
};

export default GsapController;