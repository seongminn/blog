import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';

import Icons, { IconNames } from './Icons';

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  iconName: IconNames;
  color?: string;
  size?: string;
  hasCursor?: boolean;
  className?: string;
}

function Icon(props: IconProps) {
  const { iconName, color, size = '24', hasCursor = true, ...rest } = props;
  const IconComponent = Icons[iconName];

  return (
    <Styled.Wrapper size={size} color={color} hasCursor={hasCursor} {...rest}>
      <IconComponent width="100%" height="100%" />
    </Styled.Wrapper>
  );
}

export default Icon;

const Styled = {
  Wrapper: styled.div<Pick<IconProps, 'color' | 'size' | 'hasCursor'>>`
    ${({ color, size, hasCursor }) => css`
      color: ${color};
      width: ${size}px;
      height: ${size}px;
      cursor: ${hasCursor && 'pointer'};

      & * {
        fill: ${color ? 'currentColor' : ''};
      }
    `}
  `,
};
