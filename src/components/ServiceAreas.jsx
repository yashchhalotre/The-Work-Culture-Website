import { Link } from 'react-router-dom';
import { serviceAreas } from '../data/siteData.js';
function ServiceAreas({ page = false }) {
  return (
    <main className={page ? 'page-shell' : ''}>
      {page && <section className="page-hero"><div className="container"><p className="eyebrow">Service Areas</p><h1>Areas We Serve</h1><p>We are serving the top areas of Bhopal to provide you a better space for work.</p></div></section>}
      <section className="section cream" id="service-areas">
        <div className="container">
          {!page && <div className="section-head"><p className="eyebrow">Service Areas</p><h2>Areas We Serve</h2><p>We are serving to the top areas of Bhopal to provide you a better space for work.</p></div>}
          <div className="area-grid">
            {serviceAreas.map((area, index) => (
              <article className="area-card" key={area.name}>
                <span>{String(index + 1).padStart(2, '0')}</span><h3>{area.name}</h3><p>{area.text}</p><Link className="text-link" to={`/service-areas/${area.slug}`}>Get Details →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
export default ServiceAreas;
