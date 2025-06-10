const ProjectCard = ({ description, title, icon, onClick }) => {
  return (
    <div className="flex-0 min-w-[280px] max-w-sm bg-white rounded-xl overflow-hidden border border-slate-300 shadow hover:shadow-lg transition-all duration-300 inter-300 p-4">
      <div className="m-2 inter-400">
        <h1>{title}</h1>
      </div>

      {/* Render icon di sini */}
      <div className="mb-2 flex items-center justify-center flex-row gap-2">
        {icon}
      </div>

      <div className="h-40">
        <p className="text-slate-600 inter-300">{description}</p>
      </div>
      <div className="flex-1 items-center justify-center pb-4">
        <button
          onClick={onClick}
          type="button"
          className="hover:cursor-pointer rounded-full bg-teal-500 text-white px-6 py-2 inter-300 font-medium transition-colors duration-200 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
        >
          View Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
