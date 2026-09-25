import React from "react";

const issues = [
  {
    title: "Gender Stereotypes",
    text: "Stereotypes can create expectations about what people should study, do for work, or how they should behave.",
  },
  {
    title: "Unequal Opportunities",
    text: "Social expectations can influence access to opportunities and participation in different areas of society.",
  },
  {
    title: "Workplace Expectations",
    text: "Gender can influence expectations surrounding careers, leadership, workplace behavior, and responsibilities.",
  },
  {
    title: "Family Roles",
    text: "Traditional expectations may influence how caregiving, household work, and financial responsibilities are divided.",
  },
  {
    title: "Media Influence",
    text: "Media representations can shape ideas about masculinity, femininity, relationships, and social behavior.",
  },
  {
    title: "Changing Perspectives",
    text: "New generations continue to discuss and reconsider traditional expectations surrounding gender roles.",
  },
];

export default function Issues() {
  return (
    <section id="issues" className="section issues-section">

      <div className="section-heading">
        <span className="eyebrow">
          SECTION 04
        </span>

        <h2>
          Current <span>Issues</span>
        </h2>

        <p>
          Understanding gender also means examining the
          challenges and expectations that continue to affect
          people and communities.
        </p>
      </div>

      <div className="issue-grid">

        {issues.map((issue, index) => (
          <article className="issue-card" key={issue.title}>

            <div className="issue-number">
              0{index + 1}
            </div>

            <h3>
              {issue.title}
            </h3>

            <p>
              {issue.text}
            </p>

          </article>
        ))}

      </div>

    </section>
  );
}