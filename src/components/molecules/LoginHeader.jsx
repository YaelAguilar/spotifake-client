import MusicIcon from '../atoms/MusicIcon';
import SpotifakeButton from '../atoms/SpotifakeButton';
import RegisterButton from '../atoms/RegisterButtonOnHeader';

function Header() {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <MusicIcon className="h-6 w-6 text-neon" />
            </div>

            <SpotifakeButton />
            
            <nav className="flex items-center space-x-4">
                <RegisterButton />
            </nav>
        </header>
    );
}

export default Header;