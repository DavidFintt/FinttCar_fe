import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
  Button,
  Row,
  Col,
  Modal
} from 'reactstrap'

import React , {useEffect, useState} from "react";
import './index.css'
import CarouselApp from '../../../Components/caroussel';
import VehicleService from '../../../services/vehicleService';
import SliderHighlights from '../../../Components/sliderHighlights';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




export default function Home() {

  const vehicleService = new VehicleService();
  const [vehicles, setVehicles] = useState([]);
  const [vehiclesHighlight, setVehHighlights] = useState([]);
  const [vehicleDetail, setVehicleDetail] = useState(false);


  const findVehicles = async () => {
    const vehicle = await vehicleService.getAll()
    const vehicleHighlights = vehicle.filter(vh => vh.highlights === true).map(vh => vh);
    setVehHighlights(vehicleHighlights)
    setVehicles(vehicle)
    
  }

  const toggleVehicleDetail = () => {
    setVehicleDetail(!vehicleDetail)
  }

  useEffect(() => {
    findVehicles();
  }, [])

  return (
    <>
    <Modal isOpen={vehicleDetail}>

    </Modal>
  {/* Carousel initi */}
      <CarouselApp />
      <div className="highlight-container">
        <div className="highlightTitle">
          <span><i className="fa fa-star" aria-hidden="true"></i> Highlights</span>
      </div>
  </div>

  {/* Highlights session */}
    <div className='highlightsContent'>
      <Row className='VhcHighLightRow'>
        <SliderHighlights 
          vehiclesHighlight={vehiclesHighlight}>
          toggleVehicleDetail={toggleVehicleDetail}
        </SliderHighlights>
      </Row>
    </div>
    </>
  );
}