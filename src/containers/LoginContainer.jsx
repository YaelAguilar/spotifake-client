import LoginTemplate from '../components/templates/LoginTemplate';
import LoginHeader from '../components/molecules/LoginHeader';

const LoginContainer = () => {
    return (
        <LoginTemplate 
            header={<LoginHeader />} 
        />
    );
};

export default LoginContainer;
