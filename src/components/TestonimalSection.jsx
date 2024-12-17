import React from 'react'
import ligtImg from '../assets/img/icon/quote-light.png'
import darkImg from '../assets/img/icon/quote.png'
import testiAuthor4 from '../assets/img/testi/testi-author-4.png'
import testiImg1 from '../assets/img/images/testi-img-1.png'

const TestonimalSection = () => {
  return (
    <>
  <section className="testimonial-section-4 bg-dark-1 pt-130 pb-130">
    <div className="container">
      <div className="row gy-lg-0 gy-5 align-items-center">
        <div className="col-lg-6">
          <div className="testi-img-4 reveal">
            <img src={testiImg1} alt="testi" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="testi-content-4 fade-wrapper">
            <div className="section-heading">
              <h4
                className="sub-heading after-none"
                data-text-animation="fade-in"
                data-duration="1.5"
              >
                Client Testimonial
              </h4>
              <h2
                className="section-title"
                data-text-animation="fade-in-right"
                data-split="char"
                data-duration="0.6"
                data-stagger="0.03"
              >
                What Our Customer Say
              </h2>
            </div>
            <div className="testi-top fade-top">
              <div className="quote">
                <img
                  className="dark-img"
                  src={darkImg}
                  alt="quote"
                />
                <img
                  className="light-img"
                  src={ligtImg}
                  alt="quote"
                />
              </div>
              <div className="swiper-arrow">
                <div className="swiper-nav swiper-next">
                  <i className="fa-sharp fa-regular fa-chevron-left" />
                </div>
                <div className="swiper-nav swiper-prev">
                  <i className="fa-sharp fa-regular fa-chevron-right" />
                </div>
              </div>
            </div>
            <div className="testi-carousel-2 swiper fade-top">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testi-box testi-box-2">
                    <p>
                      "I just wanted to thank Hatch Agency for their expertise
                      in optimizing our website. After the redesign, our organic
                      traffic has increased significantly, leading to more
                      conversions. We are thrilled with the results!"
                    </p>
                    <div className="author-box">
                      <img
                        src={testiAuthor4}
                        alt="img"
                      />
                      <h4 className="name">
                        Zulfikuar Smith <span>Co-founder, Grable</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-box testi-box-2">
                    <p>
                      "I just wanted to thank Hatch Agency for their expertise
                      in optimizing our website. After the redesign, our organic
                      traffic has increased significantly, leading to more
                      conversions. We are thrilled with the results!"
                    </p>
                    <div className="author-box">
                      <img
                        src={testiAuthor4}
                        alt="img"
                      />
                      <h4 className="name">
                        Zulfikuar Smith <span>Co-founder, Grable</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ./ testimonial-section */}
</>

  )
}

export default TestonimalSection