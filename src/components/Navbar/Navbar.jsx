/* eslint-disable no-unused-vars */
import React from "react";
import brick from "../../assets/brick.svg"
import catering from "../../assets/catering.svg"
import code from "../../assets/code.svg"
import fashion from "../../assets/fashion.svg"
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <section  className="nav-wrapper	">
        <div className="nav-head">
        <div>
          <p className="nav-left">
            Charit<span className="nav-leftspan">Able</span>
          </p>
        </div>
        <div className="nav-right">
          <a href="" >Home</a>
          <a href="" >About Us</a>
          <a href="" >Services</a>
          <a href="">Contact</a>
          <a href="" className="log">Login</a>
        </div>

        </div>
        <section className=" nav-bottom ">
          <div className="nav-bottom-right"> 
            <h1 className="	">
              Get equipped to <span  className="span"> take over the world</span>
            </h1>
            <p className=" p-2.5 font-medium	leading-8	 text-lg w-96		">
              Reach your dreams through Discovering and Exploring your
              potentials. Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do euismod tempor
            </p>
            <button className="nav-btn">Get started</button>
          </div>
          <div className="nav-img">
            <img className="nav-cat" src={catering} alt="" />
            <img className=" nav-brick"  src={brick} alt="" />
            <img className="nav-code"  src={code} alt="" />
            <img className=" nav-fas"  src={fashion} alt="" />
        
          </div>
        </section>
      </section>
    </>
  );
};

export default Navbar;
