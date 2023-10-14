import Home from "./Home";
import Advantages from "./MainPage/Advantages";
import GalleryMain from "./MainPage/GalleryMain";
import NavigationOnPage from "./MainPage/NavigationOnPage";
import Partners from "./MainPage/Partners";
import Application from "./ApplicationForm/Application";
import Footer from "./Footer";


function StartPage() {
    return (
        <div className="StartPage">
            <Home/>
            <Advantages/>
            <NavigationOnPage/>
            <GalleryMain/>
            <Partners/>
            <Application/>
            <Footer/>
        </div>
    );
}

export default StartPage;
