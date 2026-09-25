import React from "react";

const references = [
  {
    title: "Commission on Human Rights of the Philippines",
    description:
      "Resources and educational materials related to gender equality and human rights.",
  },
  {
    title: "Philippine Statistics Authority",
    description:
      "Statistical resources related to Philippine society, population, education, and work.",
  },
  {
    title: "United Nations Women",
    description:
      "Educational and informational resources concerning gender equality and women's empowerment.",
  },
  {
    title: "World Health Organization",
    description:
      "Resources discussing gender, social determinants, and health-related perspectives.",
  },
];

export default function References() {
  return (
    <section id="references" className="section references-section">

      <div className="section-heading">
        <span className="eyebrow">
          SECTION 08
        </span>

        <h2>
          <span>References</span>
        </h2>

        <p>
          Sources and organizations that can support further
          study of gender and society.
        </p>
      </div>

      <div className="references-list">

        {references.map((reference, index) => (
          <article
            className="reference-card"
            key={reference.title}
          >

            <span>
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <h3>
                {reference.title}
              </h3>

              <p>
                {reference.description}
              </p>
            </div>

          </article>
        ))}

      </div>

      <div className="citation-note">
        <strong>Academic note:</strong> Add the exact URLs,
        publication dates, authors, and access dates required
        by your instructor to your final reference list.
      </div>

    </section>
  );
}