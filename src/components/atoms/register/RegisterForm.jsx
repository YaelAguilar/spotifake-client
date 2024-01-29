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
        
        const endpoint = 'http://localhost:3000/api/users/register';
        const data = { username, email, password };
    
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            const responseClone = response.clone();
    
            try {
                const result = await response.json();
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}, ${result.message}`);
                }
    
                console.log('Success:', result);
                navigate('/home');
            } catch (jsonError) {
                if (!response.ok) {
                    const errorText = await responseClone.text();
                    throw new Error(`HTTP error! status: ${response.status}, ${errorText}`);
                } else {
                    //console.log('Response is not JSON:', jsonError);
                    console.log('User registered successfully, but the response was not in JSON format.');
                    navigate('/home');
                }
            }
        } catch (error) {
            console.error('Error:', error);
            alert(error.message);
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
                    required
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
                    required
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
                    required
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
                    required
                />
            </div>
            <button className="col-span-full bg-purple-600 active:bg-purple-700 text-white rounded-lg px-4 py-2 mt-6" type="submit">
                Sign Up
            </button>
        </form>
    );
}

export default RegisterForm;
