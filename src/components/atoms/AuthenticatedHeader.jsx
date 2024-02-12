import LogoutButton from "./LogoutButton";

function AuthenticatedHeader() {
    return (
        <header className="flex justify-between items-center bg-gray-800 px-4 lg:px-6 h-14 w-full">
            <span className="text-white font-bold text-xl">
                Spotifake
            </span>
            <LogoutButton />
        </header>
    );
}

export default AuthenticatedHeader;
