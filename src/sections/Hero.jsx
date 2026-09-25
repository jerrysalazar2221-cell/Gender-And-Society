import React from "react";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <div className="hero-badge">
          MCO 1 • GENDER AND SOCIETY
        </div>

        <h1 className="hero-title">
          Gender Roles in the
          <span>Philippines</span>
        </h1>

        <p className="hero-description">
          Explore how gender roles have changed throughout
          Philippine history and how they continue to influence
          Filipino society today.
        </p>

        <div className="hero-buttons">
          <button
            className="hero-button primary"
            onClick={() => scrollTo("history")}
          >
            Explore History
          </button>

          <button
            className="hero-button secondary"
            onClick={() => scrollTo("contemporary")}
          >
            View Modern Roles
          </button>
        </div>

      </div>
    </section>
  );
}