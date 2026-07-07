import { howItWorks, images } from '../data/siteData.js';
function HowItWorks() {
  return (
    <section className="section workflow" id="how-it-works">
      <div className="container workflow-grid">
        <div>
          <p className="eyebrow">How it works</p>
          <h2>A Simple Workflow Designed for You</h2>
          <p>Our process is simple, smooth, and fully designed around your convenience. Choose a workspace, confirm your booking, and step into a comfortable environment where everything is ready for you.</p>
          <img className="workflow-img" src={images.gallery2} alt="Professional coworking space workflow" />
        </div>
        <div className="steps-list">
          {howItWorks.map((item) => (
            <article className="step-card" key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default HowItWorks;
