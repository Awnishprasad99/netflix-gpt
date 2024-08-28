import React, { useState } from "react";
import { auth } from "../Utils/FireBase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import { useSelector } from "react-redux";
import { ChevronUp } from 'lucide-react';







const Header = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();
  const user = useSelector((store)=>(store.user));

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        toast.success("SignOut Successfull!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        toast.error("Something went wrong!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  return (
    <div className=" flex justify-between w-screen  bg-gradient-to-b from-black  cursor-pointer ">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix-Logo"
      />

      <div className=" h-6 mr-2 mt-5 flex justify-center ">
        <img className="rounded-full h-8  mr-16" src={user.photoURL} alt="" />
      
     <div className="py-1 fixed text-white  hover:rotate-180  transition ease-in-out delay-150 hover:text-red-600  ">  <ChevronUp /></div>

        {/* functionality of sign in */}
        {/* <button
          className=" font-semibold py-1  text-white hover:text-red-500"
          onClick={handleSignOut}
        >
          SignOut
        </button> */}
      </div>
    </div>
  );
};

export default Header;
