import './App.css';
import Home from "./Components/MainPage/Home";
import Application from "./Components/ApplicationForm/Application";
import Advantages from "./Components/MainPage/Advantages";
import GalleryMain from "./Components/MainPage/GalleryMain";
import NavigationOnPage from "./Components/MainPage/NavigationOnPage";
import Footer from "./Components/Identification/Footer";
import Partners from "./Components/MainPage/Partners";
import FooterUpdate from "./Components/Identification/FooterUpdate";

function App() {
    return (
        <div className="App">
            <Home/>
            <Advantages/>
            <NavigationOnPage/>
            <GalleryMain/>
            <Partners/>
            <Application/>
            <FooterUpdate/>
        </div>
    );
}

export default App;
