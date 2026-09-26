import React from "react";

const members = [
  {
    number: "01",
    name: "Palomeras, Jerson Magistrado",
    image: "/images/image1.jpg",
    message: "KEEP MOVING FORWARD.",
  },
  {
    number: "02",
    name: "Rocima, Sophia Romo",
    image: "/images/image2.jpg",
    message: "BELIEVE IN YOURSELF.",
  },
  {
    number: "03",
    name: "Rontos, Vince Pampanga",
    image: "/images/image3.jpg",
    message: "NEVER STOP LEARNING.",
  },
  {
    number: "04",
    name: "Salazar, Jerry Monte",
    image: "/images/image4.jpg",
    message: "ONE MISTAKE CHANGES EVERYTHING.",
  },
  {
    number: "05",
    name: "Salor, Stephine Carl Reoyan",
    image: "/images/image5.jpg",
    message: "EVERY CHOICE MATTERS.",
  },
  {
    number: "06",
    name: "Sameran, Kristel Anne Mae Tarrayo",
    image: "/images/image6.jpg",
    message: "MAKE EVERY MOMENT COUNT.",
  },
  {
    number: "07",
    name: "Samporna, Mujahed Abedin",
    image: "/images/image7.jpg",
    message: "DREAM BIG. WORK HARD.",
  },
];

export default function GroupMembers() {
  return (
    <section id="group-members" className="section group-section">

      <div className="section-header">

        <span className="section-eyebrow">
          OUR TEAM • BSIT 3C
        </span>

        <h2>
          Meet Our <span>Group</span>
        </h2>

        <p>
          The students behind the Beyond / Expectations
          Gender and Society project.
        </p>

      </div>


      <div className="members-gallery">

        {members.map((member) => (
          <article
            className="group-gallery-card"
            key={member.number}
          >

            {/* PHOTO */}

            <div className="group-gallery-image">

              <img
                src={member.image}
                alt={member.name}
              />

              <span className="group-gallery-number">
                {member.number}
              </span>

            </div>


            {/* INFORMATION */}

            <div className="group-gallery-content">

              <span className="group-gallery-category">
                GROUP MEMBER
              </span>

              <h3>
                {member.name}
              </h3>

              <p>
                Bachelor of Science in Information Technology
              </p>


              <div className="group-gallery-details">

                <span>
                  3rd Year
                </span>

                <span>
                  BSIT 3C
                </span>

              </div>


              {/* MOTIVATIONAL TEXT */}

              <span className="group-gallery-arrow">
                {member.message}
              </span>

            </div>

          </article>
        ))}

      </div>


      {/* TEAM MESSAGE */}

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