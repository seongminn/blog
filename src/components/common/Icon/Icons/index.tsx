import Github from './Github';
import Menu from './Menu';
import Search from './Search';

const iconName = {
  github: Github,
  search: Search,
  menu: Menu,
};

export type IconNames = keyof typeof iconName;

export default iconName;
