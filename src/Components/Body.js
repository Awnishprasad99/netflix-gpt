import React from "react";
import Browse from "./Browse";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/FireBase";

import { createBrowserRouter, } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import LoginPage from "./LoginPage";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {},
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName ,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName ,photoURL:photoURL}));
    
        // ...
      } else {
        dispatch(removeUser());
        
      }
    });
  },[dispatch]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
