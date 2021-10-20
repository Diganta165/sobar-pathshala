import React from 'react';
import { NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.PNG';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            {/* <img className='logo' src = {logo}/> */}
            
            <nav>
            <NavbarBrand>
                <img
                    src={logo}
                    width="60"
                    height="30"
                    className="d-inline-block align-start"
                    alt="React Bootstrap logo"
                />
            </NavbarBrand>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/services'>Services</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact-us">Contact Us</NavLink>

            </nav>

        </div>
    );
};

export default Header;