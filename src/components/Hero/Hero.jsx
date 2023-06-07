// import React from 'react'
import hero from "../Hero/Hero.module.css"
import flower from "../../assets/flower.svg"
import food from "../../assets/food.svg"
import code from "../../assets/code.svg"
import job from "../../assets/Job.svg"
import mentor from "../../assets/mentor.svg"
import resources from "../../assets/resources.svg"


const Hero = () => {
  return (
    <div>
        <div className={hero.wraper}>
          <div className={hero.left}>
            <img className={hero.flo} src={flower} alt=""/>
            <img className={hero.code}  src={code} alt=""/>
            <img className={hero.food}  src={food} alt=""/>
          </div>
          <div className={hero.right}>
            <h1 className={hero.about}>About Us</h1>
            <p className={hero.para}> Acquiring a Sustainable skill and Maximizing your fullest potential is all we are about </p>
            <p className={hero.para2}>Our Community focuses on the growth process of our benefactors, from acquiring a sustainable skill to maximizing their fullest potentials, with necessary resources</p>
            <button className={hero.btn}>See more</button>
          </div>
        </div>

        <section className={hero.Us}>
          <h1 className={hero.whyUs}> Why US?</h1>
          <div className={hero.study}>
         <div className={hero.content}>   
          <h2 className={hero.studyhead}>Learning Resources</h2>
          <p className={hero.studyp}>We empower our benefactors through great learning resources, which make learning easier, faster and achievable.</p>
         </div>
         <div>
          <img className={hero.studyimg} src={resources} alt="" />
         </div>
          </div>
          <div className={hero.study}>   
          <div>
          <img className={hero.studyimg} src={job} alt="" />
         </div>
         <div className={hero.content}>
          <h2 className={hero.studyhead}> Job Opportunities</h2>
          <p className={hero.studyp}>Our benefactors enjoy great resources to equip them for jobs, as well as being  guided through career pathways in their various skill/career paths.</p>
         </div>
        
          </div>
          <div className={hero.study}>
          <div className={hero.content}>   
          <h2 className={hero.studyhead}>Mentoring Sessions</h2>
          <p className={hero.studyp}>Mentoring is enjoyed by our benefactors as they get to be attended to by mentors who guides them through their growth process.</p>
         </div>
         <div>
          <img className={hero.studyimg} src={mentor} alt="" />
         </div>
          </div>
         
        </section>
    </div>
  )
}

export default Hero