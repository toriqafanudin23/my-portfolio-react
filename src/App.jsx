import { useRef } from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { Order } from './pages/Order';
import { Education } from './pages/Education';
import Crud from './pages/Crud';
import UploadImages from './pages/UploadImages';
import UjiCobaAR from './pages/UjiAR';

function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const orderRef = useRef(null);
  const crudRef = useRef(null);
  const galleryRef = useRef(null);

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
            case 'CRUD':
              scrollToSection(crudRef);
              break;
            case 'Gallery':
              scrollToSection(galleryRef);
            default:
              break;
          }
        }}
      />

      <Home ref={homeRef} />
      <Projects
        ref={projectsRef}
        scrollToSection={scrollToSection}
        crudRef={crudRef}
        galleryRef={galleryRef}
      />
      <Education ref={educationRef} />
      <Crud ref={crudRef} />
      <UploadImages ref={galleryRef} />
      <Order ref={orderRef} />
      <UjiCobaAR />
      <Footer />
    </>
  );
}

export default App;
