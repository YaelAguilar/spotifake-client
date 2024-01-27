import PropTypes from 'prop-types';

const LoginTemplate = ({ header, text, form }) => {
    return (
        <div className="dark flex flex-col min-h-[100vh] bg-gray-900 text-white">
            {header}
            {text}
            {form}
        </div>
    );
};

LoginTemplate.propTypes = {
    header: PropTypes.node.isRequired,
    text: PropTypes.node.isRequired,
    form: PropTypes.node.isRequired
};

export default LoginTemplate;
