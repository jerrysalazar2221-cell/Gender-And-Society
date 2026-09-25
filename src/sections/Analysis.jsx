import React from "react";

const comparisons = [
  {
    area: "Family Roles",
    past: "Roles were often strongly associated with traditional expectations.",
    present: "Responsibilities can increasingly be negotiated and shared.",
  },
  {
    area: "Education",
    past: "Access and expectations were influenced by historical social structures.",
    present: "Education provides broader opportunities for people across genders.",
  },
  {
    area: "Work",
    past: "Occupations were often associated with traditional gender expectations.",
    present: "People participate in a wider range of professional fields.",
  },
  {
    area: "Leadership",
    past: "Leadership opportunities were influenced by social and cultural expectations.",
    present: "Representation and participation continue to be discussed.",
  },
];

export default function Analysis() {
  return (
    <section id="analysis" className="section analysis-section">

      <div className="section-heading">
        <span className="eyebrow">
          SECTION 05
        </span>

        <h2>
          Critical <span>Analysis</span>
        </h2>

        <p>
          Comparing historical and contemporary experiences
          helps us see how gender expectations can change over time.
        </p>
      </div>

      <div className="comparison-wrapper">

        <table className="comparison-table">

          <thead>
            <tr>
              <th>Area</th>
              <th>Historical Perspective</th>
              <th>Contemporary Perspective</th>
            </tr>
          </thead>

          <tbody>

            {comparisons.map((item) => (
              <tr key={item.area}>
                <td>{item.area}</td>
                <td>{item.past}</td>
                <td>{item.present}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

      <div className="analysis-box">

        <span className="eyebrow">
          KEY INSIGHT
        </span>

        <h3>
          Gender roles are not static.
        </h3>

        <p>
          Gender expectations can be influenced by history,
          culture, institutions, education, media, family,
          and changing social perspectives. Examining these
          influences helps us understand both continuity
          and change in Philippine society.
        </p>

      </div>

    </section>
  );
}