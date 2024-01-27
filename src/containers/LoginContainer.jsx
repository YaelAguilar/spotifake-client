import Login from '../components/templates/FormTemplate';
import LoginHeader from '../components/molecules/login/LoginHeader';
import Text from '../components/atoms/login/YourAccount';
import Form from '../components/atoms/login/LoginForm';

function LoginContainer() {
    return (
        <Login
            header={<LoginHeader />} 
            text={<Text />} 
            form={<Form />} 
        />
    );
}

export default LoginContainer;
