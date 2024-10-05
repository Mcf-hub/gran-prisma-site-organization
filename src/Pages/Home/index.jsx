import FraseSection from "../../Components/Atoms/FraseSection";
import ThreeSquares from "../../Components/Atoms/MissionVisionValues";
import Banner from "../../Components/Molecules/Banner";
import Gallery from "../../Components/Organisms/Gallery";
import Services from "../../Components/Organisms/ServicesList";
import styles from "./index.module.scss"

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <Banner/>
            <FraseSection/>
            <ThreeSquares/>
            <Gallery/>
            <Services/>

        </div>
    )
};

export default Home;