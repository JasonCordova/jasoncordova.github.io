'use client';

import "./index.css";
import { useEffect, useState, useRef } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        setIsScrolled(window.scrollY > headerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`header ${isScrolled ? 'active' : ''}`} ref={headerRef}>
      <a className="logo" href="/">
        JC
      </a>
      <div className="nav">
        <a href="/#home">Home</a>
        <a href="/#experience">Experience</a>
        <a href="/projects">Projects</a>
      </div>
    </div>
  );
}