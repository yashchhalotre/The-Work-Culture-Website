import { contact } from '../data/siteData.js';

function Contact({ page = false, compact = false }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Request submitted successfully!');
    e.currentTarget.reset();
  };

  return (
    <main className={page ? 'page-shell' : ''}>
      {page && (
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Contact Us</p>
            <h1>Have Any Questions?</h1>
            <p>Call, WhatsApp, email or send your details. The Work Culture team will contact you as soon as possible.</p>
          </div>
        </section>
      )}

      <section className="section contact-section" id="contact">
        <div className="container contact-card modern-contact-card">
          <div className="contact-copy">
            <p className="eyebrow">{compact ? 'Need Help For Booking!' : 'Get In Touch'}</p>
            <h2>{compact ? 'Book your workspace visit.' : 'Let’s find the right workspace for you.'}</h2>
            <p>Fill out the form below and we will contact you as soon as possible.</p>

            <div className="contact-highlight">
              <span>Call now</span>
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </div>

            <div className="contact-list locations-list">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp us</a>
              {contact.locations.map((location) => (
                <div key={location.name}>
                  <strong>{location.name}</strong>
                  <span>{location.address}</span>
                </div>
              ))}
            </div>
          </div>

          <form className="contact-form modern-form" onSubmit={handleSubmit}>
            <div className="form-title">
              <span>Quick Enquiry</span>
              <h3>Request a callback</h3>
            </div>
            <div className="form-grid">
              <input type="text" placeholder="Your Name" required />
              <input type="tel" placeholder="Phone Number" required />
            </div>
            <input type="email" placeholder="Your Email" required />
            <select defaultValue="">
              <option value="">Business Type</option>
              <option>Freelancer</option>
              <option>Startup</option>
              <option>Remote Team</option>
              <option>Small Business</option>
              <option>Enterprise</option>
            </select>
            <textarea placeholder="Message" rows="5"></textarea>
            <button className="btn primary" type="submit">Submit Request</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
