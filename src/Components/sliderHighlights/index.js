import {
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    Nav,
    Button,
    Row,
    Col,
    Modal,
    ModalBody
} from 'reactstrap'

import './index.css'
import { useState } from 'react';
// import logo from './assets/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import jQuery from 'jquery';
import Slider from "react-slick";

export default function SliderHighlights(props){

    const [mostra, setMostra] = useState(false)
    const [modalInfo, setModalInfo] = useState([])

    const toggleMostra = (index) =>{
      if(mostra === false){
        setModalInfo(props.vehiclesHighlight[index])
      }
      setMostra(!mostra)
    }
    
    // Configuration Slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      
    return(
        <div className='bodySliderHighlights'>
            <Modal
              isOpen={mostra}
              toggle={toggleMostra}
              centered>
              <ModalBody style={{ borderRadius: "0px !important" }}>
                  <img className='imgVehicle' src={modalInfo.img_2}></img>
                  <Col className="text-right">
                      <Button className="px-3 mr-2" >
                          Ok
                      </Button>
                          <Button
                              color="danger"
                              className="px-3"
                              onClick={toggleMostra}>
                                  Cancel
                      </Button>
                  </Col>
              </ModalBody>
            </Modal>
            {props.vehiclesHighlight.length >= 4 ? (
              <Slider {...settings}>
                {props.vehiclesHighlight.map((vehicle, index) => (
                  <Col className='colMapVehiclesHightlight' md={3} key={vehicle.id}>
                    <div className='bodyHighlights'>
                        <div className='vehicleCard'>
                            <img className='imgVehicle' src={vehicle.img_2}></img>
                            <br />
                            <br />
                            <p className='titleVehicle'>{vehicle.manufacturer} {vehicle.name} {vehicle.model}</p>
                            <p className='yearVehicle'>{vehicle.year}</p>
                            <p className='dealerShipCar'>{vehicle.dealership}</p>
                            <Button style={{backgroundColor:'black'}} className='btn btn-danger btnVehicle' onClick={() => toggleMostra(index)}> + Details </Button>
                            <p className='priceVehicle'>${vehicle.price}</p>
                          </div>
                        </div>
                    </Col>
                ))} 
            </Slider>
            ) : (
            <Row>
              {props.vehiclesHighlight.map((vehicle, index) => (
                <Col className='colMapVehiclesHightlight' md={3} key={vehicle.id}>
                  <div className='bodyHighlights'>
                    <div className='vehicleCard'>
                      <img className='imgVehicle' src={vehicle.img_2}></img>
                      <br />
                      <br />
                      <p className='titleVehicle'>{vehicle.manufacturer} {vehicle.name} {vehicle.model}</p>
                      <p className='yearVehicle'>{vehicle.year}</p>
                      <p className='dealerShipCar'>{vehicle.dealership}</p>
                      <Button style={{backgroundColor:'black'}} className='btn btn-danger btnVehicle' onClick={() => toggleMostra(index)}> + Details </Button>
                      <p className='priceVehicle'>${vehicle.price}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
              )
           }
        </div>
    )
}