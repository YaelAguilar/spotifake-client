import LandingTemplate from '../components/templates/LandingTemplate';
import LandingHeader from '../components/molecules/LandingHeader';
import MainSection from '../components/molecules/MainSection';
import FeatureSection from '../components/atoms/FeatureSection';

const LandingContainer = () => {
    return (
        <LandingTemplate 
            header={<LandingHeader />} 
            mainSection={<MainSection />} 
            featureSection={<FeatureSection />} 
        />
    );
};

export default LandingContainer;
