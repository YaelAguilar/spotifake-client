import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const RestrictAuthRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('token');

    return isAuthenticated ? <Navigate to="/home" replace /> : children;
};

RestrictAuthRoute.propTypes = {
    children: PropTypes.node.isRequired
};

export default RestrictAuthRoute;
