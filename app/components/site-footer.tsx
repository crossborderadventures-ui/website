const wa = "919356378178";
const waLink = (message: string) => `https://wa.me/${wa}?text=${encodeURIComponent(message)}`;

export default function SiteFooter() {
  return (
    <footer>
      <a className="wordmark wordmark-footer" href="/" aria-label="Crossborder Adventures home">
        <img className="wordmark-logo" src="/MASTER%20LOGO%201.png" alt="Crossborder Adventures" />
      </a>
      <div className="footer-contact">
        <a href="tel:+919356378178">+91 93563 78178</a>
        <a href="mailto:crossborderadventures@gmail.com">crossborderadventures@gmail.com</a>
        <a href="https://www.instagram.com/crossborderadventures/" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
        <a href={waLink("Hello Crossborder Adventures!")} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>
        <span>Pune, Maharashtra, India</span>
      </div>
      <div className="footer-bottom">
        <span>© 2026 CROSSBORDER ADVENTURES</span>
        <span>MADE FOR THE WAY OUT THERE.</span>
        <a href="mailto:crossborderadventures@gmail.com?subject=Privacy%20policy">PRIVACY · CONTACT</a>
      </div>
    </footer>
  );
}
