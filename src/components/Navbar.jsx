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
  { label: "References", id: "references" },
];

export default function Navbar({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (id) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div
        className="navbar-brand"
        onClick={() => handleNavigation("home")}
      >
        BEYOND <span>/ EXPECTATIONS</span>
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <button
            key={link.id}
            className="nav-link"
            onClick={() => handleNavigation(link.id)}
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