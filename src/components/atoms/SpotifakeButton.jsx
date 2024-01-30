import { NavLink } from 'react-router-dom';

function BrandNavLink() {
    return (
        <div className="flex justify-center items-center h-screen">
            <NavLink
                to="/"
                className="text-white font-bold hover:underline underline-offset-4 text-xl"
            >
                Spotifake
            </NavLink>
        </div>
    );
}

export default BrandNavLink;
