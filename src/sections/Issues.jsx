import React, { useState } from "react";

const issues = [
  {
    number: "01",
    title: "Gender Inequality",
    category: "EQUALITY",
    image: "/images/issues-1.jpg",
    text:
      "Unequal access to resources, opportunities, decision-making, and social participation can affect individuals and communities. Gender inequality can influence education, employment, family responsibilities, leadership, and participation in society.",
  },
  {
    number: "02",
    title: "Gender Stereotypes",
    category: "SOCIAL EXPECTATIONS",
    image: "/images/issues-2.jpg",
    text:
      "People may experience expectations about what men and women should do based only on gender. These stereotypes can influence how people are expected to behave, what careers they pursue, and how responsibilities are divided.",
  },
  {
    number: "03",
    title: "Discrimination",
    category: "FAIR TREATMENT",
    image: "/images/issues-3.jpg",
    text:
      "Gender discrimination can occur when people receive unfair treatment because of their gender. Fair treatment and respect are important in schools, workplaces, families, communities, and other areas of society.",
  },
  {
    number: "04",
    title: "Gender-Based Violence",
    category: "SAFETY & RESPECT",
    image: "/images/issues-4.jpg",
    text:
      "Gender-based violence is an important social issue connected to unequal power, harmful expectations, and discrimination. Understanding the issue can help communities recognize the importance of safety, respect, dignity, and protection from violence.",
  },
  {
    number: "05",
    title: "Unequal Opportunities",
    category: "OPPORTUNITY",
    image: "/images/issues-5.jpg",
    text:
      "People may experience differences in access to education, employment, leadership, resources, or participation. Equal opportunities allow individuals to develop their abilities and pursue their goals without being limited by gender expectations.",
  },
  {
    number: "06",
    title: "Workplace Inequality",
    category: "WORKPLACE",
    image: "/images/issues-6.jpg",
    text:
      "Fair treatment, equal opportunities, safe workplaces, and respect are important for workers. Gender expectations can influence hiring, career development, workplace responsibilities, and how employees are treated.",
  },
  {
    number: "07",
    title: "Media Stereotypes",
    category: "MEDIA & CULTURE",
    image: "/images/issues-7.jpg",
    text:
      "Media portrayals can reinforce stereotypes or help challenge traditional ideas about gender. Television, films, advertisements, news, and social media can influence how people understand masculinity, femininity, careers, relationships, and responsibilities.",
  },
  {
    number: "08",
    title: "Social Expectations",
    category: "SOCIETY",
    image: "/images/issues-8.jpg",
    text:
      "Traditional expectations can influence how people are expected to behave and what responsibilities they are expected to take. Understanding these expectations helps people recognize that gender should not limit a person's ability to learn, work, lead, care for others, or pursue their goals.",
  },
];

export default function Issues() {
  const [expanded, setExpanded] = useState(null);

  const toggleIssue = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section id="issues" className="section issues-section">

      {/* HEADER */}
      <div className="section-header issues-header">
        <span className="section-eyebrow">
          CHALLENGES • SOCIETY
        </span>

        <h2>
          Gender Issues <span>& Realities</span>
        </h2>

        <p>
          Understanding gender issues allows us to identify
          stereotypes, discrimination, unequal opportunities,
          and other challenges experienced in society.
        </p>
      </div>

      {/* FEATURED ISSUE */}
      <article
        className={`issues-feature ${
          expanded === 0 ? "expanded" : ""
        }`}
        onClick={() => toggleIssue(0)}
      >
        <div className="issue-feature-image">
          <img
            src={issues[0].image}
            alt={issues[0].title}
          />
        </div>

        <div className="issue-feature-content">

          <div className="issue-feature-top">
            <span className="issue-feature-number">
              {issues[0].number}
            </span>

            <span className="issue-category">
              {issues[0].category}
            </span>
          </div>

          <h3>{issues[0].title}</h3>

          <p>{issues[0].text}</p>

          <span className="issue-action">
            {expanded === 0
              ? "COLLAPSE ↑"
              : "EXPLORE ISSUE →"}
          </span>

        </div>
      </article>

      {/* OTHER ISSUES */}
      <div className="issues-grid">

        {issues.slice(1).map((issue, index) => {

          const actualIndex = index + 1;

          return (
            <article
              key={issue.title}
              className={`issue-card ${
                expanded === actualIndex
                  ? "expanded"
                  : ""
              }`}
              onClick={() => toggleIssue(actualIndex)}
            >

              <div className="issue-card-image">
                <img
                  src={issue.image}
                  alt={issue.title}
                />
              </div>

              <div className="issue-card-content">

                <div className="issue-card-top">

                  <span className="issue-number">
                    {issue.number}
                  </span>

                  <span className="issue-category">
                    {issue.category}
                  </span>

                </div>

                <h3>{issue.title}</h3>

                <p>{issue.text}</p>

                <span className="issue-action">
                  {expanded === actualIndex
                    ? "COLLAPSE ↑"
                    : "READ MORE →"}
                </span>

              </div>

            </article>
          );
        })}

      </div>

      {/* BOTTOM MESSAGE */}
      <div className="issues-statement">

        <span className="section-eyebrow">
          UNDERSTANDING THE ISSUE
        </span>

        <h3>
          Equality Starts With Understanding.
        </h3>

        <p>
          Gender should not limit a person's ability to learn,
          work, lead, care for others, or pursue their goals.
          Understanding these issues is an important step
          toward a more respectful and inclusive society.
        </p>

      </div>

    </section>
  );
}