import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../src/pages/LandingPage';
import Login from '../src/pages/LoginPage'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
