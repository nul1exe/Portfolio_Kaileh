import { motion } from 'framer-motion';
import { useState } from 'react';
import topPartDesign from '../assets/toppartDesign.png';
import boholanoProject from '../assets/projects/boholanoProject.png';
import diinappProject from '../assets/projects/diinappProject.png';
import diinwebProject from '../assets/projects/diinwebProject.png';
import idfaiProject from '../assets/projects/idfaiProject.png';
import kaonbraderProject from '../assets/projects/kaonbraderProject.png';
import naveeProject from '../assets/projects/naveeProject.png';
import ppmsProject from '../assets/projects/ppmsProject.png';

type ProjectCard = {
  title: string;
  description: string;
  image: string;
  github: string;
};

const projectCards: ProjectCard[] = [
  {
    title: 'DIIN',
    description: 'A GPS-based bus tracking and ETA system for real-time location monitoring using GT06 GPS hardware and a React Native mobile application and web.',
    image: diinappProject,
    github: '#',
  },
  {
    title: 'IDFAi',
    description: 'An ID verification system for validating students, senior citizens, and PWDs using Python and web technologies.',
    image: idfaiProject,
    github: '#',
  },
  {
    title: 'PPMS',
    description: 'Assisted the development of a web-based system for managing procurement for projects using Python.',
    image: ppmsProject,
    github: '#',
  },
  {
    title: 'Kaon Brader',
    description: 'A recipe sharing platform that allows users to post, browse, and manage recipes using Laravel 12.',
    image: kaonbraderProject,
    github: '#',
  },
  {
    title: 'Navee',
    description: 'A smart blind stick tracking system with real-time location monitoring and obstacle detection using NodeMCU (ESP8266), SIM800L, and a web-based API system.',
    image: naveeProject,
    github: '#',
  },
  {
    title: 'Boholano',
    description: 'A responsive website showcasing tourist spots in Bohol with interactive maps, travel guides, and multimedia galleries to help visitors plan trips.',
    image: boholanoProject,
    github: '#',
  },
];

const diinImages = [
  { src: diinappProject, alt: 'DIIN App preview' },
  { src: diinwebProject, alt: 'DIIN Web preview' },
];

function ProjectImageCard({ project }: { project: ProjectCard }) {
  const isDiin = project.title === 'DIIN';
  const [diinIndex, setDiinIndex] = useState(0);
  const currentImage = isDiin ? diinImages[diinIndex] : { src: project.image, alt: `${project.title} preview` };

  const previousDiinImage = () => {
    setDiinIndex((current) => (current - 1 + diinImages.length) % diinImages.length);
  };

  const nextDiinImage = () => {
    setDiinIndex((current) => (current + 1) % diinImages.length);
  };

  return (
    <motion.article className="program-card" whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 280, damping: 22 }}>
      <div className="program-card-media">
        <img src={currentImage.src} alt={currentImage.alt} className="program-card-image" />
        {isDiin && (
          <div className="program-card-controls" aria-label="DIIN image navigation">
            <button type="button" className="program-card-control" onClick={previousDiinImage} aria-label="Previous DIIN image">
              <span aria-hidden="true">←</span>
            </button>
            <button type="button" className="program-card-control" onClick={nextDiinImage} aria-label="Next DIIN image">
              <span aria-hidden="true">→</span>
            </button>
          </div>
        )}
      </div>
      <div className="program-card-body">
        <div>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
        <a className="program-card-link" href={project.github} target="_blank" rel="noreferrer">
          GitHub Repository
        </a>
      </div>
    </motion.article>
  );
}

export function ProgrammingPage() {
  return (
    <div className="page programming-page">
      <section className="panel section-stack programming-hero programming-hero-card">
        <div className="programming-hero-copy">
          <p>Scroll down to see the projects I've worked on throughout my college journey.</p>
        </div>
        <img src={topPartDesign} alt="Programming decoration" className="programming-hero-image" />
      </section>

      <section className="program-grid" aria-label="Programming projects">
        {projectCards.map((project) => (
          <ProjectImageCard key={project.title} project={project} />
        ))}
      </section>
    </div>
  );
}