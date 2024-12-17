import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const MenuItem = ({ href, children }) => (
  <Link href={href}>
    <span className="text-accent-foreground hover:text-primary/70 transition-colors duration-200 cursor-pointer">
      {children}
    </span>
  </Link>
);

const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-3 left-0 right-0 mx-auto w-11/12 max-w-6xl z-50">
      <nav
        className={`
          px-6 py-2 rounded-2xl transition-all duration-200
          ${
            isScrolled
              ? "bg-card backdrop-blur-xl border border-border"
              : "bg-transparent"
          }
        `}
      >
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo icon"
              className="h-8 w-auto transition-transform hover:scale-105"
              width={32}
              height={32}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <MenuItem href="#about">Details</MenuItem>
            <MenuItem href="#prizes">Prizes</MenuItem>
            <MenuItem href="#timeline">Timeline</MenuItem>
            <MenuItem href="#sponsors">Sponsors</MenuItem>
            <MenuItem href="/rules">Rules</MenuItem>
            <MenuItem href="/privacy">Privacy</MenuItem>

            <a
              className="inline-flex font-mono items-center px-4 py-2 rounded-full text-sm font-medium text-white bg-accent hover:bg-accent/90 transition-all duration-200 ease-in-out transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
              href="https://smubia.com/"
            >
              BIA <ChevronRight className="ml-2 -mr-1 h-4 w-4" />
            </a>
          </div>

          {/* Mobile Burger Menu */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "×" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 py-4 px-6 bg-card border border-border rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <MenuItem href="#about">Details</MenuItem>
              <MenuItem href="#prizes">Prizes</MenuItem>
              <MenuItem href="#timeline">Timeline</MenuItem>
              <MenuItem href="#sponsors">Sponsors</MenuItem>
              <MenuItem href="/rules">Rules</MenuItem>
              <MenuItem href="/privacy">Privacy</MenuItem>
              <a
                className="text-accent hover:text-accent/90 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                href="https://smubia.com/"
              >
                Visit BIA
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default MenuBar;
