import { NavLink } from 'react-router-dom';

const RegisterButton = () => {
    return (
        <NavLink
            to="/register"
            className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 transition ease-in-out duration-150"
        >
            Register
        </NavLink>
    );
};

export default RegisterButton;
