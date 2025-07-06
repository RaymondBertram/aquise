import React, { useState, useEffect } from "react";
import logo_ipsum from "../../../assets/logos/company_logo.png";
import burger_menu from "../../../assets/icons/burger.png";
import close from "../../../assets/icons/close.png";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [flashBackground, setFlashBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide nav on scroll down, show on scroll up
      if (window.scrollY > 100 && window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // Add background flash effect when scrolling up
      if (window.scrollY < lastScrollY && window.scrollY > 0) {
        setFlashBackground(true);
        setTimeout(() => setFlashBackground(false), 1500);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav
      id="navigation"
      className={`fixed top-0 left-0 w-full z-[100] h-20 px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform
      ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      ${
        flashBackground || window.scrollY > 50
          ? "bg-white/80 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex h-full w-full max-w-7xl mx-auto items-center justify-between">
        {/* === Logo === */}
        <a href="#home" className="flex-shrink-0">
          <img
            src={logo_ipsum}
            alt="Company Logo"
            className="h-25 w-auto object-contain" // Proportional sizing
          />
        </a>

        {/* === Desktop Navigation Links === */}
        <ul className="hidden lg:flex lg:items-center lg:gap-8 list-none m-0 p-0">
          {[
            "home",
            "hero",
            "steps",
            "review",
            "analysis",
            "draftreport",
            "statusreport",
          ].map((id) => (
            <li key={id}>
              <a
                className={`relative font-semibold text-slate-800 cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[2px] after:bg-[#8247ff] after:transition-all after:duration-300 after:transform after:skew-y-[-2deg] ${
                  activeNavItem === id ? "after:w-full" : "after:w-0"
                } hover:after:w-full`}
                href={`#${id}`}
                onClick={() => setActiveNavItem(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* === Mobile Menu Trigger === */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            className="p-2 -mr-2" // Larger tap area
          >
            <img src={burger_menu} alt="burger-menu" className="w-6 h-6" />
          </button>
        </div>

        {/* === Mobile Menu Overlay === */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-[1000] flex flex-col min-h-screen w-full">
            {/* Mobile Menu Header */}
            <div className="flex h-20 items-center justify-between sticky top-0 z-50 bg-white shadow-sm px-4 sm:px-6">
              <a href="#home" onClick={() => setIsMenuOpen(false)}>
                <img
                  src={logo_ipsum}
                  alt="Company Logo"
                  className="h-9 w-auto object-contain" // Slightly smaller logo for mobile menu
                />
              </a>
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 -mr-2" // Larger tap area for close button
              >
                <img src={close} alt="close-menu" className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <ul className="flex flex-col items-center gap-6 mt-12">
              {[
                "home",
                "hero",
                "steps",
                "review",
                "analysis",
                "draftreport",
                "statusreport",
              ].map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="text-xl font-semibold text-slate-700 hover:text-[#8247ff] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
