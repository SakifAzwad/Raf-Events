import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import Events from "./components/Events";
import Aboutus from "./components/Aboutus";
import Myevents from "./components/Myevents";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthProv from "./components/Provider/AuthProv";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/events',
        element:<Events></Events>
      },
      {
        path:'/myevents',
        element:<Myevents></Myevents>
      },
      {
        path:'/aboutus',
        element:<Aboutus></Aboutus>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProv>
    <RouterProvider router={router} />
    </AuthProv>
  </React.StrictMode>
);
