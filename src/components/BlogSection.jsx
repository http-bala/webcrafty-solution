import React from 'react'

const BlogSection = () => {
  return (
    <>
    <section className="blog-section pt-130 pb-130 fade-wrapper">
      <div className="container">
        <div className="section-heading text-center">
          <h4
            className="sub-heading"
            data-text-animation="fade-in"
            data-duration="1.5"
          >
            Blog &amp; News
          </h4>
          <h2
            className="section-title"
            data-text-animation="fade-in-right"
            data-split="char"
            data-duration="0.6"
            data-stagger="0.03"
          >
            Our latest news &amp; articles <br />
            from the blog
          </h2>
        </div>
        <div className="row gy-lg-0 gy-4">
          <div className="col-lg-4 col-md-6">
            <div className="post-card-2 post-card-10 fade-top">
              <div className="post-thumb">
                <div className="overlay" />
                <img src="assets/img/blog/post-img-1.png" alt="post" />
              </div>
              <div className="post-content-wrap">
                <div className="post-content">
                  <span className="category">Design</span>
                  <h3 className="title">
                    <a href="blog-details.html">
                      How Our Digital Studio Creates Intuitive and Engaging
                    </a>
                  </h3>
                  <ul className="post-meta">
                    <li>
                      <i className="fa-sharp fa-regular fa-clock" />
                      25 June, 2024
                    </li>
                    <li>
                      <i className="fa-light fa-user" />
                      Post by: Admin
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="post-card-2 post-card-10 fade-top">
              <div className="post-thumb">
                <div className="overlay" />
                <img src="assets/img/blog/post-img-2.png" alt="post" />
              </div>
              <div className="post-content-wrap">
                <div className="post-content">
                  <span className="category">Design</span>
                  <h3 className="title">
                    <a href="blog-details.html">
                      How Our Tailored Solutions Enhance User Experience
                    </a>
                  </h3>
                  <ul className="post-meta">
                    <li>
                      <i className="fa-sharp fa-regular fa-clock" />
                      25 June, 2024
                    </li>
                    <li>
                      <i className="fa-light fa-user" />
                      Post by: Admin
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="post-card-2 post-card-10 fade-top">
              <div className="post-thumb">
                <div className="overlay" />
                <img src="assets/img/blog/post-img-3.png" alt="post" />
              </div>
              <div className="post-content-wrap">
                <div className="post-content">
                  <span className="category">Design</span>
                  <h3 className="title">
                    <a href="blog-details.html">
                      Inside Playbook for Crafting Future Centric Digital
                    </a>
                  </h3>
                  <ul className="post-meta">
                    <li>
                      <i className="fa-sharp fa-regular fa-clock" />
                      25 June, 2024
                    </li>
                    <li>
                      <i className="fa-light fa-user" />
                      Post by: Admin
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ./ blog-section */}
  </>
  
  )
}

export default BlogSection