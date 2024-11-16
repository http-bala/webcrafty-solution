import React from 'react'

const ProjectSection = () => {
  return (
    <>
  <section className="project-section overflow-hidden">
    <div className="container">
      <div className="project-top heading-space fade-wrapper">
        <div className="section-heading mb-0">
          <h4
            className="sub-heading"
            data-text-animation="fade-in"
            data-duration="1.5"
          >
            Recent Projects
          </h4>
          <h2
            className="section-title"
            data-text-animation="fade-in-right"
            data-split="char"
            data-duration="0.6"
            data-stagger="0.03"
          >
            No one can predict which issues <br /> might come their way
          </h2>
        </div>
        <div className="project-top-btn fade-top">
          <a href="contact.html" className="rr-primary-btn">
            Get a Quote
          </a>
        </div>
      </div>
      <div className="project-carousel-3 swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="project-box-5">
              <div className="project-img">
                <img
                  src="assets/img/project/project-img-10.png"
                  alt="project"
                />
              </div>
              <div className="project-content-wrap">
                <div className="project-content">
                  <span>Digital - Design</span>
                  <h3 className="title">
                    <a href="project-details.html">
                      UI/UX Design &amp; Website <br /> Development
                    </a>
                  </h3>
                  <div className="project-btn">
                    <a href="project-details.html">
                      <i className="fa-sharp fa-regular fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="project-box-5">
              <div className="project-img">
                <img src="assets/img/project/project-img-9.png" alt="project" />
              </div>
              <div className="project-content-wrap">
                <div className="project-content">
                  <span>Digital - Design</span>
                  <h3 className="title">
                    <a href="project-details.html">
                      UI/UX Design &amp; Website <br /> Development
                    </a>
                  </h3>
                  <div className="project-btn">
                    <a href="project-details.html">
                      <i className="fa-sharp fa-regular fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="project-box-5">
              <div className="project-img">
                <img
                  src="assets/img/project/project-img-11.png"
                  alt="project"
                />
              </div>
              <div className="project-content-wrap">
                <div className="project-content">
                  <span>Digital - Design</span>
                  <h3 className="title">
                    <a href="project-details.html">
                      UI/UX Design &amp; Website <br /> Development
                    </a>
                  </h3>
                  <div className="project-btn">
                    <a href="project-details.html">
                      <i className="fa-sharp fa-regular fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ./ project-section */}
</>

  )
}

export default ProjectSection