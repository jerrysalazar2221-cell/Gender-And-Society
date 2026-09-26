import React from "react";

export default function ContentPage({
  title,
  children,
  setScreen,
}) {
  return (
    <div className="separate-page">

      <div className="separate-page-header">

        <button
          className="back-home-button"
          onClick={() => setScreen("home")}
        >
          ← Back to Home
        </button>

        <h1>{title}</h1>

      </div>

      <main className="separate-page-content">
        {children}
      </main>

    </div>
  );
}