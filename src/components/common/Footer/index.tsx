import { Link } from 'gatsby';
import { FunctionComponent } from 'react';

import * as Styled from './style';

import Icon from '@/components/common/Icon';

const Footer: FunctionComponent = function () {
  return (
    <Styled.Root>
      <Styled.Contact>
        <Icon iconName="rss" size="20" />
        <Link to="https://github.com/seongminn">
          <Icon iconName="github" />
        </Link>
      </Styled.Contact>
      <p>
        Thank You for Visiting My Blog, Have a Good Day 🍀
        <br />
        Copyright © 2023, All Right Reserved.
      </p>
    </Styled.Root>
  );
};

export default Footer;
