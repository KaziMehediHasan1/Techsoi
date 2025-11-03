
"use client";

import { useEffect } from "react";

export default function NavbarScrollHandler() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("nav-bar");
      if (!navbar) return;
      if (window.scrollY > 50) {
        navbar.classList.add("bg-white/20", "backdrop-blur-lg");
        navbar.classList.remove("bg-transparent");
      } else {
        navbar.classList.add("bg-transparent");
        navbar.classList.remove("bg-white/20", "backdrop-blur-lg");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
