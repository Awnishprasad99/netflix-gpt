import Header from "./Header";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { checkValidData } from "../Utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/FireBase";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [signIn, setSignIn] = useState(true);
  const [seePassword, setSeePassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false); // State to track login success
  const navigate = useNavigate();

  // useEffect to navigate to the Browse page after 1 second when login is successful
  useEffect(() => {
    if (loginSuccess) {
      const timer = setTimeout(() => {
        navigate("/browse");
      }, 1000); // 1-second delay before navigating

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [loginSuccess, navigate]);

  const Email = useRef(null);
  const Password = useRef(null);

  const handleButtonClick = () => {
    const Message = checkValidData(Email.current.value, Password.current.value);
    setErrorMessage(Message);

    if (Message) return;

    if (!signIn) {
      createUserWithEmailAndPassword(auth, Email.current.value, Password.current.value)
        .then((userCredential) => {
          setErrorMessage("Verification Successful!...");
          setLoginSuccess(true); // Set login success to true to trigger useEffect
        })
        .catch((error) => {
          setErrorMessage("User already exists");
        });
    } else {
      signInWithEmailAndPassword(auth, Email.current.value, Password.current.value)
        .then((userCredential) => {
        
          setErrorMessage("Verification Successful!...");
          setLoginSuccess(true); // Set login success to true to trigger useEffect
        })
        .catch((error) => {
          setErrorMessage("Seems like you are new, wait for a while...");
          setTimeout(() => {
            setSignIn(false);
            setErrorMessage("Start creating your account!");
          }, 3000);
        });
    }
  };

  const toggleSignIn = () => {
    setSignIn(!signIn);
  };

  const togglePasswordVisibility = () => {
    setSeePassword((seePassword) => !seePassword);
  };

  return (
    <div
      className="relative h-screen bg-auto bg-center"
      style={{
        backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/031c42b9-0c81-4db5-b980-0160765188e9/27f1b15d-79ed-43ca-8982-7faa9e4aa388/IN-en-20240819-TRIFECTA-perspective_WEB_3c576fa6-cd23-46b6-ac3f-1ad2bb0f66fb_small.jpg')",
      }}
    >
      <Header />

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-14 py-4 w-1/3 bg-black bg-opacity-75"
      >
        <h1 className="text-white text-3xl pb-4">
          {signIn ? "SignIn" : "SignUp"}
        </h1>
        {!signIn && (
          <input
            type="text"
            placeholder="Enter Your Name"
            className="p-2 m-2 w-full text-white bg-slate-600 bg-opacity-30"
          />
        )}

        <input
          type="text"
          required
          placeholder="Email Address"
          className="p-2 m-2 w-full text-white bg-slate-600 bg-opacity-30"
          ref={Email}
        />

        <div className="relative">
          <input
            ref={Password}
            required
            type={seePassword ? "text" : "password"}
            placeholder="Password"
            className="p-2 m-2 w-full bg-slate-600 bg-opacity-30 text-white"
          />
          <FontAwesomeIcon
            icon={seePassword ? faEyeSlash : faEye}
            className="absolute right-3 top-5 cursor-pointer text-white"
            onClick={togglePasswordVisibility}
          />
        </div>

        <button
          onClick={handleButtonClick}
          className="font-semibold text-md p-2 m-5 mx-2 block rounded-sm bg-red-600 hover:bg-red-700 text-white w-full text-center"
        >
          {signIn ? "SignIn" : "SignUp"}
        </button>
        <p className="text-red-500">{errorMessage}</p>
        <p className="text-slate-300 mx-32">OR</p>
        <button className="font-semibold text-md p-2 m-5 mx-2 block rounded-sm bg-slate-600 bg-opacity-30 hover:bg-opacity-45 text-white w-full text-center">
          Use a sign-In code
        </button>
        <p className="text-white mx-[77px]">Forget Password</p>
        <div className="flex flex-col gap-3 py-6 mx-4 items-start">
          <div>
            <input
              type="checkbox"
              id="remember"
              className="form-checkbox h-4 w-4 text-white border-white focus:ring-0 focus:ring-offset-0"
            />
            <label htmlFor="remember" className="ml-2 text-white">
              Remember me
            </label>
          </div>
          <div className="flex gap-3">
            <p className="text-slate-200 text-opacity-70 font-medium">
              {signIn ? "New to Netflix?" : "Already Registered?"}
            </p>
            <p
              className="cursor-pointer text-white font-medium"
              onClick={toggleSignIn}
            >
              {signIn ? "SignUp" : "SignIn"}
            </p>
          </div>
        </div>
        <div className="flex">
          <p className="gap-3 flex-col text-slate-300 opacity-60 text-xs">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot{" "}
            <p className="hover:text-sky-700 text-sky-500 text-blue">
              Learn more
            </p>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
