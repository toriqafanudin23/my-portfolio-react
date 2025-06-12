import { ReactIcon, GoLangIcon, UbuntuIcon, PostgresIcon } from '../path/path';

export const TechIcons = () => {
  return (
    <div className="flex flex-row gap-1">
      <ReactIcon size={36} />
      <GoLangIcon size={36} />
      <UbuntuIcon size={36} />
      <PostgresIcon />
    </div>
  );
};

export const BasicIcon = () => {
  return (
    <div className="flex flex-row gap-1">
      <ReactIcon size={36} />
      <UbuntuIcon size={36} />
    </div>
  );
};
