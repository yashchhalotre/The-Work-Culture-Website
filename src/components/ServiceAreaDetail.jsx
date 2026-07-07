import { Link, useParams } from 'react-router-dom';
import { contact, serviceAreas } from '../data/siteData.js';

function ServiceAreaDetail() {
  const { slug } = useParams();
  const area = serviceAreas.find((item) => item.slug === slug);

  if (!area) {
    return (
      <main className="page-shell">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Service Area</p>
            <h1>Location not found</h1>
            <p>This service area is not available right now.</p>
            <Link className="btn primary" to="/service-areas">Back to Service Areas</Link>
          </div>
        </section>
      </main>
    );
  }

  const whatsappText = `Hi The Work Culture, I want details for ${area.name} coworking space.`;

  return (
    <main className="page-shell location-page">
      <section className="location-hero">
        <div className="container location-hero-grid">
          <div className="location-hero-copy">
            <p className="eyebrow">The Work Culture Location</p>
            <h1>{area.name} Coworking Space</h1>
            <p>{area.longText}</p>
            <div className="location-meta">
              <span>{area.locationLabel}</span>
              <span>{area.address}</span>
              <span>{area.bestFor}</span>
            </div>
            <div className="location-actions">
              <a className="btn primary" href={`tel:${contact.phone}`}>Call Now</a>
              <Link className="btn ghost" to="/contact">Book a Visit</Link>
              {area.mapLink && <a className="btn ghost" href={area.mapLink} target="_blank" rel="noreferrer">Open Location</a>}
            </div>
          </div>
          <div className="location-hero-media">
            <img src={area.images[0]} alt={`${area.name} office interior`} loading="eager" />
          </div>
        </div>
      </section>

      <section className="section location-details-section">
        <div className="container location-content-grid">
          <div className="location-gallery" aria-label={`${area.name} workspace images`}>
            {area.images.slice(1).map((image, index) => (
              <img key={`${area.slug}-${index}`} src={image} alt={`${area.name} workspace ${index + 1}`} loading="lazy" />
            ))}
          </div>

          <aside className="location-info-card">
            <p className="eyebrow">Starting Price</p>
            <h2>{area.price}</h2>
            <p>{area.priceNote}</p>
            <ul>
              {area.workspaceTypes.map((workspace) => (
                <li key={workspace}>{workspace}</li>
              ))}
            </ul>
            <a className="btn primary full-btn" href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(whatsappText)}`} target="_blank" rel="noreferrer">Get Details on WhatsApp</a>
          </aside>
        </div>
      </section>

      <section className="section location-pricing-section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{area.name} Pricing</p>
            <h2>Plans available at this location</h2>
            <p>Prices are updated according to the latest location-wise details shared by The Work Culture team.</p>
          </div>
          <div className="location-pricing-grid">
            {area.pricingDetails.map((plan) => (
              <article className="location-price-card" key={`${plan.name}-${plan.price}`}>
                <small>{plan.type}</small>
                <h3>{plan.name}</h3>
                <strong>{plan.price}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section location-features-section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Why Choose This Location</p>
            <h2>Everything you need to work comfortably in {area.name}</h2>
          </div>
          <div className="location-feature-grid">
            {area.features.map((feature) => (
              <article className="location-feature-card" key={feature.title}>
                <span>{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServiceAreaDetail;
