import Footer from "./Components/Identification/Footer";
import HomeGlass from './Components/HOMEGlass/HomeGlass';
import Shapka from './Components/Identification/Shapka';
import FooterUpdate from "./Components/Identification/FooterUpdate";

function GlassHome() {
    return (
        <div className="GlassHome">
            <Shapka/>
            <HomeGlass/>
            <FooterUpdate/>
        </div>
    );
}

export default GlassHome;