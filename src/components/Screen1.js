import React, { Component } from 'react';
import { Button, Label, Row, Col } from 'reactstrap';
import { Form, Control, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import bot3 from '../images/bot32rb.png';
import img1 from '../images/img1.png';

const required = (val) => val && val.length;

class Screen1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            next: true
        }
    }
    handlesubmit(value, changeName, changeBotName) {
        this.setState({
            next:!this.state.next
        });
        changeName(value.name);
        if(value.botname != null) changeBotName(value.botname);
    }

    render() {
        return (
            <section className="screen1">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-12 col-md-6 text-center pb-5 pb-md-0">
                            <h1>Let's Begin..</h1   >
                        </div>
                        <div className="col-12 col-md-6 text-center">
                            <img src={bot3} className="img-fluid" alt="Responsive image" width="500px" height="500px" />
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
                                    <Col xs={12} sm={12 } md={12}  className="pt-2">
                                        <Label className="sr-only" htmlFor="botname">Nickname</Label>
                                        <Control.text model=".botname" id="botname" placeholder="choose Botname" className="form-control" />
                                    </Col>
                                    <Col xs={2} sm={2} md={12} className="pt-2">
                                    <Button type="submit" className="btn btn-name">OK</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <div className="col-12 pt-5 text-center">
                            { this.state.next ?
                            <Link to="screen2"><i className="fa fa-chevron-down fa-lg " style={{ color: "steelblue" }}></i></Link> : null }
                        </div>
                    </div>
                    <div className="row pt-5 pt-md-1">
                        <div className="col-12 text-center">
                            <img src={img1} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Screen1;