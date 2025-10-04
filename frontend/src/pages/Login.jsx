import React, { createContext, useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import google from "../assets/google-icon-isolated-white-background_1273375-828.jpg";
import { IoEyeOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { authDataContext } from "../context/authContext";
import { userDataContext } from "../context/userContext";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../utils/Firebase";

function Login() {
  const [show, setShow] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let { serverUrl } = useContext(authDataContext);
  let { getCurrentUser } = useContext(userDataContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let result = await axios.post(
        serverUrl + "/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      console.log(result.data);

      getCurrentUser();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleLogin = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      let user = response.user;
      let name = user.displayName;
      let email = user.email;
      
    const idToken = await user.getIdToken();

    const result = await axios.post(
      serverUrl + "/api/auth/googlelogin",
      { token: idToken }, 
      { withCredentials: true }
    );

      console.log(result.data);
      getCurrentUser();
      navigate("/");
    } catch (error) {
      console.log("Frontend GoogleSignUp Error :=" + error);
    }
  };
  return (
    <div className="w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] text-white flex flex-col items-center justify-start">
      <div
        className="w-full h-20 flex items-center justify-start px-6 gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img className="w-10 h-10" src={logo} alt="" />
        <h1 className="text-[22px] font-sans">OneCart</h1>
      </div>

      <div className="w-full mt-4 flex flex-col items-center justify-center gap-2 text-center">
        <span className="text-2xl font-semibold">Login Page</span>
        <span className="text-base text-gray-300">
          Welcome to OneChart, Place your order
        </span>
      </div>

      <div className="w-[90%] max-w-md bg-[#00000025] border border-[#96969635] backdrop:blur-2xl rounded-lg mt-6 p-6">
        <form
          action=""
          className="w-full flex flex-col items-center justify-start gap-5"
        >
          <div
            className="w-full flex items-center justify-center gap-3 bg-[#42656cae] hover:bg-[#38575da2] transition text-white py-3 rounded-lg cursor-pointer"
            onClick={googleLogin}
          >
            <img src={google} alt="" className="w-8 h-8" /> Login Account with Google
          </div>

          <div className="w-full flex items-center justify-center gap-4 text-gray-400">
            <div className="w-1/3 h-px bg-[#96969635]"></div> OR{" "}
            <div className="w-1/3 h-px bg-[#96969635]"></div>
          </div>

          <div className="w-full flex flex-col items-center justify-center gap-4 relative">
            <input
              type="text"
              className="w-full h-12 border-2 border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-4 font-semibold"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <input
              type={show ? "text" : "password"}
              className="w-full h-12 border-2 border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-4 font-semibold"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {!show && (
              <IoEyeOutline
                className="w-5 h-5 cursor-pointer absolute right-4 top-[74px]"
                onClick={() => setShow((prev) => !prev)}
              />
            )}
            {show && (
              <IoEye
                className="w-5 h-5 cursor-pointer absolute right-4 top-[74px]"
                onClick={() => setShow((prev) => !prev)}
              />
            )}
            <button
              className="w-full h-12 bg-[#6060f5] hover:bg-[#4d4df0] transition rounded-lg flex items-center justify-center text-[17px] font-semibold mt-2"
              onClick={handleLogin}
            >
              Login
            </button>
            <p className="flex flex-wrap justify-center gap-2 text-sm text-gray-300 text-center">
              You haven't any account?{" "}
              <span
                className="text-[#5555f6cf] text-[17px] font-semibold cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Create New Account
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
