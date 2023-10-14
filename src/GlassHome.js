import Footer from "./Components/Footer";
import HomeGlass from './Components/HOMEGlass/HomeGlass';
import Shapka from './Components/Shapka';

function GlassHome() {
    return (
        <div className="GlassHome">
            <Shapka/>
            <HomeGlass/>
            <Footer/>
        </div>
    );
}

export default GlassHome;