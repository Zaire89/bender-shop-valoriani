import React from "react";
import './navstyle.css';

export const NavBar = () => {
    return (
        <div>
            <ul className="nav-bar">
                <li> 
                    <a href=""> Inicio </a>
                </li>
                <li >
                    <a href="" > Productos </a>
                </li>
                <li>
                    <a href=""> Contacto </a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;
