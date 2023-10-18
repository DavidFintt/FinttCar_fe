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
  import 'bootstrap/dist/css/bootstrap.min.css';




  export default function Home() {

    const vehicleService = new VehicleService();

    const [vehicles, setVehicles] = useState([{model: '', year: '', manufacturer: '', capacity:'', dealership: ''}]);
    const [vehiclesHighlight, setVehHighlights] = useState([{model: '', year: '', amount:'', manufacturer: '', capacity:'', dealership: '', highlights:'', img:''}]);


    const findVehicles = async () => {
      const vehicle = await vehicleService.getAll()
      const vehicleHighlights = vehicle.filter(vh => vh.highlights === true).map(vh => vh);
      setVehHighlights(vehicleHighlights)
      setVehicles(vehicle)
      console.log(vehicleHighlights)
  
    }

    useEffect(() => {
      findVehicles();
    }, [])
    return (
      <>
        <CarouselApp />
        <p>Visualize abaixo os carros disponíveis em nossas concessionárias cadastradas:</p>
        <div className="highlight-container">
          <div className="highlight">
            <span className='bbb'><i class="fa fa-star" aria-hidden="true"></i> Highlights</span>
        </div>
    </div>

    {/* Highlights session */}
      <div className='highlightsContent'>
        <Row className='highlightRow'>
              {vehiclesHighlight.map(vehicle => (
              <Col md={4} key={vehicle.id}>
                <ListVehicles key={vehicle.id} img={vehicle.img} model={vehicle.model} year={vehicle.year} manufacturer={vehicle.manufacturer} amount={vehicle.amount} capacity={vehicle.capacity} dealership={vehicle.dealership} />
                </Col>
              ))}
        </Row>
      </div>
      </>
    );
  }