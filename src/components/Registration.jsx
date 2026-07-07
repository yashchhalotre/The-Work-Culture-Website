import { registrationTerms } from '../data/siteData.js';

function Registration({ page = false }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration submitted successfully!');
    e.currentTarget.reset();
  };

  return (
    <main className={page ? 'page-shell' : ''}>
      {page && (
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Registration</p>
            <h1>Member Registration</h1>
            <p>Register your details and accept the workspace terms and conditions.</p>
          </div>
        </section>
      )}

      <section className="section registration-section" id="registration">
        <div className="container registration-grid modern-registration-grid">
          <form className="contact-form registration-form modern-form" onSubmit={handleSubmit}>
            <div className="form-title">
              <span>Workspace Membership</span>
              <h2>Registration</h2>
              <p>Fill only the required details used on The Work Culture registration flow.</p>
            </div>

            <div className="form-grid">
              <input placeholder="Name *" required />
              <input placeholder="Phone *" required />
              <input type="email" placeholder="Email *" required />
              <select defaultValue="">
                <option value="">Select Workspace *</option>
                <option>Hot Desk</option>
                <option>Dedicated Desk</option>
                <option>Cabin</option>
                <option>Conference Room</option>
              </select>
              <input placeholder="Team Size" />
              <input placeholder="Nature Of Work" />
              <input placeholder="Website" />
              <input type="date" aria-label="Start Date" />
            </div>

            <h3>Local Address (Bhopal)</h3>
            <div className="form-grid">
              <input placeholder="Apartment, suite, etc" />
              <input placeholder="City" defaultValue="Bhopal" />
              <input placeholder="State/Province" defaultValue="Madhya Pradesh" />
              <input placeholder="ZIP / Postal Code" />
              <input placeholder="Country" defaultValue="India" />
            </div>

            <div className="upload-grid">
              <label>Upload Aadhar Card *<input type="file" required /></label>
              <label>Upload Pan Card *<input type="file" required /></label>
              <label>Upload Business Documents (Gumasta / GST)<input type="file" /></label>
              <label>Upload Signature *<input type="file" required /></label>
            </div>

            <label className="check">
              <input type="checkbox" required />
              <span>Yes, I agree with the privacy policy and terms and conditions.</span>
            </label>

            <button className="btn primary" type="submit">Register</button>
          </form>

          <aside className="terms-card modern-terms-card">
            <p className="eyebrow">Consent</p>
            <h2>Terms & Conditions</h2>
            <ol>{registrationTerms.map((term) => <li key={term}>{term}</li>)}</ol>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Registration;
