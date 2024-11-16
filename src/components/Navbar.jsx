import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div>
      <>
        <div className="line-wrap">
          <div className="line">
            <span />
          </div>
          <div className="line">
            <span />
          </div>
          <div className="line">
            <span />
          </div>
        </div>
        <header className="header header-6 header-10 sticky-active">
          <div className="top-bar">
            <div className="container">
              <div className="top-bar-inner">
                <ul className="top-bar-list">
                  <li>
                    <i className="fa-sharp fa-solid fa-phone" />
                    <a href="tel:+42645895893">(+426) 4589 5893</a>
                  </li>
                  <li>
                    <i className="fa-sharp fa-solid fa-location-dot" />
                    19 King Street. Berlin MU 30, Germany
                  </li>
                  <li>
                    <i className="fa-sharp fa-regular fa-envelope" />
                    <a href="mailto:info@agency.com">info@agency.com</a>
                  </li>
                </ul>
                <div className="top-bar-right">
                  <div className="top-bar-social">
                    <span>Follow Us On: </span>
                    <ul className="social-list">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-behance" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="primary-header">
            <div className="container">
              <div className="primary-header-inner">
                <div className="header-logo">
                  <a href="index.html">
                    <img
                      className="logo-dark"
                      src={assets.logo1}
                      alt="Logo"
                    />
                    <img
                      className="logo-light"
                      src={assets.logo1}
                      alt="Logo"
                    />
                  </a>
                </div>
                <div className="header-menu-wrap">
                  <div className="mobile-menu-items">
                    <ul>
                      <li className="menu-item-has-children active">
                        <a href="index.html">Home</a>
                        <ul>
                          <li>
                            <a href="index.html">Web Design</a>
                          </li>
                          <li>
                            <a href="index-2.html">Creative Studio</a>
                          </li>
                          <li>
                            <a href="index-3.html">Web Development</a>
                          </li>
                          <li>
                            <a href="index-4.html">Modern Agency</a>
                          </li>
                          <li>
                            <a href="index-5.html">It Solution</a>
                          </li>
                          <li>
                            <a href="index-6.html">Digital Agency</a>
                          </li>
                          <li>
                            <a href="index-7.html">Corporate Agency</a>
                          </li>
                          <li>
                            <a href="index-8.html">Web Agency</a>
                          </li>
                          <li>
                            <a href="index-9.html">Creative Agency</a>
                          </li>
                          <li>
                            <a href="index-10.html">Digital Studio</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul>
                          <li>
                            <a href="about.html">About</a>
                          </li>
                          <li>
                            <a href="team.html">Team</a>
                          </li>
                          <li>
                            <a href="team-details.html">Team Details</a>
                          </li>
                          <li>
                            <a href="project.html">Portfolio</a>
                          </li>
                          <li>
                            <a href="project-details.html">Portfolio Details</a>
                          </li>
                          <li>
                            <a href="pricing.html">Pricing Plans</a>
                          </li>
                          <li>
                            <a href="faq.html">Faq</a>
                          </li>
                          <li>
                            <a href="error.html">404 Error</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="service.html">Services</a>
                        <ul>
                          <li>
                            <a href="service.html">Service</a>
                          </li>
                          <li>
                            <a href="service-details.html">Service Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="shop.html">Shop</a>
                        <ul>
                          <li>
                            <a href="shop.html">Shop</a>
                          </li>
                          <li>
                            <a href="shop-details.html">Shop Details</a>
                          </li>
                          <li>
                            <a href="cart.html">Cart</a>
                          </li>
                          <li>
                            <a href="wishlist.html">Wishlist</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="blog-grid.html">Blog</a>
                        <ul>
                          <li>
                            <a href="blog-grid.html">Blog Grid</a>
                          </li>
                          <li>
                            <a href="blog-grid-2.html">Blog list</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*.header-menu-wrap */}
                <div className="header-right-wrap">
                  <div className="header-right">
                    <div className="header-btn-wrap">
                      <a href="contact.html" className="rr-primary-btn">
                        View All Services{" "}
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                      </a>
                    </div>
                    <div className="sidebar-icon">
                      <button className="sidebar-trigger open">
                        <span />
                        <span />
                        <span />
                      </button>
                    </div>
                  </div>
                  {/*.header-right */}
                </div>
              </div>
              {/*.primary-header-inner */}
            </div>
          </div>
        </header>
        {/*.Main Header */}
      </>
    </div>
  );
};

export default Navbar;
