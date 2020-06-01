import React from "react";
import Nav from "react-bootstrap/Nav";
import Platform  from './Platform-Icon/Platform-Icon.Component';
import {platforms} from '../../constants/constans';
import {genres} from '../../constants/constans';

import {Link} from 'react-router-dom';

const SideBar = props => {
     
    return (
        <>
            <Nav className="col-md-12 bg-import sidebar sticky-top">                             
  
                    <ul  className="nav navbar-nav mt-3">
                    <h3 className="mb-3">Platforms</h3>
                    {
                        platforms.map((item,index) =>{
                            let img = <Platform key={index} platform ={item.id} />
                            return(
                                <li key ={index} className="padding"><Link className="sidebar-item"  to={item.url}>{img} {item.name}</Link></li>
                            );
                        })
                    }
                    </ul>
                    <ul  className="nav navbar-nav mt-3">
                    <h3 className="mb-3">Genres</h3>
                    {
                        genres.map((item,index) =>{
                            return(
                                <li key ={index} className="padding"><Link className="sidebar-item"  to={item.url}>{item.name}</Link></li>
                            );
                        })
                    }
                    </ul>
                    <ul  className="nav navbar-nav mt-3">
                        <h3 className="mb-3">Developers</h3>
                        <li className="padding"><Link className="sidebar-item" to="/developers">Show Develpoers</Link></li>
                    </ul>

            </Nav>             
        </>
        );
  };

  export default SideBar;


