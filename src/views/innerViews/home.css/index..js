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
  
  export default function Home() {
    return (
      <>
        <div className='div-title-home'>
          <h1 className='title-home'>Welcome to FinttCar Dealerships !</h1>
        </div>
        <p>Visualize abaixo os carros disponíveis em nossas concessionárias cadastradas:</p>
        <Row>
          <ListVehicles img='' model='cruze' year='2023' manufacturer='chevrolet' capacity='5' dealership='Autonation' />
          <ListVehicles img='' model='cruze' year='2023' manufacturer='chevrolet' capacity='5' dealership='Autonation' />
          <ListVehicles img='' model='cruze' year='2023' manufacturer='chevrolet' capacity='5' dealership='Autonation' />
        </Row>
      </>
    );
  }