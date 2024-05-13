import React, { useState } from "react";
import login from "../assets/login/login.png";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setshowPassword] = useState(false)
  return (
    <section id="login" >
      <div className="mx-auto container p-4">
        <div className="p-2 bg-white py-5 text-black rounded w-full max-w-md mx-auto">
          <div className="w-20 h-20 mx-auto">
            <img src={login} alt="login" />
          </div>
          <from>
            <div className="grid">
              <label>Email :</label>
              <div className="bg-slate-100 p-2 rounded">
                <input type="email" placeholder="enter email" className="w-full h-full outline-none  bg-transparent" />
              </div>
            </div>
            <div>
              <label>Password :</label>
              <div className="bg-slate-100 p-2 rounded flex">
                <input type={showPassword ? "text" : "password"} placeholder="enter password" className="w-full h-full outline-none  bg-transparent" />
                <div className="cursor-pointer" onClick={()=>setshowPassword((prev)=>!prev)}>
                  <span>
                  {
                    showPassword ? (
                      <FaEyeSlash />
                    )
                    :
                    (
                      <FaEye />
                    )
                  }
                 
                  
                  </span>
                </div>
              </div>
            </div>
            <button>Login</button>
          </from>
        </div>
      </div>
    </section>
  );
};

export default Login;
