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
  import '@fortawesome/fontawesome-free/css/all.css';




  export default function Home() {

    const vehicleService = new VehicleService();

    const [vehicles, setVehicles] = useState([{model: '', year: '', manufacturer: '', capacity:'', dealership: ''}]);


    const findVehicles = async () => {
      const vehicle = await vehicleService.getAll()
      setVehicles(vehicle)
  
    }

    useEffect(() => {
      findVehicles();
    }, [])
    return (
      <>
        {/* <CarouselApp /> */}
        <p>Visualize abaixo os carros disponíveis em nossas concessionárias cadastradas:</p>
        <div className="highlight-container">
          <div className="highlight">
        <span><i class="fa fa-star" aria-hidden="true"></i> highlights</span>
        </div>
    </div>
        <Col md={6}>
          <Row>
            {vehicles.map(vehicle => (
              <ListVehicles key={vehicle.id} img='' model={vehicle.model} year={vehicle.year} manufacturer={vehicle.manufacturer} capacity={vehicle.capacity} dealership={vehicle.dealership} />
            ))}
          </Row>
        </Col>
      </>
    );
  }