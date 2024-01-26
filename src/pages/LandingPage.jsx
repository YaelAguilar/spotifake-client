import LandingTemplate from '../components/templates/LandingTemplate';
import LandingHeader from '../components/organisms/LandingHeader';
import MainSection from '../components/organisms/MainSection';
import FeatureSection from '../components/organisms/FeatureSection';

const LandingPage = () => {
    return (
        <LandingTemplate 
            header={<LandingHeader />} 
            mainSection={<MainSection />} 
            featureSection={<FeatureSection />} 
        />
    );
};

export default LandingPage;
