import React, { useState } from 'react';
import '../styles/play/play.css'
import '../styles/play/halooflove.css';
import '../styles/play/lettinggo.css';
import '../styles/play/observeyourbreath.css';
import '../styles/play/anchoryourself.css'
import { Link, NavLink } from 'react-router-dom';


const heading = [
    {
        id: 1,
        name: "HALO of LOVE",
        color: "rgb(252, 150, 167)"
    },
    {
        id: 2,
        name: "Letting Go",
        color: "rgb(20,123,122)"
    },
    {
        id: 3,
        name: "Anchor yourself",
        color: "linear-gradient(to bottom,rgb(173, 248, 152),rgb(58, 253, 5))"
    },
    {
        id: 4,
        name: "Observe your Breath",
        color: "linear-gradient(to bottom, rgb(24,107,177),rgb(4,62,110))"
    }
]


export default function Play() {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <section className="playscreen" style={{ background: heading.filter(title => title.id == activeTab)[0].color }}>
            <div className="container">
                <div className="row py-4">
                    <div className="col-2">
                        <Link to='/Landingpage'><i className="fa fa-arrow-left fa-lg" style={{ color: "black" }}></i></Link>
                    </div>
                    <div className="col-8 text-center">
                        <h3 className="play-heading">{heading.filter(title => title.id == activeTab)[0].name}</h3>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-12">
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="pills-halooflove-tab" data-toggle="pill" href="#pills-halooflove" role="tab" aria-controls="pills-home" aria-selected="true" onClick={() => toggle('1')}>Halo of Love</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-lettinggo-tab" data-toggle="pill" href="#pills-lettinggo" role="tab" aria-controls="pills-lettinggo" aria-selected="false" onClick={() => toggle('2')}>Letting go</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-anchoryourself-tab" data-toggle="pill" href="#pills-anchoryourself" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={() => toggle('3')}>Anchor Yourself</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-observeyourbreath-tab" data-toggle="pill" href="#pills-observeyourbreath" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={() => toggle('4')}>Observe your Breath</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 play-text">
                        <div class="tab-content text-center" id="pills-tabContent">
                            <div class="tab-pane fade show active text-center" id="pills-halooflove" role="tabpanel" aria-labelledby="pills-home-tab">
                                <p id="pills-halooflove-para"></p>

                                <div className="halooflove-box">
                                    <div class="svg-box">
                                        <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                            viewBox="0 0 80 80" enable-background="new 0 0 80 80">
                                            <circle fill="rgb(248, 215, 221)" cx="40" cy="40" r="40" />
                                            <g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="halooflove-circle delay1"></div>
                                    <div class="halooflove-circle delay2"></div>
                                    <div class="halooflove-circle delay3"></div>
                                    <div class="halooflove-circle delay4"></div>
                                </div>

                                <h4 className="halooflove-caption">Pause stress by sending loving kindness to someone you care for</h4>
                            </div>
                            <div class="tab-pane fade" id="pills-lettinggo" role="tabpanel" aria-labelledby="pills-lettinggo-tab">
                                <p id="pills-lettinggo-para"></p>

                                <div className="lettinggo-box">
                                    <div class="svg-box">
                                        <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                            viewBox="0 0 80 80" enable-background="new 0 0 80 80">
                                            <circle fill="rgb(133,183,180)" cx="40" cy="40" r="40" />
                                            <g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="circle delay1"></div>
                                    <div class="circle delay2"></div>
                                    <div class="circle delay3"></div>
                                    <div class="circle delay4"></div>
                                </div>
                                <h4 className="lettinggo-caption">Let go of the stress</h4>
                            </div>
                            <div class="tab-pane fade" id="pills-anchoryourself" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <p id="pills-observeyourbreath-para"></p>

                                <div className="anchoryourself-box">
                                    <div class="svg-box">
                                        <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                            viewBox="0 0 80 80" enable-background="new 0 0 80 80">
                                            <circle fill="rgb(179, 243, 160)" cx="40" cy="40" r="40" />
                                            <g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="anchoryourself-circle delay1"></div>
                                    <div class="anchoryourself-circle delay2"></div>
                                    <div class="anchoryourself-circle delay3"></div>
                                    <div class="anchoryourself-circle delay4"></div>
                                </div>
                                <h4 className="anchoryourself-caption">Anchor yourself to the present moment</h4>
                            </div>
                            <div class="tab-pane fade" id="pills-observeyourbreath" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <p id="pills-observeyourbreath-para"></p>

                                <div className="observeyourbreath-box">
                                    <div class="svg-box">
                                        <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                            viewBox="0 0 80 80" enable-background="new 0 0 80 80">
                                            <circle fill="rgb(125,164,195)" cx="40" cy="40" r="40" />
                                            <g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="observeyourbreath-circle delay1"></div>
                                    <div class="observeyourbreath-circle delay2"></div>
                                    <div class="observeyourbreath-circle delay3"></div>
                                    <div class="observeyourbreath-circle delay4"></div>
                                </div>
                                <h4 className="observeyourbreath-caption">A gentle exercise that sothes and relaxes</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
