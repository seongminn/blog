const colors = {
  white: '#fff',
  white_48: '#ffffff7a',
  white_24: '#ffffff3d',

  black: '#222',

  grey_400: '#555555',
  grey_300: '#6F6F6F',
  grey_200: '#8B8B8B',
  grey_100: '#A5A5A5',

  light_grey_100: '#dfdfdf',
  light_grey_200: '#C1C1C1',

  primary_darker: '#886CFF',
  primary: '#b19fff',
  // primary_72: '#CDBAFF',
  // primary_48: '#EBD6FF',
  // primary_24: '#FFF2FF',
  primary_72: '#b19fff7a',
  primary_48: '#b19fff7a',
  primary_24: '#b19fff3d',
  primary_gradient:
    'linear-gradient(-225deg, #5271c4 0%, #b19fff 48%, #eca1fe 100%)',

  shadow: 'rgba(0, 0, 0, 0.09) 0px 2px 5px 0px',
};

const layouts = {
  maxWidth: '1280px',
};

const mq = {
  desktop: `@media screen and (min-width: 1280px)`,
  tablet: `@media screen and (min-width: 960px)`,
  mobile: `@media screen and (min-width: 768px)`,
};

const theme = {
  colors,
  mq,
  layouts,
};

export default theme;
