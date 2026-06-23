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
  { title: 'Hazhen', src: Hazhen },
];

export function GraphicDesignPage() {
  return (
    <div className="page graphic-design-page">
      <section className="panel section-stack design-hero design-hero-card">
        <div className="design-hero-copy">
          <p className="eyebrow">Branding Design | Print &amp; Marketing Design | Apparel Design | Digital Illustration</p>
          <p>Take a look at some of the designs I've created along the way.</p>
        </div>
        <img src={topPartDesign} alt="Graphic design decoration" className="design-hero-image" />
      </section>

      <section className="design-grid" aria-label="Graphic design gallery">
        {designs.map((d) => (
          <motion.figure key={d.title} className="design-card" whileHover={{ y: -6 }}>
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