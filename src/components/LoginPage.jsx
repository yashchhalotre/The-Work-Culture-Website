import { Link } from 'react-router-dom';
function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login UI ready. Connect backend to enable real login.');
    e.currentTarget.reset();
  };

  return (
    <main className="page-shell auth-page" id="login">
      <section className="section">
        <div className="container auth-grid modern-auth-grid">
          <div className="auth-copy auth-panel">
            <p className="eyebrow">Member Login</p>
            <h1>Welcome back to The Work Culture.</h1>
            <p>Access your workspace bookings, visit updates and member services from one clean dashboard.</p>
            <div className="auth-points">
              <span>24/7 access</span>
              <span>Bookings</span>
              <span>Workspace updates</span>
            </div>
          </div>

          <form className="contact-form login-form modern-form auth-form" onSubmit={handleSubmit}>
            <div className="form-title">
              <span>Secure Access</span>
              <h2>Login</h2>
            </div>
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <button className="btn primary" type="submit">Login</button>
            <Link to="/registration">New member? Register here</Link>
          </form>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
