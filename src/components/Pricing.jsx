import { pricing } from '../data/siteData.js';
function Pricing({ page = false }) {
  return (
    <main className={page ? 'page-shell' : ''}>
      {page && <section className="page-hero"><div className="container"><p className="eyebrow">Pricing Plans</p><h1>Smart Plans for Smarter People</h1><p>Same The Work Culture pricing, presented in a cleaner and easier-to-compare layout.</p></div></section>}
      <section className="section pricing-section" id="pricing">
        <div className="container">
          {!page && <div className="section-head"><p className="eyebrow">Pricing Plans</p><h2>Smart Plans for Smarter People</h2></div>}
          <div className="pricing-group-label">Desks</div>
          <div className="pricing-grid">
            {pricing.map((plan) => (
              <article className="price-card" key={plan.name}>
                {plan.badge && <span className="popular">{plan.badge}</span>}
                <small>{plan.group}</small>
                <h3>{plan.name}</h3>
                <div className="price"><strong>{plan.price}</strong><span>{plan.period}</span></div>
                <ul>{plan.features.map((f) => <li key={f}>✓ {f}</li>)}</ul>
                <a className="btn dark" href="https://wa.me/919200773773" target="_blank" rel="noreferrer">Book Space</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
export default Pricing;
