import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Card, CardContent, Button } from '@material-ui/core';
import { Navbar, NavItem, NavbarToggler, Collapse, Nav, NavbarBrand, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, CardImg, CardText, CardBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import bot2 from '../images/bot4.png'


function handleReset(resetName, resetChallenges){
    resetChallenges();
     resetName();
}


function FinalScreen(props) {
    const [isNavOpen, toggleNav] = useState(false)
    return (
        <>
            <Navbar dark expand="md" className="navbar-dark">
                <NavbarBrand className="mr-auto navbar-brand" href="/">{props.name.username}'Space</NavbarBrand>
                <NavbarToggler onClick={() => toggleNav(!isNavOpen)} />
                <Collapse navbar isOpen={isNavOpen}>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link link" to='/Landingpage'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link link" onClick={()=>handleReset(props.resetName, props.resetChallenges)} to='/start'>Reset Data</    Link>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link link" to='/Landingpage'>Dashboard</NavLink>
                        </NavItem>
                        <NavItem>
                        <UncontrolledDropdown className="dropdown">
                            <DropdownToggle nav caret>
                                <span className="fa fa-cog links"> Settings</span>
                            </DropdownToggle>
                            <DropdownMenu right id="dropdown">
                                <DropdownItem>
                                    Feedback
                                </DropdownItem>
                                <DropdownItem>
                                    Share <i className="fa fa-share"></i>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <section className="final">
                <div className="container">
                    <div className="row pb-5">
                        <div className="col-12">
                            <h6>Self Care</h6>
                        </div>
                        <div className="col-3 pl-1 pt-5">
                            <div className="parent">
                                <Link to='/bot'>
                                    <Card className="bot">
                                        <CardContent><i class="fas fa-robot"></i></CardContent>
                                    </Card>
                                </Link>
                                <p className="bot-p"> Say Hi To <br /><strong>{props.name.botname}</strong></p>
                            </div>
                        </div>
                        <div className="col-3 pl-1 pt-5">
                            <div className="parent">
                                <Link to='/play'>
                                    <Card className="play">
                                        <CardContent></CardContent>
                                    </Card>
                                </Link>
                                <p className="play-p"><strong>Play</strong></p>
                            </div>
                        </div>
                        <div className="col-3 pl-1 pt-5">
                            <div className="parent">
                                <Link to='/bot'>
                                    <Card className="wellness">
                                        <CardContent></CardContent>
                                    </Card>
                                </Link>
                                <p className="wellness-p"><strong>Wellness</strong></p>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row pt-5">
                        <div className="col-12">
                            <h6>My Friend</h6>
                        </div>
                        <div className="col-12 col-md-6">
                                <CardImg width="10px" height="300px" src={bot2} alt="bot" />
                        </div>
                        <div className="col-12 col-md-6 align-self-center text-center">
                               <h4>How do you feel?</h4>
                               <div className="pt-4 pl-3">
                               <Link to='/bot'><Button id="talk-button">Talk now</Button></Link>
                               </div>
                        </div>
                        <hr/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FinalScreen;