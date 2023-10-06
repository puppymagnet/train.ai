import { 
    Image,
    Flex,
    Box,
    Spacer,
    Avatar,
    Select
} from '@chakra-ui/react';

import React from 'react';
import gymicon from '../../../assets/gymicon.webp';
import defaultavatar from '../../../assets/defaultavatar.webp';
import NavMenu, { MenuOption } from './NavMenu';
import { HamburgerIcon } from '@chakra-ui/icons';

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
            <Box p='4'>
                <Select placeholder='Choose Workout'>
                    <option value='Push'>Push</option>
                    <option value='Pull'>Pull</option>
                    <option value='Legs'>Legs</option>
                </Select>
            </Box>
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