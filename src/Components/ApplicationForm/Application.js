import React from 'react';
import ApplicationForm from "./ApplicationForm";

const Application = () => {

    return (
        <section id="application" className="application mb-200">
            <div className="application__container">
                <div className='apl-border'>
                    <h2 className="h2 margin-btm-100px">ОСТАВЬТЕ ЗАЯВКУ</h2>
                    {/*КРИИИИИНЖ*/}
                    <div className="applecation-content">
                        <div className="appl-right-content">
                            <div className="form-wrapper">
                                <ApplicationForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Application;