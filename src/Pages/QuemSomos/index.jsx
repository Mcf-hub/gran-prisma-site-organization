import ThreeSquares from "../../Components/Atoms/MissionVisionValues";
import BackgroundSection from "../../Components/Molecules/3Imgs";
import DifferentSection from "../../Components/Molecules/Diferentes";
import NossaHist from "../../Components/Molecules/NossaHist";
import QuemSomoss from "../../Components/Molecules/QuemSomos";
import SustainabilitySection from "../../Components/Molecules/Sustentabilidade";
const QuemSomos = () => {
    return (
        <div>
            <QuemSomoss/>
            <NossaHist/>
            <ThreeSquares/>
            <DifferentSection/>
            <SustainabilitySection/>
            <BackgroundSection/>
        </div>
    )
};

export default QuemSomos;