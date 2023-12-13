import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';

import Icons, { IconNames } from './Icons';

import theme from '@/styles/theme';

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  iconName: IconNames;
  hasCursor?: boolean;
  size?: string;
  color?: string;
  className?: string;
}

const Icon = (props: IconProps) => {
  const { iconName, hasCursor = true, size = '24', color, ...rest } = props;

  const IconComponent = Icons[iconName];

  return (
    <Styled.Wrapper size={size} color={color} hasCursor={hasCursor} {...rest}>
      <IconComponent width="100%" height="100%" />
    </Styled.Wrapper>
  );
};

export default Icon;

const Styled = {
  Wrapper: styled.div<Pick<IconProps, 'size' | 'color' | 'hasCursor'>>`
    ${({ size, color, hasCursor }) => css`
      width: ${size}px;
      height: ${size}px;

      color: ${color};
      cursor: ${hasCursor && 'pointer'};

      & * {
        fill: ${color ? 'currentColor' : ''};
      }
    `}
  `,
};
