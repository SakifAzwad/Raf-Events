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
import PrivateRoute from "./Private/PrivateRoute";

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
        path:'/events/:id',
        element:<PrivateRoute><Events></Events></PrivateRoute>,
        loader:()=>fetch('/data.json')
      },
      {
        path:'/myevents',
        element:<PrivateRoute><Myevents></Myevents></PrivateRoute>
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
