import { useCallback } from 'react';
import { animateScroll } from 'react-scroll';

import * as Styled from './style';

import { useObserver } from '@/hooks/useObserver';

interface TOCProps {
  height: number;
}

const TOC = (props: TOCProps) => {
  const { headings, activeHeadingId } = useObserver();

  const parser: { [key: string]: number } = {
    H1: 10,
    H2: 20,
    H3: 30,
    H4: 40,
  };

  const handleClickHeading = useCallback((itemId: string) => {
    const node = document.getElementById(itemId);

    if (!node) return;
    if (typeof window === 'undefined') return;

    const rect = node.getBoundingClientRect();
    const scrollTop = window.scrollY;

    animateScroll.scrollTo(rect.top + scrollTop - 65, {
      duration: 0,
      smooth: true,
    });
  }, []);

  return (
    <Styled.SideBar height={props.height}>
      <Styled.TocNav>
        <ul>
          {headings.map(heading => (
            <Styled.TocList
              key={heading.id}
              className={heading.id === activeHeadingId ? 'toc-active' : ''}
              onClick={() => handleClickHeading(heading.id)}
              parsedMargin={parser[heading.nodeName]}
            >
              {heading.innerText}
            </Styled.TocList>
          ))}
        </ul>
      </Styled.TocNav>
    </Styled.SideBar>
  );
};

export default TOC;
