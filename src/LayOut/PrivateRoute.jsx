import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Loader from "./loader/Loader";

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()
    if(loader){
        return <Loader />
    }
    if (user) {
       return (
        children 
    )
    }
    return (
        <Navigate state={location.pathname}  to='/login' />
    )
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}
export default PrivateRoute;