import React, { useState } from "react";

const reflections = {
  "Group Member 1":
    "I learned that gender roles can change depending on history, culture, family, education, and society.",
  "Group Member 2":
    "I realized that stereotypes can affect the way people see themselves and others.",
  "Group Member 3":
    "I learned that understanding different experiences can help create a more respectful society.",
  "Group Member 4":
    "I learned that gender expectations are not always fixed and can change over time.",
};

export default function Reflection() {
  const [selected, setSelected] = useState("Group Member 1");

  return (
    <section id="reflection" className="section">

      <div className="section-header">

        <span className="section-eyebrow">
          07 • REFLECTION
        </span>

        <h2>
          What We
          <span> Learned</span>
        </h2>

        <p>
          Reflection allows us to connect the concepts we studied
          with our understanding of society.
        </p>

      </div>

      <div className="reflection-layout">

        <div className="reflection-select">

          <label>
            Select Reflection
          </label>

          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            {Object.keys(reflections).map((member) => (
              <option key={member} value={member}>
                {member}
              </option>
            ))}
          </select>

        </div>

        <div className="reflection-card">

          <span className="section-eyebrow">
            PERSONAL REFLECTION
          </span>

          <h3>{selected}</h3>

          <p>
            {reflections[selected]}
          </p>

        </div>

      </div>

      <div className="reflection-questions">

        <div>
          <span>01</span>
          <h3>What did we learn?</h3>
          <p>
            Gender roles are influenced by culture, history,
            family, education, and social expectations.
          </p>
        </div>

        <div>
          <span>02</span>
          <h3>What surprised us?</h3>
          <p>
            Social expectations can change as communities and
            societies develop.
          </p>
        </div>

        <div>
          <span>03</span>
          <h3>Why does it matter?</h3>
          <p>
            Understanding gender can help people think critically
            about stereotypes, opportunities, and equality.
          </p>
        </div>

      </div>

    </section>
  );
}