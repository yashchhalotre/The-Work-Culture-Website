import { contact, virtualOfficePlans, images } from '../data/siteData.js';

function VirtualOffice() {
  const virtualOfficeImage =
    images.virtualOffice ||
    images.officeInterior ||
    images.hero ||
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80';

  const handleImageError = (e) => {
    e.currentTarget.src =
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Virtual office request submitted successfully!');
    e.currentTarget.reset();
  };

  return (
    <main className="page-shell virtual-office-page">
      <section className="vo-hero">
        <div className="container vo-hero-grid">
          <div className="vo-hero-copy">
            <p className="eyebrow">Virtual Office</p>
            <h1>Theworkculture Virtual Office</h1>
            <p>
              Give your business a premium Bhopal address without the overhead cost of a physical office.
              Perfect for freelancers, startups, remote teams and growing companies.
            </p>
            <div className="vo-actions">
              <a className="btn primary" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">Book Space</a>
              <a className="btn ghost" href="#vo-consultation">Get Free Consultation</a>
            </div>
          </div>

          <form className="contact-form modern-form vo-form" id="vo-consultation" onSubmit={handleSubmit}>
            <div className="form-title">
              <span>Get A Free Consultation</span>
              <h2>Start your virtual office request</h2>
              <p>Fill out the form below and we will contact you as soon as possible.</p>
            </div>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Phone Number" required />
            <select defaultValue="" required>
              <option value="">Business Type</option>
              <option>Freelancer</option>
              <option>Startup</option>
              <option>Small Business</option>
              <option>Private Limited Company</option>
              <option>LLP / Partnership</option>
              <option>Enterprise</option>
            </select>
            <textarea placeholder="Message" rows="4"></textarea>
            <button className="btn primary" type="submit">Submit Request</button>
          </form>
        </div>
      </section>

      <section className="section vo-intro-section">
        <div className="container vo-intro-grid">
          <div className="vo-image-wrap">
            <img
              src={virtualOfficeImage}
              alt="Virtual office business address"
              onError={handleImageError}
            />
          </div>
          <div className="vo-intro-copy">
            <p className="eyebrow">Premium Business Address</p>
            <h2>What is Virtual Office by Theworkculture?</h2>
            <p>
              Choose from Virtual Office solutions including a business address plan, GST registration plan
              and business registration support. It helps you establish your company presence in Bhopal
              while keeping your operations flexible and cost-effective.
            </p>
            <ul className="vo-benefits">
              <li>Premium business address in Bhopal</li>
              <li>Mail and package handling support</li>
              <li>Documentation support for GST registration</li>
              <li>Useful for freelancers, startups and growing companies</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section vo-plans-section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Virtual Office Plans</p>
            <h2>Choose the plan that fits your business</h2>
          </div>
          <div className="vo-plan-grid">
            {virtualOfficePlans.map((plan) => (
              <article className="price-card vo-plan-card" key={plan.name}>
                {plan.badge && <span className="popular">{plan.badge}</span>}
                <small>{plan.type}</small>
                <h3>{plan.name}</h3>
                <div className="price"><strong>{plan.price}</strong><span>{plan.period}</span></div>
                <ul>{plan.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul>
                <a className="btn primary" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">Book Space</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default VirtualOffice;
