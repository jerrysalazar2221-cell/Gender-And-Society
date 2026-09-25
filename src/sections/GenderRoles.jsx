import React from "react";

const roles = [
  {
    title: "Family Roles",
    text:
      "Traditional expectations often assign caregiving and household responsibilities based on gender."
  },
  {
    title: "Workplace Roles",
    text:
      "Gender can influence career expectations, opportunities, leadership, and workplace experiences."
  },
  {
    title: "Social Roles",
    text:
      "Society can shape how people are expected to behave, communicate, and participate in their communities."
  },
  {
    title: "Cultural Roles",
    text:
      "Culture and traditions influence ideas about masculinity, femininity, family, and responsibility."
  },
];

export default function GenderRoles() {
  return (
    <section id="gender-roles" className="section gender-section">

      <div className="section-header">
        <span className="section-eyebrow">
          UNDERSTANDING GENDER
        </span>

        <h2>
          Gender <span>Roles</span>
        </h2>

        <p>
          Gender roles are expectations about how people
          should behave and participate in society.
        </p>
      </div>

      <div className="roles-grid">
        {roles.map((role) => (
          <article className="role-card" key={role.title}>
            <h3>{role.title}</h3>
            <p>{role.text}</p>
          </article>
        ))}
      </div>

      <div className="roles-importance">
        <h3>Why It Matters</h3>

        <p>
          Understanding gender roles helps us examine how
          social expectations influence people's experiences,
          opportunities, responsibilities, and relationships.
        </p>
      </div>

    </section>
  );
}