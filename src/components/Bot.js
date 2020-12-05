import React, { useState, useEffect } from "react";
import ChatBot from "react-simple-chatbot";
import { questions } from '../shared/ques';
import { Link } from "react-router-dom";


function Bot(props) {

  const steps2 = questions;
  const config = {
    width: 200,
  }
  
  return (
    <section className="botpage">
    <div className="container">
      <div className="row py-5">
        <div className="col-12">
        <Link to='/Landingpage'><i className="fa fa-arrow-left fa-lg"></i></Link>
        </div>
      </div>
      <div className="row pb-2">
        <div className="col-12">
        <ChatBot steps={steps2} {...config} />
        </div>
      </div>
    </div>
    </section>
  );
}
export default Bot;