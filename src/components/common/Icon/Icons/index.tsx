import Github from './Github';
import Google from './Google';
import Magnifier from './Magnifier';

const iconName = { google: Google, github: Github, magnifier: Magnifier };

export type IconNames = keyof typeof iconName;

export default iconName;
