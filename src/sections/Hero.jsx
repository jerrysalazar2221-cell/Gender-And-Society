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
    <section id="group-members" className="group-section">

      <div className="section-heading">
        <span className="eyebrow">
          OUR TEAM
        </span>

        <h2>
          Meet Our <span>Group</span>
        </h2>

        <p>
          The students behind the Beyond / Expectations project.
        </p>
      </div>

      <div className="members-grid">

        {members.map((member, index) => (
          <article className="member-card" key={member.name}>

            <div className="member-photo-area">

              <div className="member-photo-ring">

                <div className="member-photo-fallback">
                  {member.name
                    .split(" ")
                    .slice(0, 2)
                    .map((word) => word[0])
                    .join("")
                    .toUpperCase()}
                </div>

                <img
                  src={member.image}
                  alt={member.name}
                  className="member-photo"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

              </div>

              <div className="member-number">
                {index + 1}
              </div>

            </div>

            <div className="member-content">

              <span className="member-label">
                GROUP MEMBER
              </span>

              <h3>
                {member.name}
              </h3>

              <div className="member-course">
                <span>🎓</span>

                <span>
                  Bachelor of Science in
                  <br />
                  Information Technology
                </span>
              </div>

              <div className="member-tags">
                <span>📚 3rd Year</span>
                <span>🏫 BSIT 3C</span>
              </div>

            </div>

          </article>
        ))}

      </div>

      <div className="team-message">

        <span>
          BEYOND / EXPECTATIONS
        </span>

        <h3>
          Seven minds. One project.
        </h3>

        <p>
          Together, we explored gender roles, history,
          contemporary experiences, social issues, and
          the importance of understanding gender in
          Philippine society.
        </p>

      </div>

    </section>
  );
}