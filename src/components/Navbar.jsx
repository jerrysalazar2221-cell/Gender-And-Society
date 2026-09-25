import React, { useState } from "react";

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
  const [menuOpen, setMenuOpen] = useState(false);

  const goToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div
        className="navbar-brand"
        onClick={() => goToSection("home")}
      >
        BEYOND <span>/ EXPECTATIONS</span>
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <button
            key={link.id}
            className="nav-link"
            onClick={() => goToSection(link.id)}
          >
            {link.label}
          </button>
        ))}
      </nav>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open navigation menu"
      >
        ☰
      </button>
    </header>
  );
}