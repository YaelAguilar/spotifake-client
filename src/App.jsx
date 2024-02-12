import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './context/ProtectedRoute';
import RestrictAuthRoute from './context/RestrictRoute';
import Landing from '../src/pages/LandingPage';
import Register from '../src/pages/RegisterPage';
import Login from '../src/pages/LoginPage';
import MusicRoom from './pages/MusicRoomPage';
import Home from './pages/HomePage';
import NotFound from './pages/NotFoundPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<RestrictAuthRoute><Landing /></RestrictAuthRoute>} />
            <Route path="register" element={<RestrictAuthRoute><Register/></RestrictAuthRoute>}/>
            <Route path="login" element={<RestrictAuthRoute><Login /></RestrictAuthRoute>} />
            <Route path="home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
            <Route path="musicroom" element={<ProtectedRoute><MusicRoom /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
