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

export default function ListVehicles(props){
    return(
        <div className='bodyHighlights'>
                <div className='vehicleCard'>
                    <img className='imgVehicle' src={props.img}></img>
                    <br />
                    <br />
                    <p className='yearVehicle'>{props.manufacturer} {props.name} {props.model}</p>
                    <p className='titleVehicle'>{props.year}</p>
                    <p className='dealerShipCar'>{props.dealership}</p>
                    {/* <hr></hr> */}
                    <Button style={{backgroundColor:'black'}} className='btn btn-danger btnVehicle'> + Details </Button>
                    <p className='priceVehicle'>${props.price}</p>
                </div>
        </div>
    )
}