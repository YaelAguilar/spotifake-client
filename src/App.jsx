import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './context/ProtectedRoute';
import Landing from '../src/pages/LandingPage';
import Register from '../src/pages/RegisterPage';
import Login from '../src/pages/LoginPage';
import MusicRoom from './pages/MusicRoomPage';
import Home from './pages/HomePage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="register" element={<Register/>}/>
            <Route path="login" element={<Login />} />
            <Route path="home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
            <Route path="musicroom" element={<ProtectedRoute><MusicRoom /></ProtectedRoute>} />
            
            </Routes>
        </BrowserRouter>
    );
}

export default App;
