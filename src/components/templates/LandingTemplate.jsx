import PropTypes from 'prop-types';

const LandingTemplate = ({ header, mainSection, featureSection }) => {
    return (
        <div className="dark flex flex-col min-h-[100vh] bg-gray-900 text-white">
            {header}
            {mainSection}
            {featureSection}
        </div>
    );
};

LandingTemplate.propTypes = {
    header: PropTypes.node.isRequired,
    mainSection: PropTypes.node.isRequired,
    featureSection: PropTypes.node.isRequired
};

export default LandingTemplate;
