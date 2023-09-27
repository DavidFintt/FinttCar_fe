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
  import ListVehicles from '../../../Components/listVehicles';
  import './index.css'
  import CarouselApp from '../../../Components/caroussel';
  export default function Home() {
    return (
      <>
        <CarouselApp />
        <p>Visualize abaixo os carros disponíveis em nossas concessionárias cadastradas:</p>
        <Row>
          <ListVehicles img='' model='cruze' year='2023' manufacturer='chevrolet' capacity='5' dealership='Autonation' />
          <ListVehicles img='' model='cruze' year='2023' manufacturer='chevrolet' capacity='5' dealership='Autonation' />
          <ListVehicles img='' model='cruze' year='2023' manufacturer='chevrolet' capacity='5' dealership='Autonation' />
        </Row>
      </>
    );
  }