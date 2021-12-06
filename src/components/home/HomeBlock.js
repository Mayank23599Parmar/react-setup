import React, { Component } from "react";
import SrcSet from "../SrcSet";
import Fade from 'react-reveal/Fade';
import {  banner,banner2 } from "../Images";
class HomeBlock extends Component {
  render() {
let List=["Nam libero tempore, cum soluta.","Nam libero tempore, cum soluta.","Nam libero tempore, cum soluta.","Nam libero tempore, cum soluta."]
    return (
      <>
      <div className="container">
        <div className="row-wrapper align-items-center-xs align-items-center-sm align-items-center-md align-items-center-lg">
            <div className="grid-xs-12 grid-sm-6 grid-md-6 grid-lg-6 ">
              <div className="home-banner-text-wrapper">
                <div className="sub-text-wrapper">
                  <p className="sub-text">INNOVATION TECHNOLOGY</p>
                </div>
                <h1>Grow your audience <br></br> with best software</h1>
                <div className="banner-dec-wrapper">
                  <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet voluptates.</p>
                </div>
                <div className="get-stated-wrapper">
                  <div className="get-button">
                    <button className="btn">Get started</button>
                  </div>
                  <div className="video-wrapper">
                    <div className="video-icon">

                    </div>
                  </div>
                </div>
              </div>

            </div>
          <div className="grid-xs-12 grid-sm-6 grid-md-6 grid-lg-6">
            <Fade right>
              <SrcSet image={{ src: banner }} />
            </Fade>
          </div>
        </div>
      </div>
      <div className="home-block">
      <div className="container">
        <div className="row-wrapper align-items-center-xs align-items-center-sm align-items-center-md align-items-center-lg">

            <div className="grid-xs-12 grid-sm-6 grid-md-6 grid-lg-6 ">
            <Fade left>
              <SrcSet image={{ src: banner2 }} />
            </Fade>


            </div>
    
          <div className="grid-xs-12 grid-sm-6 grid-md-6 grid-lg-6">
          <div className="home-banner-text-wrapper ">
                <div className="sub-text-wrapper">
                  <p className="sub-text">INNOVATION TECHNOLOGY</p>
                </div>
                <h1>Grow your audience <br></br> with best software</h1>
                <div className="banner-dec-wrapper">
                  <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet voluptates.</p>
                </div>
                 <ul className="block-list">
                   {
                     List.map((item,index)=>{
                       return <li><span>{index+1}</span> <p>{item}</p></li>
                     })
                   }
                 </ul>
              </div>
          </div>
        </div>
      </div>
      </div>
      </>
    );
  }
}

export default HomeBlock;
