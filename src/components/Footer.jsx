import React from "react";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="hero">

      <div className="hero-container">

        <div className="hero-badge">
          MCO 1 • GENDER AND SOCIETY
        </div>

        <h1>
          Beyond
          <span>/ Expectations</span>
        </h1>

        <p>
          Exploring gender roles, history, contemporary experiences,
          social issues, and the changing perspectives of gender
          in Philippine society.
        </p>

        <div className="hero-buttons">

          <button
            className="hero-button primary"
            onClick={() => scrollTo("gender-roles")}
          >
            Understanding the Basics
          </button>

          <button
            className="hero-button secondary"
            onClick={() => scrollTo("history")}
          >
            Explore History
          </button>

        </div>

        <div className="hero-cards">

          <div className="hero-card">
            <div className="hero-card-icon">◈</div>
            <h3>Understand</h3>
            <p>
              Learn the basic concepts of gender and society.
            </p>
          </div>

          <div className="hero-card">
            <div className="hero-card-icon">◎</div>
            <h3>Explore</h3>
            <p>
              Discover how gender roles developed through history.
            </p>
          </div>

          <div className="hero-card">
            <div className="hero-card-icon">△</div>
            <h3>Reflect</h3>
            <p>
              Examine contemporary issues and perspectives.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}