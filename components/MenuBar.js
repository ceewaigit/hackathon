import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MenuItem = ({ href, children }) => (
  <Link href={href} className="group relative">
    <span className="font-medium transition-colors hover:text-accent">
      {children}
    </span>
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
  </Link>
);

const MobileMenuItem = ({ href, children, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -5 }}
    transition={{ duration: 0.2 }}
  >
    <Link
      href={href}
      onClick={onClick}
      className="block py-2 px-4 text-lg font-medium hover:bg-accent/10 rounded transition-colors"
    >
      {children}
    </Link>
  </motion.div>
);

const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <img
                src="/ceewai_chi.svg"
                alt="logo icon"
                className="h-8 w-auto sm:h-10 bg-primary rounded-lg transition-transform hover:scale-105"
              />
            </Link>
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-8">
            <MenuItem href="#about">Details</MenuItem>
            <MenuItem href="#prizes">Prizes</MenuItem>
            <MenuItem href="#timeline">Timeline</MenuItem>
            <MenuItem href="#sponsors">Sponsors</MenuItem>
            <MenuItem href="/rules">Rules</MenuItem>
            <MenuItem href="/privacy">Privacy</MenuItem>

            <a
              className="inline-flex font-mono items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all duration-200 ease-in-out transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
              href="https://smubia.com/"
            >
              BIA <ChevronRight className="ml-2 -mr-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-background shadow-lg border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <MobileMenuItem href="#about" onClick={toggleMenu}>
                Details
              </MobileMenuItem>
              <MobileMenuItem href="#prizes" onClick={toggleMenu}>
                Prizes
              </MobileMenuItem>
              <MobileMenuItem href="#sponsors" onClick={toggleMenu}>
                Sponsors
              </MobileMenuItem>
              <MobileMenuItem href="#timeline" onClick={toggleMenu}>
                Timeline
              </MobileMenuItem>
              <MobileMenuItem href="/rules" onClick={toggleMenu}>
                Rules
              </MobileMenuItem>
              <MobileMenuItem href="/privacy" onClick={toggleMenu}>
                Privacy Policy
              </MobileMenuItem>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="w-20 rounded-full"
                    src="/logo.png"
                    alt="BIA logo"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-primary">
                    Brought to you by
                  </div>
                  <a
                    href="https://smubia.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-accent"
                  >
                    SMU Business Intelligence & Analytics
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MenuBar;
