import { ComponentProps } from 'react';

const DropdownMenu = ({ children, ...props }: ComponentProps<'div'>) => {
  return <div {...props}>{children}</div>;
};

export default DropdownMenu;
