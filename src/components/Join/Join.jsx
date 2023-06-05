// import React from 'react'
import tutor from "../../assets/tutor.svg"
import donor from "../../assets/donor1.svg"
import partner from "../../assets/partner.svg"
import join from "./Join.module.css"
const Join = () => {
  return (
    <div className={join.wrapper1}>
        <h1 className={join.head}>Join Our Movement</h1>
    <div className={join.wrapper}>
        
    <div className={join.move}>
            <img src={tutor} alt="" />
            <button className={join.btn} >Student</button>
        </div>
        <div className={join.move}>
            <img src={tutor} alt="" />
            <button className={join.btn}>Instructor</button>
        </div>
        <div className={join.move}>
            <img src={donor} alt="" />
            <button className={join.btn}>Donor</button>
        </div>
        <div className={join.move}>
            <img src={partner} alt="" />
            <button className={join.btn}>Partner</button>
        </div>
    </div>
    </div>
  )
}

export default Join