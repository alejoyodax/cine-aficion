import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../logoCAW.png'

import styles from './Navbar.module.css';

export default function NavBar() {
    return (
        <header className={ styles.navbar }>
            <div className={ styles.logoCA }>
                <img id="logoHenry" src={ Logo } height="50px" alt="logo" />
            </div>

            <nav>
                <ul className={ styles.list }>
                    <li className={ styles.listItem }>
                        <NavLink activeClassName={ styles.linkActive } exact to="/" >Buscador</NavLink>
                        <NavLink to="/favs" >Mis favoritas</NavLink>
                        <NavLink to="/acerda-de" >Acerca de</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}