import React from "react";

export default function MultimediaVideoPage({ setScreen }) {
  return (
    <section className="multimedia-video-page">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="video-page-header">

        <span className="section-eyebrow">
          MULTIMEDIA • VIDEO PRESENTATION
        </span>

        <h1>
          Sex vs Gender
          <br />
          <span>vs Orientation</span>
        </h1>

        <p>
          A visual presentation explaining the differences
          between sex, gender, and sexual orientation.
        </p>

      </div>


      {/* =================================================
          VIDEO PLAYER
      ================================================= */}

      <div className="video-player-container">

        <div className="video-player">

          <video
            className="video-element"
            controls
            preload="metadata"
          >
            <source
              src="/images/Sex%20vs%20Gender%20vs%20Orientation.mp4"
              type="video/mp4"
            />

            Your browser does not support the video element.
          </video>

        </div>

      </div>


      {/* =================================================
          VIDEO INFORMATION
      ================================================= */}

      <div className="video-page-content">

        <div className="video-main-info">

          <span className="section-eyebrow">
            ABOUT THIS VIDEO
          </span>

          <h2>
            Sex, Gender,
            <br />
            and Orientation
          </h2>

          <p>
            This video presents important concepts related to
            sex, gender, and sexual orientation. Understanding
            the differences between these concepts can help
            promote clearer and more respectful discussions
            about gender and society.
          </p>

          <p>
            The presentation provides an additional multimedia
            resource for our Gender and Society project.
          </p>

        </div>


        {/* =================================================
            VIDEO DETAILS
        ================================================= */}

        <div className="video-details">

          <div className="video-detail">
            <span>TOPIC</span>
            <strong>
              Sex, Gender & Orientation
            </strong>
          </div>

          <div className="video-detail">
            <span>CONTEXT</span>
            <strong>
              Gender and Society
            </strong>
          </div>

          <div className="video-detail">
            <span>TYPE</span>
            <strong>
              Educational Video
            </strong>
          </div>

          <div className="video-detail">
            <span>PROJECT</span>
            <strong>
              MCO 1
            </strong>
          </div>

        </div>

      </div>


      {/* =================================================
          NAVIGATION
      ================================================= */}

      <div className="video-page-navigation">

        <button
          onClick={() => setScreen("multimedia")}
          className="video-back-button"
        >
          ← Back to Multimedia
        </button>

        <button
          onClick={() => setScreen("home")}
          className="video-home-button"
        >
          Back to Home
        </button>

      </div>

    </section>
  );
}