import { NavLink } from 'react-router-dom';

const LoginButton = () => {
    return (
        <NavLink
            to="/login"
            className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 transition ease-in-out duration-150"
        >
            Login
        </NavLink>
    );
};

export default LoginButton;
