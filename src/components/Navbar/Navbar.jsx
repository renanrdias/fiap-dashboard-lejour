import React from 'react';
import classes from './Navbar.module.scss';
import logo from '../../Assets/Images/logo.png';

const Navbar = () => {
    return(
        <nav className={classes.Navbar}>
            <div className={classes.Logo}>
                <img src={logo} alt="logo"/>
            </div>
            <ul>
                <li><a href="#">Usuários</a></li>
                <li><a href="#">Financeiro</a></li>
                <li><a href="#">Fornecedores</a></li>
            </ul>
        </nav>
    );
}


export default Navbar;
