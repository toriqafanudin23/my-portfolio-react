import { GithubIcon, InstagramIcon } from '../path/path';

const Header = ({ onNavigate }) => {
  return (
    <div className="flex items-center justify-center w-full mb-10 h-16 bg-slate-800 fixed top-0 z-50">
      <div className="flex-1 flex items-center h-full pl-6 gap-4">
        <GithubIcon />
        <InstagramIcon />
      </div>

      <div className="hidden sm:flex flex-1 h-full w-full items-center justify-center">
        <ul className="flex justify-center text-lg inter-400 text-white h-full">
          <Bar title="Home" onClick={() => onNavigate('Home')} />
          <Bar title="Projects" onClick={() => onNavigate('Projects')} />
          <Bar title="Order" onClick={() => onNavigate('Order')} />
          <Bar title="Education" onClick={() => onNavigate('Education')} />
        </ul>
      </div>

      <div className="flex sm:hidden pr-6">
        <button aria-label="Open menu" className="cursor-pointer">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Bar = ({ title, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="cursor-pointer h-full flex items-center justify-center hover:border-b-4 hover:border-amber-300 px-6 inter-300 border-b-4 border-slate-800 hover:text-amber-300"
    >
      {title}
    </li>
  );
};

export default Header;
