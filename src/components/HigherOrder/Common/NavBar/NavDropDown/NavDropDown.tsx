import React from 'react'
import {
    Box,
    Select
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

import { navOption, navigationOptions } from './NavDropDownOptions';

const NavDropDown = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const getRouteName = (pathName:string, navigationOptions: navOption[]) => {
        const routeLabel = navigationOptions.find(navOption => 
            navOption.route === pathName.slice(1)
        )?.label;
        console.log(`path: ${pathName.slice(1, -1)}`)
        if (!!routeLabel) { return routeLabel };
        return navigationOptions[0].label
    };
    const currentRoute = getRouteName(location.pathname, navigationOptions);
    
    const handleSelectionChange = (route:string) => {
        navigate('/' + route);
    };

    console.info()

    return (
    <Box p='4'>
        <Select 
            onChange={(e) => handleSelectionChange(e.target.value)}
            placeholder={currentRoute}
        >
            {navigationOptions.filter(navOption => navOption.route !== location.pathname.slice(1)).map((navOption) => {
                return (
                    <option key={navOption.label} value={navOption.route}>
                        {navOption.label}
                    </option>
                )
            }
            )}
        </Select>
    </Box>
  )
}

export default NavDropDown