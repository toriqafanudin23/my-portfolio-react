const Hero = () => {
  return (
    <div>
      <section id="about">
        <div className="sm:w-full w-4/5 max-w-[1200px] mx-auto">
          <div className="sm:w-50 sm:h-50 w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-slate-800 shadow-lg">
            <img
              src="https://bxehantrfbyenzvyrfoc.supabase.co/storage/v1/object/public/merge-bucket//fotoku.jpg"
              alt="Profile Photo"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-center sm:text-3xl text-2xl font-semibold mb-4">
            About Me
          </h2>
          <div className="max-w-[600px] mx-auto text-gray-600 text-lg leading-8">
            <p className="sm:text-xl text-md text-center inter-300">
              I am a freelancer specializing in developing web and mobile
              applications using React technology. On the backend, I use Go
              (Golang) to build robust REST APIs.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <button
            type="button"
            className="rounded-full shadow-md bg-info border border-info px-6 py-2 text-sm font-medium tracking-wide text-onInfo transition-colors duration-200 hover:bg-teal-400 hover:text-white text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-info active:opacity-100 active:outline-offset-0 disabled:opacity-75 disabled:cursor-not-allowed hover:cursor-pointer"
          >
            View Projects
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
