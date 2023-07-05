/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import brick from "../../assets/brick.svg"
import catering from "../../assets/catering.svg"
import code from "../../assets/code.svg"
import fashion from "../../assets/fashion.svg"
import nav from "./Navbar.module.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeNav, setActiveNav] =useState("#")
  const[open, setOpen]=useState({clicked:false})
  const handleClick =()=>{
    setOpen(open=>({
      clicked: !open.clicked
    }))
  }
  return (
    <>
      <section  className= {nav.wrapper}>
        <div className={nav.head}>
        <div>
          <p className={nav.left}>
            Charit<span className={nav.leftspan}>Able</span>
          </p>
        </div>
       

<div className={nav.showonlgscreen}>
        <div className={nav.right}>
        
              <div
                id={nav.rightNav }  
              >
             
                <div className={nav.item}>
                <a href='#' onClick={()=>setActiveNav("#")} className={`${activeNav==="#" ? "active": ""} ${nav.link}`}>
                    Home
                  </a>
                </div>
                <div className={nav.item}>
                <a href='#about' onClick={()=>setActiveNav('#about')} className={`${activeNav === "#about" ? "active" : ''} ${nav.link} `}>
                    About
                  </a>
                </div> 
                <div className={nav.item}>
                <a  href='#service' onClick={()=>setActiveNav('#service') } className={`${activeNav==="#service" ? "active" : "" } ${nav.link}`}>
                  Services
                  </a>
                </div>
                <div className={nav.item}>
                <a href='#contact' onClick={()=>setActiveNav('#contact')} className={ `${activeNav === "#contact" ? "active" : ""} ${nav.link} `}>
                    Contact
                  </a>
                </div>
                <div className={nav.item}>
                <Link className={`${nav.link} ${nav.log}`} to='/log'>
                    Login
                  </Link>
                </div>
               
              </div>
              
            </div>  
            </div>

              {/* SHOW ONLY ON MEDIUM AND SMALL SCREEN */}
              <div className={nav.showonsmscreen}>
              <div className={nav.right}>
              <div id={nav.mobile} onClick={handleClick} >
                <i
                  id={nav.bar}
                  className={open.clicked ? "" : 'fas fa-bars'}
                ></i>
              </div>
              {open.clicked ?  
                <>
       
              <div
                id={nav.rightNav} style={{display:"flex"}}
         >
                
             
                <div className={nav.item} style={{position:"relative"}}>
               
                  <div>
                  <a  href='#' onClick={()=>setActiveNav('#')} className={`${activeNav ==="#"?"active" :""} ${nav.link}` }>
                    Home
                  </a>
                  </div>
                  <div id={nav.mobile1} onClick={handleClick} style={{position:"absolute", top:"-15px", left:"60px" }} >
                <i
                  id={nav.bar}
                  className={'fas fa-times'}
                ></i>
              </div>
                 
                </div>
                <div className={nav.item}>
                <a  href='#about' onClick={()=>setActiveNav("#about")} className={`${activeNav=== "#about" ? "active" :""} ${nav.link}`}>
                    About
                  </a>
                </div>
                <div className={nav.item}>
                <a  href='#service' onClick={()=>setActiveNav('#service')} className={`${activeNav === "#service" ? "active" : ""} ${nav.link}`}>
                  Services
                  </a>
                </div>
                <div className={nav.item}>
                <a  href='#contact' onClick={()=> setActiveNav('#content')} className={`${activeNav==="#contact" ? "active" : ""} ${nav.link}`}>
                    Contact
                  </a>
                </div>
                <div className={nav.item}>
                <Link className={`${nav.link} ${nav.log}`} to='/log'>
                    Login
                  </Link>
                </div>
               
              </div>
              </> 
                :
                <>
                </>
} 
              </div>
           
              
            </div>   
          

        </div>
        <section className= {nav.bottom} >
          <div className={nav.bottomRight}> 
            <h1 className="	">
              Get equipped to <span  className={nav.span}> take over the world</span>
            </h1>
            <p className={nav.bottompara}>
              Reach your dreams through Discovering and Exploring your
              potentials. Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do euismod tempor
            </p>
            <Link className={ `${nav.link} ${nav.btn}`} to='/signup'>Get started </Link>
          </div>
          <div className={nav.img}>
            <img className={nav.cat} src={catering} alt="" />
            <img className={nav.brick} src={brick} alt="" />
            <img className={nav.code} src={code} alt="" />
            <img className= {nav.fas } src={fashion} alt="" />
        
          </div>
        </section>
      </section>
    </>
  );
};

export default Navbar;
