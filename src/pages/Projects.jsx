import { TechIcons } from '../components/Icons';
import ProjectCard from '../components/ProjectCard';
import { descCrud, descProjects } from '../path/path';

const Projects = ({ scrollToSection, crudRef, ref }) => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-gray-100 px-4 pt-16"
      ref={ref}
    >
      <div className="max-w-[1200px] w-full text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-800 mb-6">
          Projects
        </h1>
        <p className="text-gray-600 max-w-[700px] mx-auto inter-300 sm:text-xl text-md">
          {descProjects}
        </p>

        <div className="mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex items-center justify-center sm:flex-row flex-col">
          <ProjectCard
            title="CRUD Data Management"
            description={descCrud}
            icon={<TechIcons />}
            onClick={() => scrollToSection(crudRef)}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
