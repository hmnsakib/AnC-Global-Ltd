import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="grid grid-cols-1 m-1/2">
                <span className="loading loading-spinner text-primary"></span>
            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" replace={true}></Navigate>;
};
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
