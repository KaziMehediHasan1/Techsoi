"use client";

import Navbar from "./Navbar";
import LinkBar from "./LinkBar";
import { useEffect, useState } from "react";

function MobileScrolableNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size (mobile only)
  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 768) setIsMobile(true);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <div
      id="nav-bar"
      className={`w-full transition-all duration-300 ${
        isMobile && isScrolled
          ? "bg-white backdrop-blur-lg shadow-md fixed top-0 left-0 z-50"
          : "bg-transparent"
      }`}
    >
      <Navbar />
      <LinkBar />
    </div>
  );
}

export default MobileScrolableNav;
