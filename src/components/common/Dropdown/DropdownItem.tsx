import { ComponentProps, ReactNode } from 'react';

import { useDropdown } from '.';

interface DropdownItemProps extends ComponentProps<'div'> {
  children: ReactNode;
}

const DropdownItem = ({ children, ...props }: DropdownItemProps) => {
  const { open = false } = useDropdown();

  return open && <div {...props}>{children}</div>;
};

export default DropdownItem;
