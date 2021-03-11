import React from 'react';
import logo01 from './logo01.png';
import './Nav-bar.css';


export const NavBar =() => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark navbar-light d-flex flex-row" className="navBarrr">

            <a class="navbar-brand" href="#" className="logo" class="ml-auto"> <img src={logo01} alt="logo" height="80px" /></a>
            
            <div class="collapse navbar-collapse d-flex flex-row justify-content-end" id="navbarNav" >
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#"> Inicio </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#listado" id="navbarDropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Productos </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown"  >
                            <a class="dropdown-item" href="#"> Remeras </a>
                            <a class="dropdown-item" href="#"> Tazas </a>
                            <a class="dropdown-item" href="#"> Túnicas virtuales </a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Contacto </a>
                    </li>

                </ul>

                <button class="btn my-2 my-sm-0 my-lg-0" type="submit" id="descarga" >Descargar Juego</button>
            </div>


        </nav>




    );
};

export default NavBar;