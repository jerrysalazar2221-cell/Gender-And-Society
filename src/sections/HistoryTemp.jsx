import React from "react";

const timeline = [
  {
    period: "Pre-Colonial Philippines",
    title: "Different Social Roles",
    text: "Before Spanish colonization, communities had varied roles for women and men. Women could participate in economic activities, community life, and leadership, while spiritual roles could also be held by women and other recognized community figures.",
  },
  {
    period: "Spanish Colonial Period",
    title: "Changing Expectations",
    text: "Spanish colonial society introduced and reinforced social and religious expectations that influenced family life, education, behavior, and gender roles.",
  },
  {
    period: "American Period",
    title: "Education and Public Participation",
    text: "Expanded access to formal education and changing institutions created additional opportunities for women and men to participate in public and professional life.",
  },
  {
    period: "Modern Philippines",
    title: "Changing Gender Roles",
    text: "Contemporary Filipino society continues to experience changing expectations in education, employment, family responsibilities, leadership, media, and community participation.",
  },
];

export default function HistoryTemp() {
  return (
    <section id="history" className="section history-section">

      <div className="section-heading">
        <span className="eyebrow">
          SECTION 02
        </span>

        <h2>
          Gender Through <span>History</span>
        </h2>

        <p>
          Gender roles in Philippine society have developed
          and changed across different historical periods.
        </p>
      </div>

      <div className="timeline">

        {timeline.map((item, index) => (
          <article className="timeline-item" key={item.period}>

            <div className="timeline-number">
              0{index + 1}
            </div>

            <div className="timeline-content">

              <span>
                {item.period}
              </span>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}