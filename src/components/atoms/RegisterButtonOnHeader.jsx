import { NavLink } from 'react-router-dom';

function RegisterButton() {
    return (
        <NavLink
            to="/register"
            className="text-sm font-bold hover:underline underline-offset-4 text-neon"
        >
            Register
        </NavLink>
    );
}

export default RegisterButton;
