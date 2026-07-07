import { useState } from 'react';
import { faqs } from '../data/siteData.js';
import { MinusIcon, PlusIcon } from './UiIcons.jsx';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="container faq-wrap">
        <div>
          <p className="eyebrow">FAQ'S</p>
          <h2>Frequently Asked Questions</h2>
          <p>Quick answers about booking, plans, amenities and workspace use.</p>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article className={isOpen ? 'faq-item active' : 'faq-item'} key={item.q}>
                <button
                  className="faq-question"
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon">{isOpen ? <MinusIcon /> : <PlusIcon />}</span>
                </button>

                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
