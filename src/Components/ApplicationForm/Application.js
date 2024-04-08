import React from 'react';
import ApplicationForm from "./ApplicationForm";
import "../../styles/style.css"

const Application = () => {

    return (
        <section id="application" className="application mb-200">
            <div className='apl-border'>
                <h2 className="h2-form">ОСТАВЬТЕ ЗАЯВКУ</h2>
                <ApplicationForm/>
            </div>
        </section>
    );
};

export default Application;