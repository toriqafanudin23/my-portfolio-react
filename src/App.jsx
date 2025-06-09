import { useRef } from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Header from './components/Header';

function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const orderRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header
        onNavigate={(section) => {
          switch (section) {
            case 'Home':
              scrollToSection(homeRef);
              break;
            case 'Projects':
              scrollToSection(projectsRef);
              break;
            case 'Education':
              scrollToSection(educationRef);
              break;
            case 'Order':
              scrollToSection(orderRef);
              break;
            default:
              break;
          }
        }}
      />

      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={orderRef}>
        <div className="h-screen flex items-center justify-center bg-yellow-100">
          <h1 className="text-4xl">Order Section</h1>
        </div>
      </div>
      <div ref={educationRef}>
        <div className="h-screen flex items-center justify-center bg-green-100">
          <h1 className="text-4xl">Education Section</h1>
        </div>
      </div>
      <div className="flex items-center justify-center bg-slate-800 py-10 inter-300 text-white">
        <p>&copy; 2025 Freelance React Developer. All rights reserved. Avan!</p>
      </div>
    </>
  );
}

export default App;
