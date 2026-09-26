import React from "react";

const comparisons = [
  {
    topic: "Family",
    past: "Traditional expectations often assigned women more household and caregiving responsibilities.",
    present:
      "Some families increasingly share household and caregiving responsibilities.",
  },
  {
    topic: "Work",
    past: "Certain occupations were strongly associated with particular genders.",
    present:
      "Women and men participate in many different professions.",
  },
  {
    topic: "Education",
    past:
      "Educational opportunities were more limited for many people, especially women in earlier periods.",
    present:
      "Women and men have broad access to formal education, although inequalities can still exist.",
  },
  {
    topic: "Leadership",
    past:
      "Leadership was often influenced by traditional social hierarchies, largely favoring men.",
    present:
      "Women and men participate in leadership positions in various sectors of society.",
  },
  {
    topic: "Media",
    past:
      "Traditional portrayals often emphasized conventional masculine and feminine roles.",
    present:
      "Media includes more diverse representations, although stereotypes remain.",
  },
];

export default function Analysis() {
  return (
    <section id="analysis" className="section analysis-section">

      <div className="section-header">
        <span className="section-eyebrow">
          PAST VS. PRESENT
        </span>

        <h2>
          Gender Roles <span>Through Change</span>
        </h2>

        <p>
          Comparing different periods helps us understand
          changes in Philippine gender roles and identify
          challenges that continue today.
        </p>
      </div>

      {/* COMPARISON TABLE */}

      <div className="analysis-table-wrapper">

        <table className="analysis-table">

          <thead>
            <tr>
              <th>Topic</th>
              <th>Historical Perspective</th>
              <th>Contemporary Perspective</th>
            </tr>
          </thead>

          <tbody>

            {comparisons.map((row) => (
              <tr key={row.topic}>

                <td className="analysis-topic">
                  {row.topic}
                </td>

                <td>
                  {row.past}
                </td>

                <td>
                  {row.present}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* CRITICAL ANALYSIS */}

      <div className="critical-analysis">

        <div className="critical-analysis-title">
          <span>🔍</span>

          <h3>
            Our Critical Analysis
          </h3>
        </div>

        <p>
          Philippine gender roles have changed significantly
          over time. Education, economic development, political
          participation, social movements, and changing family
          structures have created more opportunities for women
          and men.
        </p>

        <p>
          However, progress does not mean that all gender
          inequalities have disappeared. Stereotypes,
          discrimination, unequal responsibilities, and
          differences in representation may still affect people.
          Understanding these continuing challenges is important
          in creating a more respectful and inclusive society.
        </p>

      </div>

    </section>
  );
}