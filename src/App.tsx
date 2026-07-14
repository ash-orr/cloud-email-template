import Button from '../Button';
import Logo from '../Logo';

export function App() {
  const organizationName = 'Ash test';
  const domainName = 'petlover.com';

  return (
    <main className="mail-shell">
      <div className="mail-card">
        <header className="mail-header">
          <div className="mail-brand">
            <Logo property1="Icon" version="New (SVG)" />
            <span>Portnox Cloud</span>
          </div>
        </header>

        <section className="mail-content">
          <h1>Welcome to Portnox Cloud - let's complete your setup.</h1>
          <p>
            To gain access to your {organizationName} Portnox Cloud organization,
            please verify your mail domain below.
          </p>
          <p>
            To activate the mail domain <strong>{domainName}</strong> and complete
            your account setup, click the button below.
          </p>

          <div className="mail-cta">
            <Button
              label="Activate Mail Domain"
              type="Primary"
              state="Default"
              iconLeft1={false}
              iconRight={false}
            />
          </div>

          <p className="mail-expiry">
            This verification link expires in 48 hours. If you did not initiate
            this request, no action is required.
          </p>
        </section>

        <section className="mail-resources">
          <h2>Helpful resources</h2>
          <div className="resource-grid">
            <a href="https://docs.portnox.com/topics/quick_start" target="_blank" rel="noreferrer">Quick Start Guide</a>
            <a href="https://success.portnox.com/s/" target="_blank" rel="noreferrer">Support Center</a>
            <a href="https://docs.portnox.com/?utm_medium=website&utm_source=home" target="_blank" rel="noreferrer">Learn more</a>
            <a href="https://www.portnox.com/resources/" target="_blank" rel="noreferrer">Blog and Best Practices</a>
          </div>

          <p className="mail-help">
            For assistance, contact our support team at{' '}
            <a href="mailto:support@portnox.com">support@portnox.com</a> or visit the{' '}
            <a href="https://success.portnox.com/s/" target="_blank" rel="noreferrer">Support Portal</a>.
          </p>
        </section>

        <footer className="mail-footer">
          <span>© 2026 Portnox | Access Layers, all rights reserved.</span>
          <div>
            <a href="https://www.portnox.com/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a>
            <span> · </span>
            <a href="https://www.portnox.com/terms-of-service" target="_blank" rel="noreferrer">Terms of Service</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
