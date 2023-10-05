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
  
  import React , {useEffect, useState} from "react";
  import ListVehicles from '../../../Components/listVehicles';
  import './index.css'
  import CarouselApp from '../../../Components/caroussel';
  import VehicleService from '../../../services/vehicleService';



  export default function Home() {

    const vehicleService = new VehicleService();

    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
      this.findVehicles();
    }, [])

    const findVehicles = async () => {
      const vehicle = await this.vehicleService.getAll()
      console.log(vehicle)
    }
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