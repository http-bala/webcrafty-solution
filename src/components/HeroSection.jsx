import React from 'react'
import { assets } from '../assets/assets'

const HeroSection = () => {
  return (
    <>
  <section className="hero-section-10">
    <div className="shape">
      <img src={assets.heroShape9} alt="shape" />
    </div>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-12">
          <div className="hero-info hero-info-3">
            <h1 className="title anim-text">Your Digital Future</h1>
            <h1 className="title title-2 anim-text">Innovating Success Today</h1>
            <h3 className="sub-title">
            Unlock Seamless Continuity with Smart  <br />
            Digital Strategies
            </h3>
            <div className="hero-btn-wrap">
              <a href="service.html" className="rr-primary-btn">
                View Services
              </a>
              <a href="service.html" className="rr-primary-btn">
                Make a Reservation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hero-img">
      <div className="men">
        <img src={assets.heroMen1} alt="img" />
      </div>
    </div>
  </section>
  {/* ./ hero-section */}
</>

  )
}

export default HeroSection