import Header from '../components/molecules/Header';
import MainSection from '../components/molecules/MainSection';
import FeatureSection from '../components/atoms/FeatureSection';
import Charts from '../components/atoms/Charts';

function LandingContainer() {
    return (
        <div className="dark flex flex-col min-h-[100vh] bg-gray-900 text-white">
            <Header></Header>
            <MainSection></MainSection>  
            <Charts></Charts>
            <FeatureSection></FeatureSection>
        </div>
    );
}

export default LandingContainer;




