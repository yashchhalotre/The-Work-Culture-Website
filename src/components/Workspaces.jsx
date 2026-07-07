import { Link } from 'react-router-dom';
import { workspaces } from '../data/siteData.js';
function Workspaces() {
  return (
    <section className="section" id="workspaces">
      <div className="container">
        <div className="section-head row-head">
          <div>
            <p className="eyebrow">Meet Your Space</p>
            <h2>Coworking Solutions for Every Type of Team</h2>
          </div>
          <p>Hot desk, dedicated desk, private office and flexible options designed around the way you work.</p>
        </div>
        <div className="workspace-grid">
          {workspaces.map((item) => (
            <article className="workspace-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div><h3>{item.title}</h3><p>{item.text}</p><Link to="/contact">Book Space →</Link></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Workspaces;
