import { NavLink } from 'react-router-dom';

function LoginButton() {
    return (
        <NavLink
            to="/login"
            className="text-sm font-medium hover:underline underline-offset-4 text-neon"
        >
            Login
        </NavLink>
    );
}

export default LoginButton;
