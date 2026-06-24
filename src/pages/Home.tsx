import hero from '../assets/Portfolio-HomeFinal.png';
import hiImg from '../assets/hi2.png';
import aboutMeDesign from '../assets/abtmedesign.png';
import skillsDesign from '../assets/skillsdesign.png';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/JS.png';
import phpLogo from '../assets/php.png';
import laravelLogo from '../assets/laravel.png';
import reactLogo from '../assets/react.png';
import figmaLogo from '../assets/figma.png';
import psLogo from '../assets/ps.png';
import aiLogo from '../assets/ai.png';

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16v12H4V6Zm2 2v.25l6 4.5 6-4.5V8H6Zm12 8V10.75l-5.4 4.05a1 1 0 0 1-1.2 0L6 10.75V16h12Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.94 6.5A1.44 1.44 0 1 1 4.06 6.5a1.44 1.44 0 0 1 2.88 0ZM4.3 9h5.28v11H4.3V9Zm7.79 0h5.06v1.5h.07c.7-1.22 2.43-2.5 5.01-2.5 5.36 0 6.35 3.53 6.35 8.12V20H23.2v-6.38c0-1.52-.03-3.47-2.11-3.47-2.12 0-2.45 1.66-2.45 3.36V20h-5.06V9Z" transform="scale(0.8) translate(-2 -2)" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.5v-1.7c-2.78.62-3.37-1.36-3.37-1.36-.46-1.2-1.12-1.52-1.12-1.52-.92-.64.07-.63.07-.63 1.02.07 1.56 1.08 1.56 1.08.9 1.58 2.37 1.12 2.95.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.02-2.74-.1-.26-.44-1.33.1-2.76 0 0 .83-.27 2.72 1.05A9.2 9.2 0 0 1 12 6.96c.85 0 1.71.12 2.51.35 1.88-1.32 2.71-1.05 2.71-1.05.54 1.43.2 2.5.1 2.76.64.71 1.02 1.62 1.02 2.74 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.81c0 .28.18.61.69.5A10.27 10.27 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3zm11.5 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
    </svg>
  );
}

export function HomePage() {
  return (
    <>
      <section className="hero hero-with-image" style={{ backgroundImage: `url(${hero})` }} aria-label="Homepage background"
      >
  <a href="#about-me" className="scroll-down" aria-label="Scroll to About Me">
    ↓
  </a>
</section>

      <div className="page">
      <section id="about-me" className="about-intro section-stack">
        <div className="about-copy-column">
          <h2 className="about-greeting"><img src={hiImg} alt="Hi" className="about-greeting-image" /></h2>
          <div className="about-separator" aria-hidden="true" />
          <p className="about-copy">The name's Kylie Marie Loyola Abueva. I am a Computer Science graduate who likes both software development and graphic design. <br /><br />I develop web and mobile applications, occasionally work on embedded systems, and create graphic designs that complement my projects.<br />You could say I'm a bit of a two-timer—not in the dating sense, but in the sense that I split my time between developing software and designing interactive experiences. <br /><br />I'm continuously learning new technologies and seeking opportunities to grow as a developer and designer while contributing to meaningful projects.<br /><br />This portfolio is a collection of my projects and creative works—where technology meets design.</p>
          <div className="about-contacts" aria-label="Contact links">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kyliemarie.abueva@gmail.com" target="_blank" rel="noreferrer" aria-label="Email" title="Email">
              <EmailIcon />
            </a>
            <a href="https://www.linkedin.com/in/kylie-abueva-4a8998332/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href="https://github.com/nul1exe" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
              <GithubIcon />
            </a>
            <a href="https://www.instagram.com/teriyakaii" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div className="about-visual" aria-hidden="true">
          <img src={aboutMeDesign} alt="" />
        </div>
      </section>
      
      <section className="profile-details section-stack">
        <div className="details-visual" aria-hidden="true">
          <img src={skillsDesign} alt="" />
        </div>
        <div className="details-panel">
          <h3 className="details-title">Skills</h3>
          <div className="details-separator" aria-hidden="true" />
          <div className="skills-logos">
            <img src={htmlLogo} alt="HTML" />
            <img src={cssLogo} alt="CSS" />
            <img src={jsLogo} alt="JavaScript" />
            <img src={phpLogo} alt="PHP" />
            <img src={laravelLogo} alt="Laravel" />
            <img src={reactLogo} alt="React" />
            <img src={figmaLogo} alt="Figma" />
            <img src={psLogo} alt="Photoshop" />
            <img src={aiLogo} alt="Illustrator" />
          </div>

          <h3 className="details-title" style={{ marginTop: '1.6rem' }}>Experiences</h3>
          <div className="details-separator" aria-hidden="true" />
          <div className="experience-copy">
            <strong>GeckoSolutions, Inc. | 16 June 2025 - 29 July 2025</strong>
            <div>Software Developer Intern</div>
            <div>Improved an existing web system by implementing new features and enhancing UI design</div>
            <div>Assisted in data encoding and system population for a school library management system</div>
          </div>

          <h3 className="details-title" style={{ marginTop: '1.6rem' }}>Education</h3>
          <div className="details-separator" aria-hidden="true" />
          <div className="education-copy">
            <div><strong>Bohol Island State University | 2022-2026</strong></div>
            <div>Bachelor of Science in Computer Science</div>
            <div>Cum Laude</div>
            <div>DOST Scholar</div>
            <div>Civil Service Exam (Professional Level) Passer - 2026</div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}