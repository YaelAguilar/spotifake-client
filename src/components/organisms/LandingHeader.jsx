import MusicIcon from '../atoms/MusicIcon';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <MusicIcon className="h-6 w-6 text-neon" />
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <NavLink href="#">Login</NavLink>
                <NavLink href="#">Register</NavLink>
            </nav>
        </header>
    );
};

export default Header;