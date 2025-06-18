'use client';

import "./index.css";
import Link from "next/link";
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
      <Link className="logo" href="/">
        JC
      </Link>
      <div className="nav">
        <Link href="/#home">Home</Link>
        <Link href="/#experience">Experience</Link>
        <Link href="/projects">Projects</Link>
      </div>
    </div>
  );
}