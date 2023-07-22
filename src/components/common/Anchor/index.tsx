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
    ...rest
  } = props;

  return (
    <a href={href} target={target} rel={rel} {...rest}>
      {children}
    </a>
  );
};

export default Anchor;
