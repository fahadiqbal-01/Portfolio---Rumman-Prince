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
    { name: "About , CV", href: "/about" },
    { name: "Research", href: "/research" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full mx-auto z-50 transition-all duration-300 ease-out select-none
        ${isScrolled ? "bg-[#000000] " : "bg-transparent"}`}
    >
      <Container
        className={`flex items-center justify-between duration-300 ease-out ${
          isScrolled ? "pl-0 py-1 " : "pl-4 py-6"
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
              className={`font-Bebas text-[18px] transition-colors after:content-[""] after:h-0.5 after:w-0 after:bg-yellow-400 after:absolute after:top-[50%] after:translate-y-[-50%] after:left-[50%] after:translate-x-[-50%] 
                hover:after:w-[140%] hover:after:bg-yellow-400 hover:after:duration-300 hover:after:ease-out relative ${
                  pathname === link.href
                    ? "text-yellow-400 after:w-[120%] " // active link style
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
