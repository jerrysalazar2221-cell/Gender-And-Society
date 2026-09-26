import React, { useState } from "react";

const genderRoles = [
  {
    number: "01",
    category: "FAMILY & HOME",
    title: "Roles in the Family",
    image: "/images/image1.jpg",
    text:
      "Traditional expectations have often assigned women greater responsibility for household work, caregiving, and raising children. Men have often been expected to provide financial support and take leadership roles within the household. These expectations were influenced by culture, family traditions, and social beliefs about what women and men should do. However, family roles can change over time. Today, many Filipino families share household responsibilities, childcare, and financial decisions, allowing both women and men to contribute to the well-being of the family.",
  },
  {
    number: "02",
    category: "EDUCATION",
    title: "Gender and Education",
    image: "/images/image2.jpg",
    text:
      "Gender expectations have also influenced education and the opportunities available to women and men. In traditional settings, certain areas of study or careers could be viewed as more appropriate for one gender. Education provides people with opportunities to develop knowledge, skills, and confidence. Today, Filipino students can pursue different courses and careers based on their interests and abilities. Greater access to education has also helped challenge stereotypes and encouraged people to recognize that learning and professional development should be available to everyone.",
  },
  {
    number: "03",
    category: "WORK & CAREERS",
    title: "Gender in the Workplace",
    image: "/images/image3.jpg",
    text:
      "Gender expectations have influenced the types of work that women and men were encouraged to pursue. Men were often associated with leadership, physical labor, and providing financial support, while women were commonly connected with caregiving, teaching, and household responsibilities. These ideas could affect people's career choices and opportunities. Today, women and men participate in many different professions, including fields that were traditionally associated with another gender. Skills, education, interests, and experience increasingly influence career choices rather than traditional gender expectations.",
  },
  {
    number: "04",
    category: "SOCIETY",
    title: "Changing Expectations",
    image: "/images/image4.jpg",
    text:
      "Gender roles are not fixed and can change as society changes. Education, technology, media, employment, and changing family structures have influenced how Filipino people understand gender expectations. Traditional ideas about how women and men should behave are increasingly being questioned. People today have more opportunities to express their interests, develop careers, and participate in different areas of society. Understanding these changes helps us recognize stereotypes and appreciate that individuals can have different abilities, responsibilities, experiences, and goals regardless of gender.",
  },
];

export default function GenderRoles() {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (number) => {
    setOpenCard(openCard === number ? null : number);
  };

  return (
    <section id="gender-roles" className="section gender-roles-section">

      <div className="section-header">
        <span className="section-eyebrow">
          GENDER & SOCIETY
        </span>

        <h2>
          Understanding <span>Gender Roles</span>
        </h2>

        <p>
          Gender roles are expectations about how people are
          expected to behave, communicate, work, and participate
          in society based on gender.
        </p>
      </div>

      <div className="gender-roles-list">

        {genderRoles.map((item) => {
          const isOpen = openCard === item.number;

          return (
            <article
              className={`gender-role-card ${
                isOpen ? "open" : ""
              }`}
              key={item.number}
            >

              {/* CARD HEADER */}
              <button
                className="gender-role-header"
                onClick={() => toggleCard(item.number)}
              >

                <div className="gender-role-number">
                  {item.number}
                </div>

                <div className="gender-role-heading">

                  <span className="gender-role-category">
                    {item.category}
                  </span>

                  <h3>{item.title}</h3>

                </div>

                <div className="gender-role-toggle">
                  {isOpen ? "−" : "+"}
                </div>

              </button>

              {/* EXPANDED CONTENT */}
              <div
                className={`gender-role-content ${
                  isOpen ? "show" : ""
                }`}
              >

                <div className="gender-role-expanded">

                  <div className="gender-role-image">
                    <img
                      src={item.image}
                      alt={item.title}
                    />
                  </div>

                  <div className="gender-role-description">
                    <p>{item.text}</p>
                  </div>

                </div>

              </div>

            </article>
          );
        })}

      </div>

    </section>
  );
}