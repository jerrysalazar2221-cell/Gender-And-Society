import React from "react";

const mediaItems = [
  {
    number: "01",
    title: "Gender Roles",
    category: "UNDERSTANDING",
    image: "/images/image1.jpg",
    description:
      "Explore how society develops expectations about the roles and responsibilities of women and men.",
  },
  {
    number: "02",
    title: "Gender in History",
    category: "HISTORY",
    image: "/images/image2.jpg",
    description:
      "Discover how gender roles have changed from earlier Philippine communities to the present.",
  },
  {
    number: "03",
    title: "Modern Society",
    category: "CONTEMPORARY",
    image: "/images/image3.jpg",
    description:
      "See how education, careers, family, technology, and communities influence gender roles today.",
  },
  {
    number: "04",
    title: "Gender Issues",
    category: "SOCIAL ISSUES",
    image: "/images/image4.jpg",
    description:
      "Learn about stereotypes, discrimination, unequal opportunities, and other gender-related challenges.",
  },
];

export default function Multimedia({ setScreen }) {
  return (
    <section id="multimedia" className="section multimedia-section">

      {/* HEADER */}
      <div className="multimedia-header">

        <span className="section-eyebrow">
          VISUAL STORIES • MEDIA
        </span>

        <h2>
          Gender Through <span>Media</span>
        </h2>

        <p>
          Explore visual materials that help explain gender roles,
          historical changes, contemporary experiences, and social issues
          in Philippine society.
        </p>

      </div>

      {/* FEATURED VIDEO */}
      <div className="multimedia-video">

        <div className="video-label">
          <span>FEATURED VIDEO</span>
          <span>01</span>
        </div>

        <div className="video-content">

          <div className="video-placeholder">

            <div className="video-overlay"></div>

            <div className="play-button">
              ▶
            </div>

            <div className="video-text">
              <span>WATCH & EXPLORE</span>
              <h3>
                Gender Roles in
                <br />
                Philippine Society
              </h3>
            </div>

          </div>

          <div className="video-info">

            <span className="section-eyebrow">
              VIDEO PRESENTATION
            </span>

            <h3>
              Understanding Gender
              Through Visual Stories
            </h3>

            <p>
              This video provides additional information about
              gender roles, gender equality, social expectations,
              and changing experiences in Philippine society.
            </p>

            <button
              className="multimedia-button"
              onClick={() => setScreen("multimedia-video")}
            >
              WATCH VIDEO
              <span>→</span>
            </button>

          </div>

        </div>

      </div>

      {/* MEDIA CARDS */}

      <div className="media-heading">

        <span className="section-eyebrow">
          EXPLORE THE TOPICS
        </span>

        <h3>
          Visual <span>Gallery</span>
        </h3>

      </div>

      <div className="media-grid">

        {mediaItems.map((item) => (

          <article
            className="media-card"
            key={item.number}
          >

            <div className="media-image">

              <img
                src={item.image}
                alt={item.title}
              />

              <span className="media-number">
                {item.number}
              </span>

            </div>

            <div className="media-card-content">

              <span className="media-category">
                {item.category}
              </span>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

              <span className="media-arrow">
                EXPLORE →
              </span>

            </div>

          </article>

        ))}

      </div>

      {/* MEDIA MESSAGE */}

      <div className="multimedia-message">

        <span className="section-eyebrow">
          WHY MULTIMEDIA?
        </span>

        <h3>
          Stories can make ideas easier to understand.
        </h3>

        <p>
          Images and videos provide another way to explore
          gender roles and social experiences. They can help
          us recognize different perspectives and think more
          critically about how gender is represented in society.
        </p>

      </div>

    </section>
  );
}