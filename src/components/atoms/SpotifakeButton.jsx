import { NavLink } from 'react-router-dom';

const BrandNavLink = () => {
    return (
        <NavLink
            to="/"
            className="text-white font-bold hover:underline underline-offset-4 text-xl"
        >
            Spotifake
        </NavLink>
    );
};

export default BrandNavLink;
