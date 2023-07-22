import { ComponentProps, PropsWithChildren } from 'react';

interface AnchorProps extends ComponentProps<'a'> {
  href: string;
}

const Anchor = (props: PropsWithChildren<AnchorProps>) => {
  const {
    href,
    children,
    target = '_blank',
    rel = 'noopener norefferer',
  } = props;

  return (
    <a href={href} target={target} rel={rel}>
      {children}
    </a>
  );
};

export default Anchor;
