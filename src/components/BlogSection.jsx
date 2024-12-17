import React, { useEffect, useState } from 'react';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the blogs data from the API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://blog-api-one-mocha.vercel.app/api/blogs');
        const data = await response.json();
        setBlogs(data); // Assuming the response is an array of blog objects
      } catch (err) {
        setError('Failed to load blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="blog-section pt-130 pb-130 fade-wrapper">
      <div className="container">
        <div className="section-heading text-center">
          <h4 className="sub-heading" data-text-animation="fade-in" data-duration="1.5">
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
          {/* Dynamically Render Blog Cards */}
          {blogs.map((blog) => (
            <div className="col-lg-4 col-md-6" key={blog._id}>
              <div className="post-card-2 post-card-10 fade-top">
                <div className="post-thumb">
                  <div className="overlay" />
                  <img
                    src={blog.image || 'assets/img/blog/post-img-1.png'}
                    alt="post"
                  />
                </div>
                <div className="post-content-wrap">
                  <div className="post-content">
                    <span className="category">{blog.category || 'Category'}</span>
                    <h3 className="title">
                      <a href={`/blog-details/${blog._id}`}>
                        {blog.title}
                      </a>
                    </h3>
                    <ul className="post-meta">
                      <li>
                        <i className="fa-sharp fa-regular fa-clock" />
                        {new Date(blog.date).toLocaleDateString()}
                      </li>
                      <li>
                        <i className="fa-light fa-user" />
                        Post by: {blog.postBy || 'Admin'}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
