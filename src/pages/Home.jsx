import Header from '../components/Header';
import Hero from './hero';

const Home = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
