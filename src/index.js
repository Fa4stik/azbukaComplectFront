import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlassBusiness from "./GlassBusiness";
import GlassHome from './GlassHome';
import StartPage from './Components/StartPage';
import WorksGallery from './WorksGallery';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<StartPage/>}></Route>
        <Route path={"/main"} element={<App/>}/>
        <Route path={"/worksgallery"} element={<WorksGallery/>}/>
        <Route path={"/glass/forhome"} element={<GlassHome/>}/>
        <Route path={"/glassbusiness"} element={<GlassBusiness/>}/>
        <Route path={"/test"} element={<div>test page</div>}/>
        <Route path={"*"} element={<div>Not found</div>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
