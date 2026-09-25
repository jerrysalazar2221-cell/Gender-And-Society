import React from "react";

export default function Multimedia() {
  return (
    <section id="multimedia" className="section multimedia-section">

      <div className="section-heading">
        <span className="eyebrow">
          SECTION 06
        </span>

        <h2>
          <span>Multimedia</span>
        </h2>

        <p>
          Visual and video materials can help communicate
          ideas about gender and society.
        </p>
      </div>

      <div className="video-card">

        <div className="video-placeholder">
          <div className="play-icon">
            ▶
          </div>

          <span>
            Gender and Society
          </span>
        </div>

        <div className="video-content">

          <h3>
            Exploring Gender Roles
          </h3>

          <p>
            A multimedia resource for further reflection
            on gender roles and social expectations.
          </p>

          <a
            href="https://www.youtube.com/watch?v=UIh0DnFUGsk"
            target="_blank"
            rel="noreferrer"
            className="media-button"
          >
            Watch on YouTube →
          </a>

        </div>

      </div>

      <div className="media-grid">

        <div className="media-info-card">
          <div>01</div>
          <h3>History</h3>
          <p>
            Visualize how gender expectations have changed
            across different periods.
          </p>
        </div>

        <div className="media-info-card">
          <div>02</div>
          <h3>Society</h3>
          <p>
            Explore how social institutions influence
            gender roles and expectations.
          </p>
        </div>

        <div className="media-info-card">
          <div>03</div>
          <h3>Reflection</h3>
          <p>
            Use multimedia as a starting point for
            discussion and personal reflection.
          </p>
        </div>

      </div>

    </section>
  );
}