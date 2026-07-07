import { Link } from 'react-router-dom';
import logo from '../assets/Other Images/logo.png.webp';
import { contact, moreLinks, navLinks } from '../data/siteData.js';

function Footer() {
  const quick = [...navLinks, { label: 'Gallery', href: '/gallery' }, ...moreLinks];

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link className="logo footer-logo" to="/"><img src={logo} alt="The Work Culture Logo" /></Link>
          <p>{contact.tagline}</p>
          <div className="socials">
            <a href="https://www.facebook.com/61574439766300/" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.instagram.com/the_work_culture/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          {quick.map((item) => <Link key={`${item.label}-${item.href}`} to={item.href}>{item.label}</Link>)}
        </div>
        <div>
          <h4>Get In Touch</h4>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={`tel:${contact.phone}`}>{contact.phone}</a>
          <a href={`tel:${contact.contactPhone}`}>{contact.contactPhone}</a>
          {contact.locations.map((l) => <p key={l.name}><strong>{l.name}</strong><br />{l.address}</p>)}
        </div>
        <div className="footer-map">
          <h4>Work Culture Locations</h4>
          <iframe title="The Work Culture Bhopal Map" src="https://www.google.com/maps?q=The%20Work%20Culture%20Bhopal&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <p className="copyright">© 2026 The Work Culture | Bhopal’s Creative Coworking Network</p>
    </footer>
  );
}

export default Footer;
