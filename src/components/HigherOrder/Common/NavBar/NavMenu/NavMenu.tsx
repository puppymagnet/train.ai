 import React from 'react';
import { 
  Menu, 
  MenuButton, 
  MenuItem,
  IconButton,
  Icon,
  MenuList, 
  MenuIcon
} from '@chakra-ui/react';

export interface INavMenuProps {
  menuIcon: React.ReactElement<any, string | React.JSXElementConstructor<any>>; 
  menuItems: MenuOption[];
}

export interface MenuOption {
  label: string;
  url?: string;
  command?: string;
}

const NavMenu: React.FC<INavMenuProps> = ({
  menuIcon,
  menuItems
}) => {
  return (
    <Menu>
        <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={menuIcon}
            variant='outline'
        />
        <MenuList>
          {menuItems.map(item => {
            return (
              <MenuItem >
                {item.label}
              </MenuItem>
            )
            })
          }
        </MenuList>
    </Menu>
  )
}

export default NavMenu
