import { useNavigate } from "react-router-dom";
import sign from "../../pages/sign-up/signup.module.css";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(32).required(),
});


const Instructor = () => {
    const Navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm({
      resolver: yupResolver(schema),
    });
  
    const onSubmitHandler = () => {
      reset();
  
      axios
        .post("https://charitable-ngo.onrender.com/auth/signup", {
          name: name,
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res);
          toast.success("You have succesfully signup proceed to login");
          toast.success(res.data.message);
          setTimeout(() => {
            Navigate("/log");
          }, 2000);
        })
        .catch((error) => {
          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            const errorMessage = error.response.data.message;
            toast.error(errorMessage);
          } else {
            toast.error("An error occurred. Please try again.");
          }
          // console.log(error);
        });
    };
  
  
  return (
    <div>
 <form
            action=""
            onSubmit={handleSubmit(onSubmitHandler)}
            className={sign.middle}
          >
            <input
              type="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Name"
              className={sign.input}
              required
              id="name"
            />
         
            <input
              {...register("email")}
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Phone or Email"
              className={sign.input}
              required
              id="email"
            />
            <label htmlFor="">{errors.email?.message}</label>
            <br />

            <input
              {...register("password")}
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              className={sign.input}
              required
              id="password"
            />
            <label htmlFor="">{errors.password?.message}</label>
            <br />
            <input
              type=""
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Name"
              className={sign.input}
              required
              id="name"
            />

            <button
              type="submit"
              onClick={onSubmitHandler}
              className={sign.inputbtn}
            >
              Sign Up
            </button>
</form>
    </div>
  )
}

export default Instructor