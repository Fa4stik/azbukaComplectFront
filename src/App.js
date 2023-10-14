import './App.css';
import Home from "./Components/Home";
import Application from "./Components/ApplicationForm/Application";
import Advantages from "./Components/MainPage/Advantages";
import GalleryMain from "./Components/MainPage/GalleryMain";
import NavigationOnPage from "./Components/MainPage/NavigationOnPage";
import Footer from "./Components/Footer";
import Partners from "./Components/MainPage/Partners";

function App() {
    return (
        <div className="App">
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

export default App;
