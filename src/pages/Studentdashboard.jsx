import { auth } from "../service/firebase";
import { useState, useEffect } from "react";
import firebase from '../service/firebase'
// import GoogleLogin from "../components/GoogleLogin";
// import Navbar from "../components/Navbar/Navbar";
import sign from './sign-up/signup.module.css'
import { useNavigate } from "react-router-dom";
const Studentdashboard = () => {
    const [user, setUser] = useState(null);
    const Navigate = useNavigate()

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  console.log(user);
  return (
    
<div>
{/* <Navbar/> */}
{user ? (
    <div className={sign.student}>
           
      <h1 className={sign.student1}>
        Welcome, <span></span>
        {user.displayName}
      </h1>
      <img className={sign.studentimg} src={user.photoURL} alt="" />
      <button className={sign.signout} onClick={() => {auth.signOut();
            setTimeout(() => {
             Navigate ("/log");
            }, 2000);
          }}
    >
        Sign out
      </button>
    </div>
     ) : (
        " "
      )}
    
           {/* {user ? <Studentdashboard user ={user}/> : <GoogleLogin/>} */}
</div>
  );

};
export default Studentdashboard;
