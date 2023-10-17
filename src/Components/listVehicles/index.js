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
                    <p><strong>{props.manufacturer} {props.model} </strong> - {props.year} </p>
                    <hr></hr>
                    <Button style={{backgroundColor:'black'}} className='btn btn-danger'> + Details </Button>
                </div>
        </div>
    )
}