import React, { useState } from "react";

const history = [
  {
    period: "Pre-Colonial",
    title: "Pre-Colonial Philippines",
    image: "/images/pre-colonial.jpg",
    text:
      "Before Spanish colonization, Filipino communities had diverse ways of organizing their societies and assigning responsibilities to men and women. Women participated in activities such as farming, trading, household management, and spiritual practices, while men commonly took part in farming, fishing, hunting, protection, and community leadership. However, these responsibilities were not always strictly separated, as roles could overlap depending on the community, social status, and individual abilities. Some women held important positions as spiritual leaders and community figures. This period shows that gender roles in the Philippines were diverse and influenced by local traditions, culture, community needs, and social structures.",
  },

  {
    period: "Spanish Period",
    title: "Spanish Colonial Period",
    image: "/images/spanish-period.jpg",
    text:
      "During the Spanish colonial period, gender roles were influenced by Spanish culture, Catholic religion, family traditions, and social expectations. Women were commonly expected to focus on household responsibilities, child-rearing, and maintaining family values. Men were generally viewed as providers and representatives of the household. Religious teachings also influenced ideas about appropriate behavior for women and men. Access to education and public activities was more limited for many women compared with men. These expectations shaped family and community life for generations. However, Filipino women also continued to contribute to economic, cultural, religious, and community activities despite these social limitations.",
  },

  {
    period: "American Period",
    title: "American Colonial Period",
    image: "/images/american-period.jpg",
    text:
      "During the American colonial period, changes in education, government, and employment created new opportunities for Filipino women and men. The expansion of public education allowed more girls and women to receive formal schooling. Women gradually became more involved in professions, teaching, community organizations, and public activities. At the same time, traditional expectations about family responsibilities and domestic roles continued to influence society. Men remained strongly associated with employment and providing for their families. The period therefore brought both changes and continuities in gender roles. Education became an important factor in changing how Filipino society understood the abilities and responsibilities of women and men.",
  },

  {
    period: "Modern",
    title: "Modern Philippines",
    image: "/images/modern-philippines.jpg",
    text:
      "In the modern Philippines, gender roles continue to change as society becomes more connected through education, technology, media, and employment. Women and men increasingly participate in different professions, leadership positions, businesses, education, and community activities. Families may also share responsibilities such as household work, childcare, and financial support. Despite these changes, traditional expectations about masculinity and femininity can still influence people's experiences and opportunities. Issues such as gender stereotypes, unequal responsibilities, discrimination, and representation remain part of social discussions. Modern Filipino society continues to develop its understanding of gender equality while recognizing the importance of respecting different experiences, abilities, and choices.",
  },
];

export default function History() {
  const [expanded, setExpanded] = useState(null);

  const toggleCard = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section id="history" className="section history-section">

      {/* SECTION HEADER */}
      <div className="section-header">

        <span className="section-eyebrow">
          FROM PAST TO PRESENT
        </span>

        <h2>
          Gender Through <span>History</span>
        </h2>

        <p>
          Gender expectations in the Philippines have
          developed alongside historical and social changes.
        </p>

      </div>

      {/* HISTORY CARDS */}
      <div className="history-timeline">

        {history.map((item, index) => (

          <article
            className={`history-item ${
              expanded === index ? "expanded" : ""
            }`}
            key={item.period}
          >

            {/* NUMBER */}
            <div className="history-year">
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* CLICKABLE CARD */}
            <div
              className="history-content"
              onClick={() => toggleCard(index)}
            >

              {/* IMAGE */}
              <div className="history-image-wrapper">

                <img
                  src={item.image}
                  alt={item.title}
                  className="history-image"
                />

              </div>

              {/* TEXT */}
              <div className="history-text">

                <span className="section-eyebrow">
                  {item.period}
                </span>

                <h3>
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p>
                  {item.text}
                </p>

                {/* CLICK INDICATOR */}
                <span className="history-click">
                  {expanded === index
                    ? "CLICK TO COLLAPSE ↑"
                    : "CLICK TO EXPAND ↓"}
                </span>

              </div>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}