import LandingTemplate from '../components/templates/LandingTemplate';
import LandingHeader from '../components/molecules/landing/LandingHeader';
import MainSection from '../components/molecules/landing/MainSection';
import FeatureSection from '../components/atoms/landing/FeatureSection';

function LandingContainer() {
    return (
        <LandingTemplate 
            header={<LandingHeader />} 
            mainSection={<MainSection />} 
            featureSection={<FeatureSection />} 
        />
    );
}

export default LandingContainer;
