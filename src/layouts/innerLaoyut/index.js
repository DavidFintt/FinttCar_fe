import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
  Button,
  Row,
  Col
} from 'reactstrap'

import React from "react";
import NavbarBase from "../../Components/navbar";
import ListVehicles from "../../Components/listVehicles";
import RoutesApp from '../../routes';
import Footer from '../../Components/footer';
import Home from '../../views/innerViews/home.css/index.';

export default function InnerLayout() {
  return (
    <>
      <NavbarBase />
      <Home/>
      {/* <Footer /> */}
    </>
  );
}