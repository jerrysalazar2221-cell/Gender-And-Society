import React from "react";

const history = [
  {
    period: "Pre-Colonial",
    title: "Pre-Colonial Philippines",
    text:
      "Before colonial rule, Filipino communities had different responsibilities for men and women. Some roles could overlap depending on the community and social position."
  },
  {
    period: "Spanish Period",
    title: "Spanish Colonial Period",
    text:
      "Spanish colonial influence changed social expectations through religion, family structures, education, and cultural practices."
  },
  {
    period: "American Period",
    title: "American Colonial Period",
    text:
      "American influence introduced changes in education, employment, and public participation that affected gender expectations."
  },
  {
    period: "Modern",
    title: "Modern Philippines",
    text:
      "Contemporary Filipino society continues to experience changing gender roles through education, careers, technology, media, and social awareness."
  },
];

export default function History() {
  return (
    <section id="history" className="section history-section">

      <div className="section-header">
        <span className="section-eyebrow">
          FROM PAST TO PRESENT
        </span>

        <h2>
          Gender Through <span>History</span>
        </h2>

        <p>
          Gender expectations in the Philippines have
          developed alongside historical and social changes.
        </p>
      </div>

      <div className="history-timeline">

        {history.map((item, index) => (
          <article
            className="history-item"
            key={item.period}
          >

            <div className="history-year">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="history-content">
              <span className="section-eyebrow">
                {item.period}
              </span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>

          </article>
        ))}

      </div>

    </section>
  );
}