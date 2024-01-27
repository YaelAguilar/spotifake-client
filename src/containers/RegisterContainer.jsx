import Register from '../components/templates/FormTemplate';
import Header from '../components/molecules/register/RegisterHeader';
import Text from '../components/atoms/register/CreateAccount';
import Form from '../components/atoms/register/RegisterForm';

function RegisterContainer() {
    return (
        <Register
            header={<Header />} 
            text={<Text />} 
            form={<Form />} 
        />
    );
}

export default RegisterContainer;
