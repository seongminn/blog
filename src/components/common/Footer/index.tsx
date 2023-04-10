import { FunctionComponent } from 'react';

import * as Styled from './style';

const Footer: FunctionComponent = function () {
  return (
    <Styled.Root>
      Thank You for Visiting My Blog, Have a Good Day 😆
      <br />© 2021 Developer Hyun, Powered By Gatsby.
    </Styled.Root>
  );
};

export default Footer;
