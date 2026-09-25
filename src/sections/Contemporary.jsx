
import React from "react";

const topics = [
  {
    title: "Women in Careers",
    text:
      "Women participate across professional fields and continue to contribute to different areas of the workforce."
  },
  {
    title: "Men in Family Care",
    text:
      "Men can take active roles in childcare, household responsibilities, and family decision-making."
  },
  {
    title: "Education",
    text:
      "Education provides opportunities for people to challenge traditional expectations and pursue different goals."
  },
  {
    title: "Technology and Media",
    text:
      "Digital platforms and media influence how gender roles are represented and discussed."
  },
  {
    title: "Leadership",
    text:
      "People of different genders participate in leadership positions across organizations and communities."
  },
  {
    title: "Family Responsibilities",
    text:
      "Modern families increasingly share responsibilities based on circumstances, abilities, and preferences."
  },
  {
    title: "Media Representation",
    text:
      "Media can reinforce traditional stereotypes but can also present diverse experiences and identities."
  },
  {
    title: "Community",
    text:
      "Communities continue to shape and respond to changing ideas about gender and social participation."
  },
];

export default function Contemporary() {
  return (
    <section
      id="contemporary"
      className="section contemporary-section"
    >

      <div className="section-header">
        <span className="section-eyebrow">
          PRESENT DAY
        </span>

        <h2>
          Contemporary <span>Roles</span>
        </h2>

        <p>
          Gender roles continue to change as Filipino society
          develops and responds to new social realities.
        </p>
      </div>

      <div className="contemporary-grid">
        {topics.map((topic) => (
          <article
            className="contemporary-card"
            key={topic.title}
          >
            <h3>{topic.title}</h3>
            <p>{topic.text}</p>
          </article>
        ))}
      </div>

    </section>
  );
}