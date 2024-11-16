import React from 'react'
import { assets } from '../assets/assets'

const ProcessSection = () => {
  return (
    <>
  <section className="exp-section-2 pt-130 pb-130 overflow-hidden">
    <div className="shapes">
      <div className="shape shape-1">
        <img src={assets.exp1} alt="shape" />
      </div>
      <div className="shape shape-2">
        <img src={assets.exp2} alt="shape" />
      </div>
    </div>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="exp-content exp-content-2 fade-wrapper">
            <div className="section-heading mb-30">
              <h4
                className="sub-heading after-none"
                data-text-animation="fade-in"
                data-duration="1.5"
              >
                Our Working Growth
              </h4>
              <h2
                className="section-title"
                data-text-animation="fade-in-right"
                data-split="char"
                data-duration="0.6"
                data-stagger="0.03"
              >
                Fast Digital Agency&nbsp;in a <br />
                Simple way
              </h2>
            </div>
            <p className="fade-top">
              We don’t just work with concrete and steel. We work with people We
              are <br /> Approachable, with even our highest work
            </p>
            <ul className="skills-items">
              <li className="skills-item fade-top">
                <h5 className="title">UI/UX Design</h5>
                <div className="progress">
                  <div
                    className="progress-bar wow slideInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="2000ms"
                    role="progressbar"
                    style={{
                      width: "70%",
                      visibility: "visible",
                      animationDuration: "2000ms",
                      animationDelay: "0ms",
                      animationName: "slideInLeft"
                    }}
                  >
                    <span>70%</span>
                  </div>
                </div>
              </li>
              <li className="skills-item fade-top">
                <h5 className="title">Branding Research</h5>
                <div className="progress">
                  <div
                    className="progress-bar wow slideInLeft"
                    data-wow-delay="200ms"
                    data-wow-duration="2000ms"
                    role="progressbar"
                    style={{
                      width: "60%",
                      visibility: "visible",
                      animationDuration: "2000ms",
                      animationDelay: "200ms",
                      animationName: "slideInLeft"
                    }}
                  >
                    <span>60%</span>
                  </div>
                </div>
              </li>
              <li className="skills-item fade-top">
                <h5 className="title">Product Design</h5>
                <div className="progress">
                  <div
                    className="progress-bar wow slideInLeft"
                    data-wow-delay="200ms"
                    data-wow-duration="2000ms"
                    role="progressbar"
                    style={{
                      width: "90%",
                      visibility: "visible",
                      animationDuration: "2000ms",
                      animationDelay: "200ms",
                      animationName: "slideInLeft"
                    }}
                  >
                    <span>90%</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="exp-img-wrap">
            <div className="exp-img-1">
              <img src={assets.expimg1} alt="img" />
            </div>
            <div className="exp-img-2">
              <img src={assets.expimg2} alt="img" />
            </div>
            <div className="exp-img-3">
              <img src={assets.expimg3} alt="img" />
            </div>
            <div className="exp-img-4">
              <img src={assets.expimg4} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ./ process-section */}
</>

  )
}

export default ProcessSection