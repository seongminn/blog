import Github from './Github';
import Google from './Google';

const iconName = { google: Google, github: Github };

export type IconNames = keyof typeof iconName;

export default iconName;
