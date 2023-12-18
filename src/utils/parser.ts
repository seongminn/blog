export const includesString = (text: string, target: string): boolean =>
  text.replace(' ', '').toLowerCase().includes(target);
