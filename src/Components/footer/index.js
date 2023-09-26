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
  
  import React from "react";
  import NavbarBase from "../../Components/navbar";
  import ListVehicles from "../../Components/listVehicles";
  import RoutesApp from '../../routes';
  
  export default function Footer() {
    return (
      <>
        <footer>
        <div class="footer-content">
            <div class="footer-logo">
            <img src="logo.png" alt="Logo da Empresa"></img>
            <h3>Nome da Empresa</h3>
            </div>
            <div class="footer-links">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Produtos</a></li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
            </div>
            <div class="footer-social">
            <ul>
                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
            </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>Todos os direitos reservados &copy; 2023 | Nome da Empresa</p>
        </div>
        </footer>
      </>
    );
  }
  