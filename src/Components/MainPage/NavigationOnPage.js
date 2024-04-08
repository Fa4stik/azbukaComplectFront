import React from 'react';
import {useNavigate} from "react-router-dom";

const NavigationOnPage = () => {
    const navigation = useNavigate()

    return (
        <div className="bottom-form-wrapper">
            <a id="register" className="btn-main" target="_blank"
               onClick={() => navigation('/glass/home')}
            >
                <i className="fa fa-user-plus"></i>
                <span>Стекло для дома</span>
            </a>
            <a id="forhome" className="btn-main" target="_blank"
               onClick={() => navigation('/glass/business')}
            >
                <i className="fa fa-user-plus"></i>
                <span>Профессиональное остекление для бизнеса</span>
            </a>
        </div>
    );
};

export default NavigationOnPage;