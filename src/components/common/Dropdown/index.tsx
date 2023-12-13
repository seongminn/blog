import { ComponentProps, createContext, useContext } from 'react';

import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';
import DropdownTrigger from './DropdownTrigger';

interface DropdownProps extends DropdownContextType, ComponentProps<'div'> {}

type DropdownContextType = {
  open?: boolean;
  toggleOpen?: () => void;
  label?: string;
};

export const DropdownContext = createContext<DropdownContextType>({
  open: false,
  toggleOpen: () => {
    //
  },
  label: '',
});

export const useDropdown = () => useContext(DropdownContext);

const Dropdown = ({ children, open, toggleOpen, ...props }: DropdownProps) => {
  return (
    <DropdownContext.Provider value={{ ...props, open, toggleOpen }}>
      <div>{children}</div>
    </DropdownContext.Provider>
  );
};

Dropdown.Item = DropdownItem;
Dropdown.Menu = DropdownMenu;
Dropdown.Trigger = DropdownTrigger;

export default Dropdown;
