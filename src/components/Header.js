import React, { Component } from 'react'
import {Navbar,NavItem,NavbarToggler,Collapse,Nav,NavbarBrand,Button} from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header(){
        return (
            <>
            <Navbar dark expand="md" style={{backgroundColor:"yellow"}}>
                <NavbarToggler onClick={this.toggleNav} />
                <NavbarBrand className="mr-auto" href="/">Vaibhav</NavbarBrand>
                <Collapse navbar>
                <Nav navbar>
                    <NavItem>
                    <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> AboutUs</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink className="nav-link" to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
                <Nav navbar className="ml-auto">
                    <Button outline >Login</Button>
                </Nav>
        </Navbar>
        <div className="container">
         <div className="row">
             <div className="col-12">
                <h3 className="navbar-dark">Hi this me</h3>
             </div>
         </div>
        </div>
        </>
        );
    }


export default Navbar;
