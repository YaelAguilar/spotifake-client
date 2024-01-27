import MusicIcon from '../atoms/MusicIcon';
import LoginButton from '../atoms/LoginButtonOnHeader';
import RegisterButton from '../atoms/RegisterButtonOnHeader';
import SpotifakeButton from '../atoms/SpotifakeButton';

const Header = () => {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
            <MusicIcon className="h-6 w-6 text-neon" />
            <SpotifakeButton />
            <nav className="flex gap-4 sm:gap-6">
                <LoginButton />
                <RegisterButton />
            </nav>
        </header>
    );
};

export default Header;
