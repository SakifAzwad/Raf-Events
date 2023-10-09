/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthCon } from "../components/Provider/AuthProv";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const loc = useLocation();

    const {user,loading}=useContext(AuthCon);

    
    if(loading)
    {
        // console.log(typeof(loc.pathname));
        return <Navigate to={loc.pathname}></Navigate>
    }

    if(user)
    {
        return children;
    }

    return <Navigate state={loc.pathname} to="/login" ></Navigate>
};

export default PrivateRoute;