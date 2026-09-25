import React from "react";

const members = [
  {
    name: "Palomeras, Jerson Magistrado",
    image: "/images/member1.jpg",
  },
  {
    name: "Rocima, Sophia Romo",
    image: "/images/member2.jpg",
  },
  {
    name: "Rontos, Vince Pampanga",
    image: "/images/member3.jpg",
  },
  {
    name: "Salazar, Jerry Monte",
    image: "/images/member4.jpg",
  },
  {
    name: "Salor, Stephine Carl Reoyan",
    image: "/images/member5.jpg",
  },
  {
    name: "Sameran, Kristel Anne Mae Tarrayo",
    image: "/images/member6.jpg",
  },
  {
    name: "Samporna, Mujahed Abedin",
    image: "/images/member7.jpg",
  },
];

export default function GroupMembers() {
  return (
    <section id="group-members" className="section group-section">

      <div className="section-header">
        <span className="section-eyebrow">
          OUR TEAM
        </span>

        <h2>
          Meet Our <span>Group</span>
        </h2>

        <p>
          Meet the students behind the Beyond / Expectations
          Gender and Society project.
        </p>
      </div>

      <div className="members-grid">

        {members.map((member, index) => (
          <article className="member-card" key={member.name}>

            <div className="member-photo">

              <img
                src={member.image}
                alt={member.name}
              />

              <div className="member-number">
                {index + 1}
              </div>

            </div>

            <div className="member-info">

              <span className="member-tag">
                GROUP MEMBER
              </span>

              <h3>
                {member.name}
              </h3>

              <p>
                🎓 Bachelor of Science in
                Information Technology
              </p>

              <div className="member-details">

                <span className="member-detail">
                  📚 3rd Year
                </span>

                <span className="member-detail">
                  🏫 BSIT 3C
                </span>

              </div>

            </div>

          </article>
        ))}

      </div>

      <div className="team-message">

        <span className="section-eyebrow">
          BEYOND / EXPECTATIONS
        </span>

        <h3>
          Seven minds. One project.
        </h3>

        <p>
          Our group worked together to explore gender roles,
          Philippine history, contemporary experiences,
          social issues, and the importance of understanding
          gender in Philippine society.
        </p>

      </div>

    </section>
  );
}