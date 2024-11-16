import React from 'react'
import { assets } from '../assets/assets'

const AboutSection = () => {
  return (
    <>
    <section className="about-section-10 pb-130 overflow-hidden">
      <div className="container">
        <div className="row gy-lg-0 gy-4">
          <div className="col-lg-6">
            <div className="about-content-10 about-content-7 fade-wrapper">
              <div className="section-heading mb-40">
                <h4
                  className="sub-heading after-none"
                  data-text-animation="fade-in"
                  data-duration="1.5"
                >
                  About Our Company
                </h4>
                <h2
                  className="section-title"
                  data-text-animation="fade-in-right"
                  data-split="char"
                  data-duration="0.6"
                  data-stagger="0.03"
                >
                  Connecting People And <br />
                  Build Technology
                </h2>
              </div>
              <div className="about-exp-box fade-top">
                <h3 className="year">25</h3>
                <p>
                  <span>Years Experience</span>Lorem ipsum dolor sit amet
                  consectur adipiscing elit eiusmod ex tempor incididunt labore
                  dolore magna aliquaenim ad minim veniam quis nostrud
                  exercitation laboris.
                </p>
              </div>
              <div className="about-list-wrap fade-top">
                <ul className="about-list">
                  <li>
                    <i className="fa-regular fa-circle-check" />
                    Emergency Solutions Anytime
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check" />
                    Emergency Solutions Anytime
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check" />
                    Affordable price upto 2 years
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check" />
                    Reliable &amp; Experienced Team
                  </li>
                </ul>
              </div>
              <div className="about-btn fade-top">
                <a href="contact.html" className="rr-primary-btn">
                  Get Started Now{" "}
                  <i className="fa-sharp fa-regular fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-img-wrap-5">
              <div className="shapes">
                <div className="shape shape-1">
                  <img src={assets.aboutshape4} alt="shape" />
                </div>
                <div className="shape shape-2">
                  <img src={assets.aboutshape5} alt="shape" />
                </div>
              </div>
              <div className="about-img reveal">
                <img
                  className="img-1"
                  src={assets.aboutimg8}
                  alt="img"
                />
              </div>
              <div className="about-img-2 reveal">
                <img
                  className="img-2"
                  src={assets.aboutimg9}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ./ about-section */}
  </>
  
  )
}

export default AboutSection