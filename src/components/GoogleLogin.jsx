import { useState } from "react";
import { signInWithGoogle } from "../service/firebase";
import { toast } from "react-toastify";
import sign from "../pages/sign-up/signup.module.css";

const GoogleLogin = () => {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();
      toast.success("You have successfully logged in with Google");
      setLoading(false);
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      setLoading(false);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <button className={sign.bottom1} onClick={handleGoogleLogin} disabled={loading}>
      {loading ? "Logging in..." : "Log In with Google"}
    </button>
  );
};

export default GoogleLogin;
