import { amenities } from '../data/siteData.js';
import { ClockIcon, CoffeeIcon, MicIcon, PrinterIcon, UsersIcon, WifiIcon } from './UiIcons.jsx';

const icons = [WifiIcon, CoffeeIcon, UsersIcon, PrinterIcon, MicIcon, ClockIcon];

function Amenities() {
  return (
    <section className="section cream" id="amenities">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Amenities</p>
          <h2>Amenities at Theworkculture</h2>
          <p>Everything needed for a focused, comfortable and professional workday.</p>
        </div>
        <div className="amenity-grid">
          {amenities.map((item, index) => {
            const Icon = icons[index];
            return (
              <article className="amenity-card" key={item}>
                <span className="amenity-icon"><Icon /></span>
                <h3>{item}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Amenities;
