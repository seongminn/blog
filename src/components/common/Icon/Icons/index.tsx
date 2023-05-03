import Github from './Github';
import Menu from './Menu';
import Rss from './Rss';
import Search from './Search';

const iconName = {
  github: Github,
  search: Search,
  menu: Menu,
  rss: Rss,
};

export type IconNames = keyof typeof iconName;

export default iconName;
