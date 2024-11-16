import React from 'react'

const TeamSection = () => {
  return (
    <>
  <section className="team-section-10 pt-130 pb-130">
    <div className="section-heading text-center">
      <h4
        className="sub-heading"
        data-text-animation="fade-in"
        data-duration="1.5"
      >
        Team Members
      </h4>
      <h2
        className="section-title"
        data-text-animation="fade-in-right"
        data-split="char"
        data-duration="0.6"
        data-stagger="0.03"
      >
        Meet Our Professionals Team
      </h2>
    </div>
    <div className="team-item-wrap fade-wrapper">
      <div className="team-item-4 fade-top">
        <div className="team-thumb">
          <img src="assets/img/team/team-2.png" alt="team" />
        </div>
        <div className="team-content">
          <h3 className="title">
            <a href="team-details.html">Charlotte Amitina</a>
          </h3>
          <span>Manager</span>
        </div>
      </div>
      <div className="team-item-4 fade-top">
        <div className="team-thumb">
          <img src="assets/img/team/team-3.png" alt="team" />
        </div>
        <div className="team-content">
          <h3 className="title">
            <a href="team-details.html">Sarah Frandy</a>
          </h3>
          <span>Manager</span>
        </div>
      </div>
      <div className="team-item-4 fade-top">
        <div className="team-thumb">
          <img src="assets/img/team/team-4.png" alt="team" />
        </div>
        <div className="team-content">
          <h3 className="title">
            <a href="team-details.html">Hannah Chloe</a>
          </h3>
          <span>Manager</span>
        </div>
      </div>
      <div className="team-item-4 fade-top">
        <div className="team-thumb">
          <img src="assets/img/team/team-5.png" alt="team" />
        </div>
        <div className="team-content">
          <h3 className="title">
            <a href="team-details.html">William Edward</a>
          </h3>
          <span>Manager</span>
        </div>
      </div>
      <div className="team-item-4 fade-top">
        <div className="team-thumb">
          <img src="assets/img/team/team-6.png" alt="team" />
        </div>
        <div className="team-content">
          <h3 className="title">
            <a href="team-details.html">Amelia Clark</a>
          </h3>
          <span>Manager</span>
        </div>
      </div>
    </div>
  </section>
  {/* ./ team-section */}
</>

  )
}

export default TeamSection