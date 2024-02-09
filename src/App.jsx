import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../src/pages/LandingPage';
import Register from '../src/pages/RegisterPage';
import Login from '../src/pages/LoginPage';
import MusicRoom from './pages/MusicRoomPage';
import Home from './pages/HomePage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="register" element={<Register/>}/>
            <Route path="login" element={<Login />} />
            <Route path="musicroom" element={<MusicRoom />} />
            <Route path="home" element={<Home/>} />
            
            </Routes>
        </BrowserRouter>
    );
};

export default App;
