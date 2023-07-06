import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SideBar = styled.aside<{ height: number }>`
  display: none;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  padding-top: ${props => `${props.height}px`};

  ${({ theme }) => css`
    ${theme.mq.mobile} {
      display: block;
      width: 180px;
    }
    ${theme.mq.tablet} {
      display: block;
      width: 240px;
    }
    ${theme.mq.desktop} {
      display: block;
      width: 280px;
    }
  `}
`;

export const TocNav = styled.nav`
  position: sticky;
  top: 100px;
`;

export const TocList = styled.li<{ parsedMargin: number }>`
  position: relative;
  display: block;
  font-size: 15px;
  padding-left: 16px;
  margin-left: ${props => `${props.parsedMargin}px`};
  line-height: 30px;
  color: ${({ theme }) => theme.colors.grey_100};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  transition: all 30ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }

  &.toc-active {
    color: ${({ theme }) => theme.colors.black};
    border-image: ${({ theme }) => theme.colors.primary_gradient};

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      display: block;
      width: 2px;
      height: 50%;
      background: ${({ theme }) => theme.colors.primary_gradient};
      transform: translateY(-50%);
    }
  }
`;
