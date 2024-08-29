import React from "react";
import Browse from "./Browse";


import { createBrowserRouter, } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import LoginPage from "./LoginPage";



const Body = () => {


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


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
