import Email from './Email';
import Github from './Github';
import Hashtag from './Hashtag';
import Instagram from './Instagram';
import Menu from './Menu';
import Rss from './Rss';
import Search from './Search';

const iconName = {
  github: Github,
  search: Search,
  menu: Menu,
  rss: Rss,
  email: Email,
  instagram: Instagram,
  hashtag: Hashtag,
};

export type IconNames = keyof typeof iconName;

export default iconName;
