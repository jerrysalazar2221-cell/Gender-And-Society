import React from "react";

const reflections = [
  {
    number: "01",
    title: "Understanding Gender",
    text:
      "Learning about gender helped us understand that many expectations placed on women and men are influenced by society, culture, and history.",
  },
  {
    number: "02",
    title: "Recognizing Stereotypes",
    text:
      "We realized that gender stereotypes can affect how people are treated, the opportunities they receive, and the choices they feel comfortable making.",
  },
  {
    number: "03",
    title: "Seeing Change",
    text:
      "Philippine society has changed over time, creating more opportunities for people to participate in education, employment, leadership, and other areas.",
  },
  {
    number: "04",
    title: "Moving Forward",
    text:
      "Understanding gender issues encourages us to respect different experiences and support a society where people are not limited by traditional expectations.",
  },
];

export default function Reflection() {
  return (
    <section id="reflection" className="section reflection-section">

      <div className="section-header">
        <span className="section-eyebrow">
          OUR PERSPECTIVE
        </span>

        <h2>
          What We <span>Learned</span>
        </h2>

        <p>
          Reflecting on gender and society helped us understand
          how expectations, experiences, and opportunities can
          change over time.
        </p>
      </div>

      <div className="reflection-grid">

        {reflections.map((item) => (
          <article
            className="reflection-card"
            key={item.number}
          >

            <div className="reflection-number">
              {item.number}
            </div>

            <div className="reflection-content">

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

      <div className="reflection-quote">

        <span className="section-eyebrow">
          BEYOND / EXPECTATIONS
        </span>

        <h3>
          “Understanding creates the possibility for change.”
        </h3>

        <p>
          Our reflection reminds us that learning about gender
          is not only about understanding the past. It is also
          about becoming more aware of the experiences of others
          and thinking about how we can contribute to a more
          respectful and inclusive society.
        </p>

      </div>

    </section>
  );
}