import React, { useState } from "react";

const topics = [
  {
    number: "01",
    title: "Women in Careers",
    category: "WORK & SOCIETY",
    image: "/images/contemporary-1.jpg",
    text:
      "Women in contemporary Philippine society participate in many different careers and professional fields. They work in education, healthcare, business, technology, government, communication, science, and other industries. Greater access to education and employment has provided women with opportunities to develop professional skills and pursue career goals. Women also contribute to their families and communities while building professional identities. However, expectations about women's responsibilities at home can still affect their experiences in the workplace. The changing participation of women in different professions shows how gender roles continue to develop as society becomes more aware of equal opportunities and individual abilities.",
  },
  {
    number: "02",
    title: "Men in Family Care",
    category: "FAMILY",
    image: "/images/contemporary-2.jpg",
    text:
      "Men in contemporary Filipino families can take active roles in childcare, household responsibilities, and family decision-making. Traditional expectations often associate men with being financial providers, but many families now recognize that caring for children and managing household responsibilities can be shared. Fathers may participate in cooking, cleaning, helping children with schoolwork, and providing emotional support. These responsibilities can depend on employment, family circumstances, and individual choices. The involvement of men in family care demonstrates how traditional ideas about masculinity can change over time.",
  },
  {
    number: "03",
    title: "Education",
    category: "OPPORTUNITY",
    image: "/images/contemporary-3.jpg",
    text:
      "Education plays an important role in shaping contemporary ideas about gender in the Philippines. Schools provide opportunities for students to develop knowledge, skills, and confidence regardless of gender. Education can also expose learners to different perspectives about social roles, equality, careers, and responsibilities. Students are increasingly encouraged to pursue academic and professional goals based on their interests and abilities rather than traditional expectations. At the same time, gender stereotypes can still appear in classrooms, learning materials, and social interactions.",
  },
  {
    number: "04",
    title: "Technology & Media",
    category: "DIGITAL SOCIETY",
    image: "/images/contemporary-4.jpg",
    text:
      "Technology and digital media have become important influences on how gender roles are presented and discussed in contemporary society. Social media platforms allow people to share experiences, opinions, educational information, and perspectives about gender. Online communities can provide spaces where individuals discuss social expectations and challenge traditional stereotypes. However, digital media can also spread harmful stereotypes, unrealistic expectations, and negative representations. Users therefore need to think critically about the content they encounter online.",
  },
  {
    number: "05",
    title: "Leadership",
    category: "PARTICIPATION",
    image: "/images/contemporary-5.jpg",
    text:
      "People of different genders participate in leadership positions across Filipino organizations, communities, businesses, schools, and government institutions. Leadership opportunities allow individuals to contribute ideas, make decisions, organize activities, and serve their communities. Greater participation of women and other groups in leadership can challenge traditional assumptions about who can hold positions of authority. Social expectations and stereotypes may still influence how leaders are viewed and treated.",
  },
  {
    number: "06",
    title: "Family Responsibilities",
    category: "HOME & FAMILY",
    image: "/images/contemporary-6.jpg",
    text:
      "Family responsibilities in contemporary Filipino households can be shared in different ways depending on the needs and circumstances of each family. Household tasks may include earning income, preparing meals, cleaning, caring for children, supporting elderly family members, and making important decisions. Traditional expectations sometimes assign specific responsibilities to women or men, but many families now divide tasks based on availability, skills, and personal circumstances.",
  },
  {
    number: "07",
    title: "Media Representation",
    category: "CULTURE",
    image: "/images/contemporary-7.jpg",
    text:
      "Media representation can influence how Filipino society understands gender roles and expectations. Television programs, films, advertisements, news, social media, and online content can show different ideas about masculinity, femininity, family, careers, and relationships. Some media portrayals may reinforce traditional stereotypes by repeatedly presenting people in limited roles. Other forms of media can provide more diverse representations and show people participating in different careers, family responsibilities, and social activities.",
  },
  {
    number: "08",
    title: "Community",
    category: "SOCIAL LIFE",
    image: "/images/contemporary-8.jpg",
    text:
      "Communities continue to influence how gender roles are understood and practiced in contemporary Philippine society. Families, schools, workplaces, organizations, and local communities can shape expectations about behavior, responsibilities, and participation. At the same time, communities can also become spaces where traditional ideas are discussed and changed. People may work together through education, community programs, advocacy, and social activities to promote respect and equal opportunities.",
  },
];

export default function Contemporary() {
  const [expanded, setExpanded] = useState(null);

  const toggleTopic = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section id="contemporary" className="section contemporary-section">

      {/* HEADER */}
      <div className="section-header contemporary-header">
        <span className="section-eyebrow">
          PRESENT DAY • 2026
        </span>

        <h2>
          Contemporary <span>Roles</span>
        </h2>

        <p>
          Explore how gender roles continue to develop through
          careers, family, education, technology, leadership,
          media, and community life.
        </p>
      </div>


      {/* FEATURED — WOMEN IN CAREERS */}
      <article
        className={`contemporary-feature ${
          expanded === 0 ? "expanded" : ""
        }`}
        onClick={() => toggleTopic(0)}
      >

        <div className="feature-image">
          <img
            src={topics[0].image}
            alt={topics[0].title}
          />
        </div>

        <div className="feature-content">

          <div className="feature-top">
            <span className="feature-number">
              {topics[0].number}
            </span>

            <span className="topic-category">
              {topics[0].category}
            </span>
          </div>

          <h3>{topics[0].title}</h3>

          <p>{topics[0].text}</p>

          <span className="topic-action">
            {expanded === 0
              ? "COLLAPSE ↑"
              : "EXPLORE TOPIC →"}
          </span>

        </div>
      </article>


      {/* OTHER 7 TOPICS */}
      <div className="contemporary-grid">

        {topics.slice(1).map((topic, index) => {

          const actualIndex = index + 1;

          return (
            <article
              key={topic.title}
              className={`contemporary-card ${
                expanded === actualIndex
                  ? "expanded"
                  : ""
              }`}
              onClick={() => toggleTopic(actualIndex)}
            >

              <div className="contemporary-card-image">
                <img
                  src={topic.image}
                  alt={topic.title}
                />
              </div>

              <div className="card-content">

                <div className="card-top">

                  <span className="topic-number">
                    {topic.number}
                  </span>

                  <span className="topic-category">
                    {topic.category}
                  </span>

                </div>

                <h3>{topic.title}</h3>

                <p>{topic.text}</p>

                <span className="topic-action">
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
      <div className="contemporary-statement">

        <span className="section-eyebrow">
          CONTINUING CHANGE
        </span>

        <h3>
          Gender roles continue to evolve.
        </h3>

        <p>
          Contemporary Filipino society continues to experience
          changes in education, employment, family life,
          technology, culture, and community participation.
        </p>

      </div>

    </section>
  );
}