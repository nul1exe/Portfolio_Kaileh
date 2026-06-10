import { AnimatePresence, motion } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { SiteHeader } from './components/SiteHeader';
import { GraphicDesignPage } from './pages/GraphicDesign';
import { HomePage } from './pages/Home';
import { ProgrammingPage } from './pages/Programming';

const pageVariants = {
  initial: { opacity: 0, y: 16, filter: 'blur(10px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -12, filter: 'blur(10px)' },
};

function App() {
  const location = useLocation();

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <SiteHeader />

      <main>
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.45, ease: 'easeOut' }}>
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/programming" element={<ProgrammingPage />} />
              <Route path="/graphic-design" element={<GraphicDesignPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;