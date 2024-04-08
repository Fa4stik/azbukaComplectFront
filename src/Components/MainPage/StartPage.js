import Home from "./Home";
import Advantages from "./Advantages";
import GalleryMain from "./GalleryMain";
import NavigationOnPage from "./NavigationOnPage";
import Partners from "./Partners";
import Application from "../ApplicationForm/Application";
import FooterUpdate from "../Identification/FooterUpdate";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import "./MainPageAdaptive.css"

function StartPage() {

    const location = useLocation()

    useEffect(() => {
        if (location.hash.includes('#')) {
            const element = document.querySelector(location.hash)
            element &&
                element.scrollIntoView({behavior: 'smooth'})
        }
    }, [location]);

    return (
        <div className="StartPage">
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

export default StartPage;
