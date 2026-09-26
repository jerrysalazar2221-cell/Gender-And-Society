import React from "react";

const references = [
  {
    number: "01",
    title: "Philippine Commission on Women",
    description:
      "Information and resources about gender equality, women's rights, and gender-related issues in the Philippines.",
    link: "https://pcw.gov.ph/",
  },
  {
    number: "02",
    title: "Philippine Statistics Authority",
    description:
      "Statistical information and data related to the Philippine population, society, education, and other social indicators.",
    link: "https://psa.gov.ph/",
  },
  {
    number: "03",
    title: "United Nations Women",
    description:
      "Resources and information about gender equality and women's empowerment around the world.",
    link: "https://www.unwomen.org/",
  },
  {
    number: "04",
    title: "Official Gazette of the Republic of the Philippines",
    description:
      "Official government information, laws, policies, and historical documents of the Philippines.",
    link: "https://www.officialgazette.gov.ph/",
  },
];

export default function References() {
  return (
    <section id="references" className="section references-section">

      <div className="section-header">
        <span className="section-eyebrow">
          SOURCES &amp; RESOURCES
        </span>

        <h2>
          Our <span>References</span>
        </h2>

        <p>
          The following sources were used to support our
          discussion of gender, history, society, and equality.
        </p>
      </div>

      <div className="references-list">

        {references.map((reference) => (
          <article
            className="reference-card"
            key={reference.number}
          >

            <div className="reference-number">
              {reference.number}
            </div>

            <div className="reference-content">

              <h3>
                {reference.title}
              </h3>

              <p>
                {reference.description}
              </p>

              <a
                href={reference.link}
                target="_blank"
                rel="noopener noreferrer"
                className="reference-link"
              >
                Visit Source →
              </a>

            </div>

          </article>
        ))}

      </div>

      <div className="references-note">

        <span className="section-eyebrow">
          BEYOND / EXPECTATIONS
        </span>

        <p>
          These resources provide additional information for
          understanding gender and society in the Philippines
          and beyond.
        </p>

      </div>

    </section>
  );
}