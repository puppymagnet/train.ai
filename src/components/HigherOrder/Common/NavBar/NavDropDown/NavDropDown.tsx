import React from 'react'
import {
    Box,
    Select
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { navigationOptions } from './NavDropDownOptions';

const NavDropDown = () => {
    const navigate = useNavigate();
    const handleSelectionChange = (route:string) => {
        navigate('/' + route);
    };

    return (
    <Box p='4'>
        <Select 
            onChange={(e) => handleSelectionChange(e.target.value)}
        >
            {navigationOptions.map((navOP) => {
                return (
                    <option key={navOP.label} value={navOP.route}>
                        {navOP.label}
                    </option>
                )
            }
            )}
        </Select>
    </Box>
  )
}

export default NavDropDown