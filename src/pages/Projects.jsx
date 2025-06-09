import ProjectCard from '../components/ProjectCard';
import { descCrud, myImg } from '../path/path';
import TechIcons from '../components/Icons';

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-gray-100 px-4 pt-16"
    >
      <div className="max-w-[1200px] w-full text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-800 mb-6">
          Projects
        </h1>
        <p className="text-lg text-gray-600 max-w-[700px] mx-auto">
          Berikut adalah beberapa proyek yang telah saya kerjakan, termasuk
          aplikasi web, aplikasi mobile, dan layanan backend.
        </p>

        <div className="mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex items-center justify-center sm:flex-row flex-col">
          <ProjectCard
            image={myImg}
            title="CRUD Data Management"
            description={descCrud}
            icon={<TechIcons />}
          />
          <ProjectCard image="/images/image2.jpg" />
          <ProjectCard image="/images/image3.jpg" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
