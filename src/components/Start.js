import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
}));

function Start() {
    const classes = useStyles();
    return (
        <>
            <section className="start img-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-12 title text-center">
                            <h2 className="heading-1">Hey! I'm MentaBot</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <p className="heading-2">I'm here to help you battle stress and grow   </p>
                        </div>
                        <div className="col-12 pt-5 text-center">
                            <Link className="large" to="/screen1"><i className="fa fa-chevron-down fa-lg animated bounce infinite"></i></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Start;