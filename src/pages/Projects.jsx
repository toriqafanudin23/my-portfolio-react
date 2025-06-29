import { TechIcons } from '../components/Icons';
import ProjectCard from '../components/ProjectCard';
import { descCrud, descProjects } from '../path/path';

const Projects = ({ scrollToSection, crudRef, ref, galleryRef }) => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 pt-16"
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

          <ProjectCard
            title="My Gallery"
            description="Fitur upload dan menampilkan gambar seperti media sosial, menggunakan React, Golang, dan Supabase untuk penyimpanan image. Project ini bisa menggantikan Google Drive."
            icon={<TechIcons />}
            onClick={() => scrollToSection(galleryRef)}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
