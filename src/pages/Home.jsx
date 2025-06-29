// import Header from '../components/Header';
import Hero from '../components/Hero';

const Home = ({ ref }) => {
  return (
    <div ref={ref} className="flex justify-center items-center flex-col pt-32">
      {/* Tambahkan padding top 16 di sini */}
      <Hero />
    </div>
  );
};

export default Home;
