import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        
        const endpoint = 'TU_BACKEND_URI'; // Reemplaza con tu URI del backend para registro
        const data = { username, email, password };

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Success:', result);

            navigate('/home');

        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mx-auto grid items-start gap-8 pt-8 sm:max-w-md sm:grid-cols-1 md:gap-12 lg:max-w-md lg:grid-cols-1">
            <div className="grid gap-1">
                <h3 className="text-lg font-bold text-neon">Username</h3>
                <input
                    className="text-sm text-gray-400 bg-gray-800 rounded-lg px-4 py-2 w-full"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="grid gap-1">
                <h3 className="text-lg font-bold text-neon">Email</h3>
                <input
                    className="text-sm text-gray-400 bg-gray-800 rounded-lg px-4 py-2 w-full"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="grid gap-1">
                <h3 className="text-lg font-bold text-neon">Password</h3>
                <input
                    className="text-sm text-gray-400 bg-gray-800 rounded-lg px-4 py-2 w-full"
                    placeholder="Enter your password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="grid gap-1">
                <h3 className="text-lg font-bold text-neon">Confirm Password</h3>
                <input
                    className="text-sm text-gray-400 bg-gray-800 rounded-lg px-4 py-2 w-full"
                    placeholder="Confirm your password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <button className="col-span-full bg-purple-600 active:bg-purple-700 text-white rounded-lg px-4 py-2 mt-6" type="submit">
                Sign Up
            </button>
        </form>
    );
}

export default RegisterForm;
