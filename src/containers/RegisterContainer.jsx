import Register from '../components/templates/FormTemplate';
import Header from '../components/molecules/Header';
import Text from '../components/atoms/CreateAccount';
import Form from '../components/atoms/RegisterForm';

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
