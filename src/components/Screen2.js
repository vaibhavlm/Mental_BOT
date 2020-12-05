import React from 'react';
import { Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import bot1 from '../images/bot1rb.png'
var flag = 0;

function Screen2(props) {

    const button = props.problems.map(problem => {
        return (<div key={problem.id} className="col-6 col-sm-6 col-md-3 pb-3 pb-md-5">
            <Button onClick={() => {
                props.Toggle(problem);
            }} className={`card${problem.id}`}>{problem.name}</Button>
        </div>);
    });

    const select = props.problems.map(problem => {
        if (problem.selected) {
            flag = 1;
            return (
                <li key={problem.id} className="list">{problem.name}</li>
            );
        }
    });

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
                <div className="row pd-5">
                    {button}
                </div>
                <div className="row py-5">
                    <div className="col-12 col-md-6 stack">
                        <div className="row">
                            <div className="col-12 pb-2">
                                <h3>Challenges Selected</h3>
                            </div>
                            <div className="col-12 col-md-6">
                                {flag === 1 ?
                                    <>
                                        <ul>
                                            {select}
                                        </ul>
                                        <div className="pt-3">
                                            <Link to="/Landingpage"><Button className="btn btn-success btn-sm">Set Up..</Button></Link>
                                        </div>
                                    </>
                                    :
                                    <h6>No problems selected</h6>}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-5">
                                <div className="card child">
                                    <div class="card-body">
                                        <h4 class="card-title">Did You Know??</h4>
                                        <hr />
                                        <p><i class="fas fa-quote-left"></i> Mental health…is not a destination, but a process. It’s about how you drive, not where you’re going.  <i className="fas fa-quote-right"></i></p>
                                    </div>
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