
import { Link } from "react-router-dom"
import sign from "./signup.module.css"

const signUp = () => {
  return (
    <div className={sign.container}>
      <div className={sign.wrapper} >
        <div className={sign.left}>
          <h3 className={sign.left1}>
            Charit<span className={sign.leftspan}>Able</span>
          </h3>
          <div className={sign.content}>
           <h2 className={sign.center}>Welcome!</h2>
            <p className={sign.center1}>To connect with us, Please Sign Up with your personal information.</p>
            <Link to='/log' className={sign.btn}>Login</Link>
          </div>
        
        
        </div>
        <div className={sign.right}>
            <h2 className={sign.rightTop}>signup</h2>
         <div className={sign.radioContainer}>
         <div className={sign.radio}>
            <input type="radio" />
            <label className={sign.student} htmlFor="">Student</label>
          </div>
          <div className={sign.radio}>
             <input type="radio" />
             <label className={sign.student} htmlFor="">Instructor</label>
            </div>
         </div>
         
            <form action="" className={sign.middle}>
            <input type="name" placeholder="Name"  className={sign.input} required/>
                <input type="Email" placeholder="Phone or Email"  className={sign.input} required/>
                <input type="password" placeholder="Password"  className={sign.input} required/>
                {/* <input type="submit" value={signUp}/> */}
                <button type="submit"  className={sign.inputbtn}>Sign Up</button>
                <p className={sign.inputpara}>Already have account? <Link className={sign.inputlink} to="/log">Log In</Link></p>
              </form>
              <div className={sign.break}>
               <hr /> <p>OR</p> <hr />
          
              </div>

         

            <div className={sign.bottom}>
                <button className={sign.bottom1}>Sign Up with Google</button>
                <button className={sign.bottom1}>Sign Up with Facebook</button>
            </div>
           
        </div>
        </div>
    </div>
  )
}

export default signUp