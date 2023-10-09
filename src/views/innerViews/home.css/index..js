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

    const [vehicles, setVehicles] = useState([{model: '', year: ''}]);


    const findVehicles = async () => {
      const vehicle = await vehicleService.getAll()
      setVehicles(vehicle)
  
    }

    useEffect(() => {
      // Código a ser executado após a atualização do estado
      console.log(vehicles);
    }, [vehicles]);

    useEffect(() => {
      findVehicles();
    }, [])
    return (
      <>
        {/* <CarouselApp /> */}
        <p>Visualize abaixo os carros disponíveis em nossas concessionárias cadastradas:</p>
        <Col md={6}>
          <Row>
            {vehicles.map(vehicle => (
              <ListVehicles img='' model={vehicle.model} year={vehicle.year} manufacturer={vehicle.manufacturer} capacity={vehicle.capacity} dealership={vehicle.dealership} />
            ))}
          </Row>
        </Col>
      </>
    );
  }