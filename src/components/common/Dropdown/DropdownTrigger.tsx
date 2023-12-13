import { ReactNode } from 'react';

import { useDropdown } from '.';

interface DropdownTrigger {
  as: ReactNode;
}

const DropdownTrigger = ({ as }: DropdownTrigger) => {
  const { toggleOpen } = useDropdown();

  return <div onClick={toggleOpen}>{as}</div>;
};

export default DropdownTrigger;
