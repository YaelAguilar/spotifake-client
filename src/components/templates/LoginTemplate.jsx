import PropTypes from 'prop-types';

const LoginTemplate = ({ header }) => {
    return (
        <div className="dark flex flex-col min-h-[100vh] bg-gray-900 text-white">
            {header}
        </div>
    );
};

LoginTemplate.propTypes = {
    header: PropTypes.node.isRequired
};

export default LoginTemplate;
