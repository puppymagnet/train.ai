import { 
    Image,
    Flex,
    Box,
    Spacer,
    Avatar,
    Select
} from '@chakra-ui/react';

import React from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';

import defaultavatar from '../../../../assets/defaultavatar.webp';
import NavMenu, { MenuOption } from './NavMenu/NavMenu';
import NavDropDown from './NavDropDown/NavDropDown';

const NavBar = () => {

  const userAvatar = <Avatar 
    name='John Smith' 
    src={defaultavatar}
    size={'sm'}
  />

  const profileMenuOptions: MenuOption[] = [
    {
        label: 'Profile'
    },
    {
        label: 'Friends'
    },
    {
        label: 'Settings'
    }
  ];

  const mainMenuOptions: MenuOption[] = [
    {
        label: 'Home'
    },
    {
        label: 'Gymfeed'
    },
  ];

  return (    
    <Box>
        <Flex>
            <Box p='4'>
                <NavMenu 
                    menuIcon={<HamburgerIcon/>}
                    menuItems={mainMenuOptions}
                />
            </Box>
            <Spacer/>
            <NavDropDown />
            <Spacer />
            <Box p='4'>
                <NavMenu 
                    menuIcon={userAvatar}
                    menuItems={profileMenuOptions}
                />
            </Box>
        </Flex>
    </Box>
    )
}

export default NavBar