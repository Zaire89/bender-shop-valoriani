import React from 'react';
import logo01 from '../../components/logo01.png';
import './Nav-bar.css';
import CartWidget from '../CartWidget/CartWidget';

import { Link } from 'react-router-dom';

export const NavBar =() => {
    return (
        <nav class="navbar navbar-expand-lg d-flex flex-row" >
        

            <Link to='/' class="navbar-brand mr-autop-2" className="logo" > <img src={logo01} alt="logo" style={{width:"80px"}} /></Link> 
            
            <div class="collapse navbar-collapse d-flex  p-2" >
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to='/' class="nav-link" > Inicio </Link>
                    </li>
                    <Link class="nav-item dropdown">
                        <Link to='/' class="nav-link dropdown-toggle"  id="navbarDropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Productos </Link>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown"  >
                            <Link to={`/categoria/indumentaria`} class="dropdown-item" > Indumentaria </Link>
                            <Link to={`/categoria/bazar`} class="dropdown-item"> Bazar </Link>
                            <Link to={`/categoria/accesorios`} class="dropdown-item" href="#"> Accesorios </Link>
                        </div>  
                    </Link>
                   
                    <button class="btn my-2 my-sm-0 my-lg-0" type="submit" id="descarga" ><a href="//bender-online.com.ar/downloads/Bender-Online.exe">Descargar Juego</a></button>
                </ul>
                

            </div>
            <div class="d-flex flex-row p-3" id="div-cartw" >
                < CartWidget />
            </div>
                
                

        </nav>




    );
};

export default NavBar;