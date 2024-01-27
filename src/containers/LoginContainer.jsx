import LoginTemplate from '../components/templates/LoginTemplate';
import LoginHeader from '../components/molecules/LoginHeader';
import Text from '../components/atoms/YourAccount';
import Form from '../components/atoms/LoginForm';

const LandingContainer = () => {
    return (
        <LoginTemplate 
            header={<LoginHeader />} 
            text={<Text />} 
            form={<Form />} 
        />
    );
};

export default LandingContainer;
