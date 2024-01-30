import LoginButton from '../atoms/LoginButtonOnHeader';
import RegisterButton from '../atoms/RegisterButtonOnHeader';
import SpotifakeButton from '../atoms/SpotifakeButton';

function Header() {
    return (
        <header className="flex justify-between items-center px-4 lg:px-6 h-14">
            <div className="flex-1 flex justify-start">
                <SpotifakeButton />
            </div>
            <div className="flex-1 flex justify-center">
            </div>
            <nav className="flex-1 flex justify-end gap-4 sm:gap-6">
                <LoginButton />
                <RegisterButton />
            </nav>
        </header>
    );
}

export default Header;
