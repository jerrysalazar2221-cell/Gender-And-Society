import React, { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Gender Roles", id: "gender-roles" },
  { label: "History", id: "history" },
  { label: "Contemporary", id: "contemporary" },
  { label: "Issues", id: "issues" },
  { label: "Analysis", id: "analysis" },
  { label: "Multimedia", id: "multimedia" },
  { label: "Reflection", id: "reflection" },
{ label: "Conclusion", id: "conclusion" },
{ label: "Our Group", id: "group-members" },
{ label: "References", id: "references" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMobileOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">

        <button
          className="brand"
          onClick={() => scrollToSection("home")}
        >
          <span>BEYOND</span>
          <strong>/</strong>
          <span>EXPECTATIONS</span>
        </button>

        <div className="desktop-nav">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <div className="mobile-nav">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}