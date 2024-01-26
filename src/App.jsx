import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from '../src/pages/LandingPage';

const App = () => {
    return (
        <Router>
            <LandingPage />
        </Router>
    );
};

export default App;
