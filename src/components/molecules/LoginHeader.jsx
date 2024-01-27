import MusicIcon from '../atoms/MusicIcon';
import LoginButton from '../atoms/LoginButton';

const Header = () => {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <MusicIcon className="h-6 w-6 text-neon" />
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <LoginButton></LoginButton>
            </nav>
        </header>
    );
};

export default Header;