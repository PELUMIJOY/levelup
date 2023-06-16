/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom"
import sign from "../sign-up/signup.module.css"

const Login = () => {
  return (
    <div className={sign.container}>
      <div className={sign.wrapper} >
        <div className={sign.left}>
          <h3 className={sign.left1}>
            Charit<span className={sign.leftspan}>Able</span>
          </h3>
          <div className={sign.content}>
           <h2 className={sign.center}>Welcome Back!</h2>
            <p className={sign.center1}>To connect with us, Please Log In with your personal information.</p>
            <Link to='/signup' className={sign.btn}>Sign Up</Link>
          </div>
        
        
        </div>
        <div className={sign.right}  >
            <h2 className={sign.rightTop}>Login</h2>
         
            <form action="" className={sign.middle}>
            <input type="name" placeholder="Name"  className={sign.input} required/>
                <input type="Email" placeholder="Phone or Email"  className={sign.input} required/>
                <input type="password" placeholder="Password"  className={sign.input} required/>
                {/* <input type="submit" value={signUp}/> */}
                <button type="submit"  className={sign.inputbtn}>Log In</button>
                <p className={sign.inputpara}> Don't have an account? <Link className={sign.inputlink} to="/signup">Sign up</Link></p>
              </form>
              <div className={sign.break}>
               <hr /> <p>OR</p> <hr />
              </div>
         

            <div className={sign.bottom}>
                <button className={sign.bottom1}>Log In with Google</button>
                <button className={sign.bottom1}>Log In with Facebook</button>
            </div>
           
        </div>
        </div>
    </div>
  )
}

export default Login