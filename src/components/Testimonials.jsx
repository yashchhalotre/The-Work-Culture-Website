import { useEffect, useMemo, useState } from 'react';
import { testimonials } from '../data/siteData.js';

function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;
  const visibleReviews = useMemo(() => {
    return [0, 1, 2].map((offset) => testimonials[(active + offset) % total]);
  }, [active, total]);

  useEffect(() => {
    if (paused) return undefined;

    const slider = setInterval(() => {
      setActive((current) => (current + 1) % total);
    }, 3600);

    return () => clearInterval(slider);
  }, [paused, total]);

  const goPrev = () => setActive((current) => (current - 1 + total) % total);
  const goNext = () => setActive((current) => (current + 1) % total);

  return (
    <section className="section cream testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-head testimonial-head">
          <p className="eyebrow">Testimonials</p>
          <h2>Hear What Our Members Are Saying About Us</h2>
          <p>Google reviews from people who work, collaborate and build every day at The Work Culture.</p>
        </div>

        <div className="testimonial-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <button className="carousel-btn" type="button" onClick={goPrev} aria-label="Previous testimonial">‹</button>

          <div className="testimonial-track auto-slide">
            {visibleReviews.map((item, index) => (
              <article className={`testimonial-card carousel-card ${index === 1 ? 'featured-review' : ''}`} key={`${item.name}-${index}`}>
                <div className="review-top">
                  <div className="review-avatar">{item.name.charAt(0)}</div>
                  <div>
                    <strong>{item.name}</strong>
                    <small>Posted on Google</small>
                  </div>
                </div>
                <div className="stars">★★★★★</div>
                <p>“{item.text}”</p>
                <span>Trustindex verifies that the original source of the review is Google.</span>
              </article>
            ))}
          </div>

          <button className="carousel-btn" type="button" onClick={goNext} aria-label="Next testimonial">›</button>
        </div>

        <div className="carousel-dots" aria-label="Testimonials navigation">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              className={index === active ? 'active' : ''}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
