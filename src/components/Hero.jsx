import { Link } from 'react-router-dom';
import { contact, images, stats } from '../data/siteData.js';

function Hero() {
  return (
    <section className="hero" id="home"  >
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="rating-pill">★ 5 Star Rated Coworking Space</div>
          <h1>A Modern Workspace for Modern Professionals</h1>
          <p>Premium coworking spaces in Bhopal — for freelancers, startups, remote workers, creators and growing teams.</p>
          <div className="hero-actions">
            <a className="btn primary" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">Book Space</a>
            <Link className="btn ghost" to="/contact">Schedule A Visit</Link>
          </div>
          <div className="stats-row">
            {stats.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
          </div>
        </div>
        <div className="hero-visual">
          <img src={images.hero} alt="The Work Culture coworking space in Bhopal" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
