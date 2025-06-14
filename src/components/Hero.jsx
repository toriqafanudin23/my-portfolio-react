import { aboutMe, myImg } from '../path/path';

const Hero = () => {
  return (
    <div>
      <section id="about">
        <div className="sm:w-full w-4/5 max-w-[1200px] mx-auto pb-20">
          <div className="sm:w-50 sm:h-50 w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-slate-800 shadow-lg">
            <img
              src={myImg}
              alt="Profile Photo"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-center sm:text-3xl text-2xl font-semibold mb-4">
            About Me
          </h2>
          <div className="max-w-[600px] mx-auto text-gray-600 text-lg leading-8">
            <p className="sm:text-xl text-md text-center inter-300">
              {aboutMe}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
