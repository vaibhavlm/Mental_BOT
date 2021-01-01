import React from 'react';
import '../styles/challenges.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import bot1 from '../images/bot1rb.png'
import Chip from '@material-ui/core/Chip';


var flag = 0;


function Screen2(props) {

    const button = props.problems.map(problem => {
        return (<div key={problem.id} className="col-6 col-sm-6 col-md-3 pb-3 pb-md-5 pr-2">
            <Button onClick={() => {
                props.Toggle(problem);
            }} className={`card${problem.id}`}>{problem.name}</Button>
        </div>);
    });

    const selectchip = props.problems.map(problem => {
        if (problem.selected) {
            return (
                <Chip key={problem.id}
                    label={problem.name}
                    onDelete={() => {
                        props.Toggle(problem);
                    }}
                    className="mb-2 mb-md-0 mr-1" />
            );
        }
    });

    const select = props.problems.map(problem => {
        if (problem.selected) {
            flag = 1;
            return (
                <li key={problem.id} className="list">{problem.name}</li>
            );
        }
    });

    const toggleflag = bool => {
        if (bool) flag = 0;
    }

    return (
        <section className="passage2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10 text-center">
                        <h2 className="heading-pas1-1">Building your space...</h2>
                    </div>
                </div>
                <div className="row justify-content-center pb-5">
                    <div className="col-10 text-center">
                        <h2 className="heading-pas1-2">Add challenges you would like to tackle to your homescreen..</h2>
                    </div>
                </div>

                <div className="row pb-3">
                    <div className="col-12 inline-block">
                        {selectchip}
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6 pb-5 pb-md-0 pr-md-5">
                        <div className="row">
                            {button}
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pl-md-5 stack">
                        <div className="pb-2">
                            <h3>Challenges Selected</h3>
                        </div>
                        <div>
                            {props.problems.filter(problem => problem.selected == true).length === 0 ? toggleflag(true) : null}
                            {flag === 1 ?
                                <>
                                    <ul>
                                        {select}
                                    </ul>
                                </>
                                :
                                <h6>No problems selected</h6>}
                        </div>
                    </div>
                </div>


                <div className="row pd-5">
                    <div className="col-12 col-md-12">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-5">
                                <div className="card child">
                                    <div className="card-body">
                                        <h4 className="card-title">Did You Know??</h4>
                                        <hr />
                                        <p><i className="fas fa-quote-left"></i> Mental health…is not a destination, but a process. It’s about how you drive, not where you’re going.  <i className="fas fa-quote-right"></i></p>
                                    </div>
                                </div>
                                <div className="py-3">
                                    <Link to='Landingpage'><Button className="btn btn-success btn-lg">Set up</Button></Link>
                                </div>
                            </div>
                            <div className="col-10 col-md-7 d-none d-md-block">
                                <img src={bot1} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
export default Screen2;