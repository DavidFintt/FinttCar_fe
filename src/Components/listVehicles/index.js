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
        <>
            <Col>
                <img src={props.img}></img>
                <p><strong>Model: </strong> {props.model}</p>
                <p><strong>Year: </strong> {props.year}</p>
                <p><strong>Manufacturer: </strong> {props.manufacturer}</p>
                <p><strong>Capacity: </strong> {props.capacity}</p>
                <p><strong>Amount: </strong> {props.amount}</p>
                <p><strong>Dealership: </strong> {props.dealership}</p>
            </Col>
        </>
    )
}