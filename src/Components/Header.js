import React, { useState } from "react";
import { auth } from "../Utils/FireBase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import { useSelector } from "react-redux";
import happy from "./images/happy.gif";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";

import {
  ChevronUp,
  UserRoundPen,
  ArrowLeftRight,
  CircleUserRound,
  CircleHelp,
} from "lucide-react";

const Header = () => {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("SignOut Successful!", {
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
        ;
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");

        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe;
  }, [dispatch, navigate]);

  return (
    <div className="relative    ">
    {user ? (
      <div  className="flex justify-between z-20 absolute bg-grey-400 w-full  bg-gradient-to-b   from-black cursor-pointer">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix-Logo"
      />

      <div className="h-6 mr-4 mt-4  flex justify-center relative ">
        <img className="rounded-full h-10   " src={user?.photoURL} alt="" />

        {/* Wrapper div with event handlers */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative text-white"
        >
          <ChevronUp className="  -ml-3  hover:rotate-180  mt-3  group-hover:rotate-180  right-10 transition ease-in-out hover:text-red-700  hover:bg-transparent w-20  h-7  " />
          {open && (
            <div className="absolute group  right-0 rounded-md h-64 bg-black text-white w-60">
              <ul>
                <div className="flex bg-white h-10 pt-2 pl-2 rounded-md w-full">
                  <h1 className="pr-1 text-red-600 font-semibold text-xl">
                    Hi
                  </h1>
                  <img className="h-9 rounded-full pb-2" src={happy} alt="" />
                  <h1 className="text-red-600 ml-3 font-bold text-xl">
                    {user?.displayName}
                  </h1>
                </div>

                <div className="flex py-2 mx-2">
                  <UserRoundPen />
                  <li className="text-white ml-2 hover:text-red-600">
                    Manage profile
                  </li>
                </div>
                <div className="flex py-2 mx-2">
                  <ArrowLeftRight />
                  <li className="text-white ml-2 hover:text-red-600">
                    Transfer Profile
                  </li>
                </div>
                <div className="flex py-2 mx-2">
                  <CircleUserRound />
                  <li className="text-white ml-2 hover:text-red-600">
                    Account
                  </li>
                </div>
                <div className="flex py-2 mx-2">
                  <CircleHelp />
                  <li className="text-white ml-2 hover:text-red-600">
                    Help Center
                  </li>
                </div>
                <hr />
                <div>
                  <button 
                    onClick={handleSignOut}
                    className="text-white ml-12 py-4 font-bold hover:text-red-700"
                  >
                    Sign Out of Netflix?
                  </button>
                </div>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
    ) : (
      <div></div>
    )}

    </div>
  );
};

export default Header;
