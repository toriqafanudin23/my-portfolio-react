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

          <div class="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6 border mt-10 rounded-xl border-slate-400 border-dashed">
            <div class="flex w-0 flex-1 items-center">
              <svg
                class="size-5 shrink-0 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M15.621 4.379a3 3 0 0 0-4.242 0l-7 7a3 3 0 0 0 4.241 4.243h.001l.497-.5a.75.75 0 0 1 1.064 1.057l-.498.501-.002.002a4.5 4.5 0 0 1-6.364-6.364l7-7a4.5 4.5 0 0 1 6.368 6.36l-3.455 3.553A2.625 2.625 0 1 1 9.52 9.52l3.45-3.451a.75.75 0 1 1 1.061 1.06l-3.45 3.451a1.125 1.125 0 0 0 1.587 1.595l3.454-3.553a3 3 0 0 0 0-4.242Z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="ml-4 flex min-w-0 flex-1 gap-2">
                <span class="truncate font-medium">
                  resume_fullstack_developer.pdf
                </span>
                <span class="shrink-0 text-gray-400">4.5mb</span>
              </div>
            </div>
            <div class="ml-4 shrink-0">
              <a
                href="#"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
