import LoginTemplate from '../components/templates/LoginTemplate';
import LoginHeader from '../components/molecules/login/LoginHeader';
import Text from '../components/atoms/login/YourAccount';
import Form from '../components/atoms/login/LoginForm';

function LandingContainer() {
    return (
        <LoginTemplate 
            header={<LoginHeader />} 
            text={<Text />} 
            form={<Form />} 
        />
    );
}

export default LandingContainer;
