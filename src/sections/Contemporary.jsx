import React from "react";

const topics = [
  {
    title: "Women in Careers",
    text: "Women increasingly participate across professional fields and contribute to economic and social development.",
  },
  {
    title: "Men in Family Care",
    text: "Family responsibilities are increasingly discussed as shared responsibilities rather than roles limited to one gender.",
  },
  {
    title: "Education",
    text: "Education provides opportunities for people to challenge traditional expectations and develop their individual goals.",
  },
  {
    title: "Technology and Media",
    text: "Digital platforms influence how gender identities, roles, and social expectations are represented and discussed.",
  },
  {
    title: "Leadership",
    text: "Leadership participation continues to involve discussions about representation, opportunity, and social expectations.",
  },
  {
    title: "Family Responsibilities",
    text: "Household work, caregiving, and financial responsibilities can be shared in different ways among family members.",
  },
  {
    title: "Media Representation",
    text: "Media can reinforce traditional gender expectations while also providing spaces for new representations.",
  },
  {
    title: "Community",
    text: "Communities influence everyday expectations while also creating opportunities for people to challenge traditional roles.",
  },
];

export default function Contemporary() {
  return (
    <section id="contemporary" className="section contemporary-section">

      <div className="section-heading">
        <span className="eyebrow">
          SECTION 03
        </span>

        <h2>
          Gender in <span>Contemporary Society</span>
        </h2>

        <p>
          Gender roles continue to develop as Filipino society
          changes through education, technology, work, family,
          media, and community life.
        </p>
      </div>

      <div className="topic-grid">

        {topics.map((topic, index) => (
          <article className="topic-card" key={topic.title}>

            <span className="topic-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3>
              {topic.title}
            </h3>

            <p>
              {topic.text}
            </p>

          </article>
        ))}

      </div>

    </section>
  );
}