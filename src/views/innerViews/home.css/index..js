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

    const [vehicles, setVehicles] = useState([]);
    const [vehiclesHighlight, setVehHighlights] = useState([]);


    const findVehicles = async () => {
      const vehicle = await vehicleService.getAll()
      const vehicleHighlights = vehicle.filter(vh => vh.highlights === true).map(vh => vh);
      setVehHighlights(vehicleHighlights)
      setVehicles(vehicle)
    }

    console.log(vehicles)

    useEffect(() => {
      findVehicles();
    }, [])

    return (
      <>
        <CarouselApp />
        <p>Visualize abaixo os carros disponíveis em nossas concessionárias cadastradas:</p>
        <div className="highlight-container">
          <div className="highlightTitle">
            <span><i className="fa fa-star" aria-hidden="true"></i> Highlights</span>
        </div>
    </div>

    {/* Highlights session */}
      <div className='highlightsContent'>
        <Row className='VhcHighLightRow'>
              {vehiclesHighlight.map(vehicle => (
                <Col className='colMapVehiclesHightlight' md={3} key={vehicle.id}>
                  <ListVehicles 
                      img={vehicle.img}
                      model={vehicle.model}
                      year={vehicle.year}
                      manufacturer={vehicle.manufacturer}
                      amount={vehicle.amount}
                      capacity={vehicle.capacity} 
                      dealership={vehicle.dealership} 
                      price={vehicle.price} 
                      name={vehicle.name}/>
                  </Col>
              ))}
        </Row>
      </div>
      </>
    );
  }