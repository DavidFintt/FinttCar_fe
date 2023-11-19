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

import './index.css'
// import logo from './assets/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import jQuery from 'jquery';
import Slider from "react-slick";
import ListVehicles from '../listVehicles/index';

export default function SliderHighlights(props){
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
            <Slider {...settings}>
                {props.vehiclesHighlight.map(vehicle => (
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
            </Slider>
        </div>
    )
}