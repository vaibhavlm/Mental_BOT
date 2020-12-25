import React, { Component } from 'react';
import { Button, Label, Row, Col } from 'reactstrap';
import { Form, Control, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import bot3 from '../images/bot32rb.png';
import img1 from '../images/img1.png';
import '../styles/quote-card.css';
import { Carousel } from 'antd';
import ReactNotification, { store } from 'react-notifications-component';


const required = (val) => val && val.length;

class Screen1 extends Component {

    constructor(props) {
        super(props);
    }

    handleNotification() {
        store.addNotification({
            title: "Updated !!",
            message: "Names saved",
            type: "success",
            container: "bottom-left",
            insert: "bottom",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],

            dismiss: {
                duration: 1000,
            }
        })
    }


    handlesubmit(value, changeName, changeBotName) {
        this.handleNotification();
        
        setTimeout(() => {
            changeName(value.name);
            if (value.botname != null) changeBotName(value.botname);
                window.scrollTo(0, 1000);
                this.props.resetform();
            }, 2000);
    }


    render() {
        return (
            <section className="screen1">
                <div className="container">
                    <ReactNotification />
                    <div className="row py-5">
                        <div className="col-12 col-md-6">
                            <h1 className="text-center pb-2">Let's Begin..</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 pb-5 pl-5 pb-md-0">
                            <div className=" pl-5 d-none d-md-block">
                                <Carousel effect="fade" autoplay="true" dotPosition="left">
                                    <div className="pl-5">
                                        <blockquote className="quote-card">
                                            <p className="quotes">It is only in sorrow bad weather masters us; in joy we face the storm and defy it.</p>
                                            <cite>
                                                Amelia Barr
                                            </cite>
                                        </blockquote>
                                    </div>
                                    <div className="pl-5">
                                        <blockquote class="quote-card">
                                            <p className="quotes">I fight for my health every day in ways most people don’t understand. I’m not lazy. I’m a warrior.</p>
                                            <cite>

                                            </cite>
                                        </blockquote>
                                    </div>
                                    <div className="pl-5">
                                        <blockquote className="quote-card">
                                            <p className="quotes">The strongest people are those who win battles we know nothing about.</p>
                                            <cite>

                                            </cite>
                                        </blockquote>
                                    </div>
                                    <div className="pl-5">
                                        <blockquote className="quote-card">
                                            <p className="quotes">Everyday begins with an act of courage and hope, getting out of bed</p>
                                            <cite>

                                            </cite>
                                        </blockquote>
                                    </div>
                                    <div className="pl-5">
                                        <blockquote class="quote-card">
                                            <p className="quotes">You, Yourself, as much as anybody in the entire universe deserve your love and affection.</p>
                                            <cite>
                                                The Buddha
                                            </cite>
                                        </blockquote>
                                    </div>
                                    <div className="pl-5">
                                        <blockquote class="quote-card">
                                            <p className="quotes">Not until we are lost, do we begin to understand ourselves.</p>
                                            <cite>
                                                Henry David Thoreau
                                            </cite>
                                        </blockquote>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 pt-2 pt-md-5 pr-5 text-center">
                            <img src={bot3} className="img-fluid pr-5" alt="Responsive image" width="500px" height="500px" />
                        </div>
                    </div>
                    <div className="row justify-content-center py-5">
                        <div className="col-12 col-md-10 text-center">
                            <h2 className="heading-pas1-2">Our conversations are private and anonymous. Just choose a nickname and we are good to go</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 text-center">
                            <Form model="choosename" onSubmit={(value) => this.handlesubmit(value, this.props.changeName, this.props.changeBotName)}>
                                <Row className="form-group text-center">
                                    <Col xs={12} sm={12} md={12}>
                                        <Label className="sr-only" htmlFor="name">Nickname</Label>
                                        <Control.text model=".name" id="name" placeholder="choose a nickname" className="form-control" validators={{ required }} />
                                        <Errors className="text-danger" model=".name" show="touched" messages={{
                                            required: 'Required'
                                        }} />
                                    </Col>
                                    <Col xs={12} sm={12} md={12} className="pt-2">
                                        <Label className="sr-only" htmlFor="botname">Nickname</Label>
                                        <Control.text model=".botname" id="botname" placeholder="choose Botname" className="form-control" />
                                    </Col>
                                    <Col xs={2} sm={2} md={12} className="pt-2">
                                        <Button type="submit" className="btn btn-name">OK</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                    <div className="row pt-5 pt-md-1">
                        <div className="col-12 text-center">
                            <img src={img1} className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-12 pb-5 text-center">
                        <Link to="screen2"><i className="fa fa-chevron-down fa-lg " style={{ color: "steelblue" }}></i></Link>
                    </div>
                </div>
            </section>
        );
    }
}
export default Screen1;