import { motion } from 'framer-motion';
import topPartDesign from '../assets/toppartDesign.png';
import abtMeDesignWbg from '../assets/abtmedesign.png';
import skillsDesignWbg from '../assets/skillsdesign.png';
import DIIN from '../assets/designs/DIIN_tp.png';
import Compass from '../assets/designs/compass.jpg';
import IDFAi from '../assets/designs/IDFAiLogo.png';
import Kaonbrader from '../assets/designs/kaonbraderWhite.png';
import MLLogo from '../assets/designs/ML_Logo.png';
import Jagdusa from '../assets/designs/JagdusaBanner.png';
import OJTShirt from '../assets/designs/OJT-Shirt4.png';
import Komsai from '../assets/designs/KomsaiLanyardQR.png';
import Poster from '../assets/designs/poster.jpg';
import CinemaBoothPosterCS from '../assets/designs/cscinebooth.jpg';
import CinemaBoothPosterCS1 from '../assets/designs/cscinebooth1.jpg';
import WelcomeCSPoster from '../assets/designs/csposter.jpg';
import GraduationTarpGeraldine from '../assets/designs/GraduationTarp_GERALDINE.png';
import GraduationTarpMia from '../assets/designs/GraduationTarp_MIA.png';
import Hazhen from '../assets/designs/HazhenPinkBlueBGLogo.png';
import Kalimari from '../assets/designs/kalimari.png';
import Olango from '../assets/designs/Olango Island art.png';
import KylieChibi from '../assets/designs/programminpageDesign.png';
import KylieArt from '../assets/designs/Portflio-Home2.png';
import Jersey from '../assets/designs/softball-jersey.png';

const designs = [
  { title: 'Compass', src: Compass },
  { title: 'About Me', src: abtMeDesignWbg },
  { title: 'DesignXCode', src: skillsDesignWbg },
  { title: 'DIIN', src: DIIN },
  { title: 'IDFAi', src: IDFAi },
  { title: 'ML Logo', src: MLLogo },
  { title: 'Kaonbrader', src: Kaonbrader },
  { title: 'Jagdusa Banner', src: Jagdusa },
  { title: 'OJT Shirt', src: OJTShirt },
  { title: 'Komsai Lanyard', src: Komsai },
  { title: 'Poster', src: Poster },
  { title: 'Kalimari', src: Kalimari },
  { title: 'Olango Island', src: Olango },
  { title: 'Kylie Chibi', src: KylieChibi },
  { title: 'Kylie Art', src: KylieArt },
  { title: 'Jersey', src: Jersey },
  { title: 'Cinema Booth Poster CS', src: CinemaBoothPosterCS },
  { title: 'Cinema Booth Poster CS1', src: CinemaBoothPosterCS1 },
  { title: 'Welcome CS Poster', src: WelcomeCSPoster },
  { title: 'Graduation Tarpaulin', src: GraduationTarpGeraldine },
  { title: 'Graduation Tarpaulin', src: GraduationTarpMia },
  { title: 'Hazhen', src: Hazhen },
];

const sectionMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function GraphicDesignPage() {
  return (
    <div className="page graphic-design-page">
      <motion.section
        className="panel section-stack design-hero design-hero-card"
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <div className="design-hero-copy">
          <p className="eyebrow">Branding Design | Print &amp; Marketing Design | Apparel Design | Digital Illustration</p>
          <p>Take a look at some of the designs I've created along the way.</p>
        </div>
        <img src={topPartDesign} alt="Graphic design decoration" className="design-hero-image" />
      </motion.section>

      <section className="design-grid" aria-label="Graphic design gallery">
        {designs.map((d, index) => (
          <motion.figure
            key={`${d.title}-${index}`}
            className="design-card"
            variants={sectionMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            whileHover={{ y: -6 }}
          >
            <div className="design-media">
              <img src={d.src} alt={d.title} />
            </div>
            <figcaption className="design-caption">{d.title}</figcaption>
          </motion.figure>
        ))}
      </section>
    </div>
  );
}