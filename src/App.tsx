import ButtonFigmaMatrix from '../ButtonFigmaMatrix';
import TextStylesPreview from '../TextStylesPreview';
import Logo from '../Logo';

export function App() {
  return (
    <main className="sg-page">
      <header className="sg-header">
        <Logo property1="New full" version="New" />
        <p>GuestPass style guide extracted from branch style-guide-guestpass-prototype.</p>
      </header>

      <section className="sg-section">
        <h2>Buttons</h2>
        <ButtonFigmaMatrix />
      </section>

      <section className="sg-section">
        <h2>Typography</h2>
        <TextStylesPreview />
      </section>
    </main>
  );
}
