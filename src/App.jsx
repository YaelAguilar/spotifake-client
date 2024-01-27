import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../src/pages/LandingPage';
import Login from '../src/pages/LoginPage';
import Home from '../src/pages/HomePage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
