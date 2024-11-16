import React from 'react'

const Footer = () => {
  return (
    <>
  <footer className="footer-section footer-2 footer-10 bg-dark-1">
    <div className="container">
      <div className="footer-top">
        <div className="footer-logo">
          <a href="index.html">
            <img src="assets/img/logo/logo-2.png" alt="logo" />
          </a>
        </div>
        <ul className="social-list">
          <li className="facebook">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li className="pinterest">
            <a href="#">
              <i className="fab fa-pinterest" />
            </a>
          </li>
          <li className="twitter">
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li className="instagram">
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
      <div className="row footer-wrap">
        <div className="col-lg-3 col-md-6">
          <div className="footer-widget">
            <div className="widget-header">
              <h3 className="widget-title">Company</h3>
            </div>
            <ul className="footer-list">
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li>
                <a href="project.html">Our Gallery</a>
              </li>
              <li>
                <a href="service.html">Our Services</a>
              </li>
              <li>
                <a href="team.html">Our Team</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-widget">
            <div className="widget-header">
              <h3 className="widget-title">Working Time</h3>
            </div>
            <ul className="footer-list">
              <li>Mon - Fri: 9:00 AM - 5:00 PM</li>
              <li>Saturday: 10:00 AM - 6:00 PM</li>
              <li>Sunday Closed</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-widget">
            <div className="widget-header">
              <h3 className="widget-title">Contact Us</h3>
            </div>
            <ul className="address-list">
              <li>
                <a href="mailto:support@agency.com">support@agency.com</a>
              </li>
              <li>
                <a href="tel:+2585492153215">+258 (549) 2158 3215</a>
              </li>
              <li>
                2589 Dorland Street Luke INUA <br /> Berlin, Germany
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-widget">
            <div className="widget-header">
              <h3 className="widget-title">Subscribe newsletter</h3>
            </div>
            <div className="footer-form mb-20">
              <form action="#" className="mt-subscribe-form">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email address"
                />
                <input
                  type="hidden"
                  name="action"
                  defaultValue="mailchimpsubscribe"
                />
                <button className="submit">Sign Up</button>
                <div className="clearfix" />
              </form>
            </div>
            <div className="form-check form-item">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="man"
              />
              <label className="form-check-label" htmlFor="man">
                I’m okay with getting emails and having that tracked to improve
                my experience
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-area">
      <div className="container">
        <div className="row copyright-content">
          <div className="col-lg-6 col-md-12">
            <p className="mb-0">© 2024 Runok. All Rights Reserved.</p>
          </div>
          <div className="col-lg-6 col-md-12">
            <ul className="copyright-list">
              <li>
                <a href="contact.html">Security</a>
              </li>
              <li>
                <a href="contact.html">Privacy &amp; Cookie Policy</a>
              </li>
              <li>
                <a href="contact.html">Terms of Services</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* ./ footer-section */}
</>

  )
}

export default Footer