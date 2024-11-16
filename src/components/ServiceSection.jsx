import React from 'react'
import { assets } from '../assets/assets'

const ServiceSection = () => {
  return (
    <>
  <section className="service-section-10 pt-130 pb-130">
    <div className="container">
      <div className="section-heading text-center">
        <h4
          className="sub-heading"
          data-text-animation="fade-in"
          data-duration="1.5"
        >
          Our Services
        </h4>
        <h2
          className="section-title"
          data-text-animation="fade-in-right"
          data-split="char"
          data-duration="0.6"
          data-stagger="0.03"
        >
          Explore unique digital agency service
        </h2>
      </div>
      <div className="row gy-lg-0 gy-4">
        <div className="col-lg-6">
          <div className="service-item-wrap fade-wrapper">
            <div className="service-item-10 fade-top">
              <div className="icon">
                <img src={assets.service1} alt="service" />
              </div>
              <div className="content">
                <h3 className="title">
                  <a href="service-details.html">Search Engine Optimization</a>
                </h3>
                <p>
                  Elevate your brand &amp; engage your audience. Our expert team
                  combines innovative design with cutting-edge technology to
                  deliver
                </p>
              </div>
            </div>
            <div className="service-item-10 fade-top">
              <div className="icon">
                <img src={assets.service2}  alt="service" />
              </div>
              <div className="content">
                <h3 className="title">
                  <a href="service-details.html">
                    Content Creation and Management
                  </a>
                </h3>
                <p>
                  Elevate your brand &amp; engage your audience. Our expert team
                  combines innovative design with cutting-edge technology to
                  deliver
                </p>
              </div>
            </div>
            <div className="service-item-10 fade-top">
              <div className="icon">
                <img src={assets.service3}  alt="service" />
              </div>
              <div className="content">
                <h3 className="title">
                  <a href="service-details.html">Social Media Management</a>
                </h3>
                <p>
                  Elevate your brand &amp; engage your audience. Our expert team
                  combines innovative design with cutting-edge technology to
                  deliver
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="service-item-wrap fade-wrapper">
            <div className="service-item-10 fade-top">
              <div className="icon">
                <img src={assets.service4}  alt="service" />
              </div>
              <div className="content">
                <h3 className="title">
                  <a href="service-details.html">Graphic Design and Branding</a>
                </h3>
                <p>
                  Elevate your brand &amp; engage your audience. Our expert team
                  combines innovative design with cutting-edge technology to
                  deliver
                </p>
              </div>
            </div>
            <div className="service-item-10 fade-top">
              <div className="icon">
                <img src={assets.service5}  alt="service" />
              </div>
              <div className="content">
                <h3 className="title">
                  <a href="service-details.html">
                    Website Design and Development
                  </a>
                </h3>
                <p>
                  Elevate your brand &amp; engage your audience. Our expert team
                  combines innovative design with cutting-edge technology to
                  deliver
                </p>
              </div>
            </div>
            <div className="service-item-10 fade-top">
              <div className="icon">
                <img src={assets.service6} alt="service" />
              </div>
              <div className="content">
                <h3 className="title">
                  <a href="service-details.html">Mobile App Development</a>
                </h3>
                <p>
                  Elevate your brand &amp; engage your audience. Our expert team
                  combines innovative design with cutting-edge technology to
                  deliver
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ./ service-section */}
</>

  )
}

export default ServiceSection