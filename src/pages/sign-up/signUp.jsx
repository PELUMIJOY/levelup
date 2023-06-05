
import sign from "./signup.module.css"

const signUp = () => {
  return (
    <div className={sign.container}>
        <div className={sign.left}>
          <h3 className={sign.left1}>
            Charit<span className={sign.leftspan}>Able</span>
          </h3>
          <div className={sign.content}>
          <h2 className={sign.center}>Welcome Back!</h2>
            <p className={sign.center1}>To connect with us, Please Log In with your personal information.</p>
            <button className={sign.btn}>Signup</button>
          </div>
        
        
        </div>
        <div className={sign.right}>
            <h2>signup</h2>
            <div>
            <input type="radio" />
            <label htmlFor="">Student</label>
             <input type="radio" />
             <label htmlFor="">Instructor</label>
            </div>
            <div>
                <input type="name" placeholder="Name" required/>
                <input type="Email" placeholder="Phone or Email" required/>
                <input type="password" placeholder="Password"  required/>
                <button>Sign Up</button>
                <p>Already have account? <link rel="stylesheet" href="#" />Log In</p>
            </div>
            <hr/> OR<hr/>
            <div>
                <button>Sign Up with Google</button>
                <button>Sign Up with Facebook</button>
            </div>
           
        </div>
    </div>
  )
}

export default signUp