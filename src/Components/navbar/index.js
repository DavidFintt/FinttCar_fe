import {
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    Nav,
    Button
} from 'reactstrap'

import './index.css'
import logo from './assets/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import jQuery from 'jquery';

export default function NavbarBase(){
    return(
        <>
        <Navbar className="navbar navBase navbar-expand-md">
            <NavbarBrand href="#"><img className='logoNav' src={logo} alt="Logo"></img></NavbarBrand>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Nav className="navbar-collapse justify-content-center">
            </Nav>
            <Nav className="ml-auto collapse navbar-collapse justify-content-end" navbar>
                <NavItem>
                <NavLink className='linkNav' href="/home">Contact</NavLink>
                </NavItem>
                <NavItem>
                <NavLink className='linkNav' href="/link">About</NavLink>
                </NavItem>
                <NavItem>
                <NavLink className='linkNav' href="/about">Login</NavLink>
                </NavItem>
            </Nav>
            </Navbar>
        </>
    )
}