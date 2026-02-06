"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./container";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // detect current route

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // List of links for cleaner mapping
  const links = [
    { name: "Home", href: "/" },
    { name: "About + CV", href: "/about" },
    { name: "Research", href: "/research" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full mx-auto z-50 transition-all duration-300 ease-in-out select-none
        ${isScrolled ? "bg-[#000000] backdrop-blur" : "bg-transparent"}`}
    >
      <Container
        className={`flex items-center justify-between duration-300 ease-out ${
          isScrolled ? "pl-0 py-1" : "pl-4 py-6"
        }`}
      >
        <Link
          href="/"
          className={`font-Bebas text-[28px] transition-colors ${
            isScrolled ? "text-white" : "text-white"
          }`}
        >
          Shah Mohammad Rumman Prince
        </Link>

        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-Bebas text-[18px] transition-colors ${
                pathname === link.href
                  ? "text-yellow-400 border-b-2 border-yellow-400" // active link style
                  : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </Container>
    </nav>
  );
}
