import Login from '../components/templates/FormTemplate';
import Header from '../components/molecules/Header';
import Text from '../components/atoms/YourAccount';
import Form from '../components/atoms/LoginForm';

function LoginContainer() {
    return (
        <Login
            header={<Header />} 
            text={<Text />} 
            form={<Form />} 
        />
    );
}

export default LoginContainer;
