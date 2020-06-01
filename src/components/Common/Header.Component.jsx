import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';


import logo from './../../assets/img/logo4.png';

import '../../assets/css/DashBoard.css';


const Header = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg"  className="bg-import">
            <div className="mx-auto">
                <h1>Adrian's Games <Link to ="/"><img src = {logo} alt="logo" width="120" height="auto" className="center"/></Link></h1>
            </div>
        </Navbar>
        </>
    );
}

export default Header;

