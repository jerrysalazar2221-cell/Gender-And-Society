import React from "react";

export default function SectionPage({ children, setScreen }) {
  return (
    <div>
      {/* PAGE CONTENT */}
      {children}

      {/* BACK TO HOME - BOTTOM */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "30px 20px 50px",
        }}
      >
        <button
          onClick={() => setScreen("home")}
          style={{
            padding: "12px 20px",
            background: "#635bff",
            color: "#ffffff",
            border: "none",
            borderRadius: "25px",
            fontSize: "12px",
            fontWeight: "800",
            cursor: "pointer",
          }}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}