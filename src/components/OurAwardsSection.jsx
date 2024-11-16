import React from 'react'

const OurAwardsSection = () => {
  return (
    <>
  <section className="award-section pb-130">
    <div className="container">
      <div className="section-heading text-center">
        <h4
          className="sub-heading"
          data-text-animation="fade-in"
          data-duration="1.5"
        >
          OUr Awards
        </h4>
        <h2
          className="section-title"
          data-text-animation="fade-in-right"
          data-split="char"
          data-duration="0.6"
          data-stagger="0.03"
        >
          Simple Step Follow To Complete <br />
          Work,&nbsp;How It Works
        </h2>
      </div>
      <div className="row gy-lg-0 gy-4 fade-top">
        <div className="col-lg-4 col-md-6 fade-top">
          <div className="award-item">
            <span>01</span>
            <h3 className="title">Discovery &amp; Strategy</h3>
            <p>
              Meet with the client to gather detailed information about their
              brand, objectives, &amp; expectations.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 fade-top">
          <div className="award-item">
            <span>02</span>
            <h3 className="title">Concept Development</h3>
            <p>
              Meet with the client to gather detailed information about their
              brand, objectives, &amp; expectations.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 fade-top">
          <div className="award-item">
            <span>03</span>
            <h3 className="title">Design &amp; Production</h3>
            <p>
              Meet with the client to gather detailed information about their
              brand, objectives, &amp; expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ./ award-section */}
</>

  )
}

export default OurAwardsSection