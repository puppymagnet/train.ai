import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from './HigherOrder/Common/NavBar/NavBar';

const Layout = () => {
  return (
    <>
        <NavBar/>
        <Outlet/>
    </>
  );   
};

export default Layout