import { Link } from 'react-router-dom';

function CreativeAdda({ page = false }) {
  return (
    <main className={page ? 'page-shell' : ''}>
      {page && <section className="page-hero"><div className="container"><p className="eyebrow">Bhopal's Creative Adda</p><h1>Bhopal’s Creative Adda</h1><p>A modern community space for creators, founders, freelancers, remote workers and teams.</p></div></section>}
      <section className="section" id="creative-adda"><div className="container creative-card"><p className="eyebrow">Bhopal's Creative Adda</p><h2>A community space for creators, founders and professionals.</h2><p>The Work Culture is more than desks and cabins. It is a creative coworking network where freelancers, remote workers, startups and teams can connect, collaborate and grow.</p><div className="hero-actions"><Link className="btn primary" to="/contact">Join the Community</Link><Link className="btn ghost" to="/gallery">See Gallery</Link></div></div></section>
    </main>
  );
}
export default CreativeAdda;
