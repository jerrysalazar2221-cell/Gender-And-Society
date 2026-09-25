import React from "react";

const concepts = [
  {
    icon: "◈",
    title: "Gender",
    text: "Gender refers to socially constructed roles, behaviors, expectations, and relationships associated with people in society.",
  },
  {
    icon: "◎",
    title: "Gender Roles",
    text: "Gender roles are expectations about how people should behave, work, communicate, and participate in family and society.",
  },
  {
    icon: "△",
    title: "Society",
    text: "Society influences how gender expectations are created, shared, changed, and challenged over time.",
  },
  {
    icon: "◇",
    title: "Equality",
    text: "Understanding gender helps promote respect, fairness, participation, and opportunities for people in different social roles.",
  },
];

export default function GenderRoles() {
  return (
    <section id="gender-roles" className="section basics-section">

      <div className="section-heading">
        <span className="eyebrow">
          SECTION 01
        </span>

        <h2>
          Understanding the <span>Basics</span>
        </h2>

        <p>
          Before exploring history and contemporary issues,
          it is important to understand the basic concepts
          surrounding gender and society.
        </p>
      </div>

      <div className="concept-grid">

        {concepts.map((item) => (
          <article className="concept-card" key={item.title}>

            <div className="concept-icon">
              {item.icon}
            </div>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.text}
            </p>

          </article>
        ))}

      </div>

      <div className="info-panel">

        <div>
          <span className="eyebrow">
            WHY IT MATTERS
          </span>

          <h3>
            Understanding gender helps us understand society.
          </h3>
        </div>

        <p>
          Gender expectations can influence education,
          careers, family responsibilities, leadership,
          media representation, and everyday interactions.
          Examining these expectations allows people to
          recognize how social roles develop and change.
        </p>

      </div>

    </section>
  );
}