import FraseSection from "../../Components/Atoms/FraseSection";
import ThreeSquares from "../../Components/Atoms/MissionVisionValues";
import Banner from "../../Components/Molecules/Banner";
import styles from "./index.module.scss"

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <Banner/>
            <FraseSection/>
            <ThreeSquares/>

        </div>
    )
};

export default Home;