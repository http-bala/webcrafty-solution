import React from 'react'
import reqMen from '../assets/img/images/req-man.png'
import reqshape from '../assets/img/shapes/req-man-bg.png'


const RequestSection = () => {
  return (
    <>
  <section className="request-section pt-130">
    <div className="container">
      <div className="row req-wrap-2">
        <div className="col-lg-7">
          <div className="request-content request-content-2">
            <div className="section-heading mb-40">
              <h4
                className="sub-heading after-none"
                data-text-animation="fade-in"
                data-duration="1.5"
              >
                What We Can Do For You
              </h4>
              <h2
                className="section-title"
                data-text-animation="fade-in-right"
                data-split="char"
                data-duration="0.6"
                data-stagger="0.03"
              >
                Request a free quote
              </h2>
            </div>
            <div className="request-form fade-wrapper">
              <form action="https://html.rrdevs.net/runok/mail.php">
                <div className="form-group row">
                  <div className="col-md-6 fade-top">
                    <div className="form-item">
                      <label htmlFor="fullname">First Name (required)</label>
                      <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        className="form-control"
                        placeholder="Your First Name*"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 fade-top">
                    <div className="form-item">
                      <label htmlFor="lastname">Last Name (required)</label>
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        className="form-control"
                        placeholder="Your Last Name*"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-6 fade-top">
                    <div className="form-item">
                      <label htmlFor="email">Company Email (required)</label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Company Email*"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 fade-top">
                    <div className="form-item">
                      <label htmlFor="company">Company Name (required)</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="form-control"
                        placeholder="Company Name*"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-6 fade-top">
                    <div className="form-item">
                      <label htmlFor="url">Company URL (required)</label>
                      <input
                        type="text"
                        id="url"
                        name="url"
                        className="form-control"
                        placeholder="Company URL*"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 fade-top">
                    <div className="form-item">
                      <label htmlFor="select">Select Topic (required)</label>
                      <input
                        type="text"
                        id="select"
                        name="topic"
                        className="form-control"
                        placeholder="Select Your Topic*"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-btn fade-top">
                  <button className="rr-primary-btn">
                    Get a Quote{" "}
                    <i className="fa-sharp fa-regular fa-arrow-right" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="req-img-2">
            <div className="req-man">
              <img src={reqMen} alt="req" />
            </div>
            <div className="req-man-shape">
              <img src={reqshape} alt="shape" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ./ request-section */}
</>

  )
}

export default RequestSection