import { Link } from 'react-router-dom';
import { contact, images } from '../data/siteData.js';

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container split reverse-mobile">
        <div className="image-stack">
          <img src={images.about} alt="Dedicated desk setup at The Work Culture" />
          <div className="stack-note">Creative Co-Working Space In Bhopal</div>
        </div>
        <div>
          <p className="eyebrow">About Us</p>
          <h2>Modern workspace designed for your success</h2>
          <p>We believe that great work happens when you’re in the right environment. That’s why every corner of The Work Culture is designed to be clean, peaceful, professional and productive.</p>
          <p>{contact.tagline}.</p>
          <div className="mini-location-list">
            {contact.locations.map((location) => <span key={location.name}>{location.name}</span>)}
          </div>
          <Link className="text-link" to="/contact">About Us / Get Details →</Link>
        </div>
      </div>
    </section>
  );
}

export default About;
