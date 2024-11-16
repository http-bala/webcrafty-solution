import React from 'react'

const CtaAreaSection = () => {
  return (
    <>
    <section className="cta-contact-area">
      <div className="container">
        <div className="cta-contact-wrap fade-wrapper">
          <div className="section-heading mb-40 white-content">
            <h4
              className="sub-heading"
              data-text-animation="fade-in"
              data-duration="1.5"
            >
              Let’s Collab For Projects
            </h4>
            <h2
              className="section-title"
              data-text-animation="fade-in-right"
              data-split="char"
              data-duration="0.6"
              data-stagger="0.03"
            >
              We’re Ready to Work For You
            </h2>
          </div>
          <div className="cta-contact-btn-wrap fade-top">
            <div className="cta-contact-btn">
              <a href="contact.html" className="rr-primary-btn">
                Get a Quote
              </a>
            </div>
            <div className="cta-contact-info white-content">
              <div className="icon">
                <i className="fa-sharp fa-solid fa-phone" />
              </div>
              <div className="content">
                <span>CAll Us Anytime</span>
                <a href="tel:+25832561586">(+258) 3256 21586</a>
              </div>
            </div>
          </div>
          <div className="cta-contact-img">
            <img src="assets/img/images/contact-cta.png" alt="cta" />
          </div>
        </div>
      </div>
    </section>
    {/* ./ cta-contact-area */}
  </>
  
  )
}

export default CtaAreaSection