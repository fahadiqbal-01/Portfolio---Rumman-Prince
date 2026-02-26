"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./container";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Stable scroll detection (no layout jump)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About , CV", href: "/about" },
    { name: "Research", href: "/research" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        menuOpen
          ? "bg-[#000000]"
          : isScrolled
            ? "bg-[#000000] shadow-lg"
            : "bg-transparent"
      }`}
    >
      <Container
        className={` flex items-center justify-between ${isScrolled ? " h-13  duration-300 ease-out " : "h-20 duration-300 ease-out "} `}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-Bebas text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] text-white"
        >
          Shah Mohammad Rumman Prince
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-Bebas text-[18px] relative transition-colors
              after:content-[""] after:h-0.5 after:w-0 after:bg-yellow-400 
              after:absolute after:top-1/2 after:left-1/2 
              after:-translate-x-1/2 after:-translate-y-1/2 
              after:transition-all after:duration-300
              hover:after:w-[140%]
              ${
                pathname === link.href
                  ? "text-yellow-400 after:w-[120%]"
                  : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white transition-transform duration-300"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </Container>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden bg-[#000000] overflow-hidden transition-all duration-500 ease-in-out border-b border-yellow-00
        ${menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <Container className="flex flex-col items-center gap-6 py-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-Bebas text-[20px] relative transition-colors
              after:content-[""] after:h-0.5 after:w-0 after:bg-yellow-400 
              after:absolute after:top-1/2 after:left-1/2 
              after:-translate-x-1/2 after:-translate-y-1/2 
              after:transition-all after:duration-300
              hover:after:w-[140%]
              ${
                pathname === link.href
                  ? "text-yellow-400 after:w-[120%]"
                  : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </Container>
      </div>
    </nav>
  );
}
