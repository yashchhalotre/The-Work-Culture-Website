import { useState } from "react";
import { blogs } from "../data/siteData.js";

function Blogs({ compact = false }) {
  const [showAll, setShowAll] = useState(false);

  const list = compact && !showAll ? blogs.slice(0, 4) : blogs;

  return (
    <section className="section" id="blogs">
      <div className="container">
        <div className="section-head row-head">
          <div>
            <p className="eyebrow">Our Latest Blogs</p>
            <h2>Explore our Latest Posts & Blogs</h2>
          </div>

          {compact && (
            <button
              className="btn dark"
              type="button"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "View Less" : "View All Blogs"}
            </button>
          )}
        </div>

        <div className="blog-grid">
          {list.map((blog) => (
            <article className="blog-card" key={blog.title}>
              <img src={blog.image} alt={blog.title} />

              <div className="blog-content">
                <span className="blog-category">{blog.category}</span>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <small>{blog.date}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;