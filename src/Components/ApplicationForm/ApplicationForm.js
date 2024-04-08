import React, {useEffect, useRef, useState} from 'react';
import { $api } from '../../api'
import "../../styles/style.css"

const ApplicationForm = () => {
    const [telFF, setTelFF] = useState('')
    const [contactFF, setContactFF] = useState('')
    const [nameFF, setNameFF] = useState('')
    const [projectFF, setProjectFF] = useState('')
    const [fileFF, setFileFF] = useState([])

    const handleTellFF = (e) => {
        setTelFF(e.target.value)
    };

    const handleContactFF = (e) => {
        setContactFF(e.target.value)
    };

    const handleNameFF = (e) => {
        setNameFF(e.target.value)
    };

    const handleProjectFF = (e) => {
        setProjectFF(e.target.value)
    };

    const handleBtnMain = (e) => {
        e.preventDefault()
        const fileData = new FormData()
        fileFF && Array.from(fileFF).forEach(file => {
            fileData.append('files', file)
        })
        fileData.append('telFF', telFF)
        fileData.append('contactFF', contactFF)
        fileData.append('nameFF', nameFF)
        fileData.append('projectFF', projectFF)
        $api.post('/sendMail', fileData)
            .then((resp) => {
                console.log(resp)
            })
    };

    const handleLoadFile = (e) => {
        setFileFF(e.target.files)
    }

    return (
        <form className="form" id="ajax-contact-form" encType="multipart/form-data" method="post">
            <input id="telFF" name="telFF" className="form-input" type="tel"
                   placeholder="Номер телефона" onChange={handleTellFF}/>
            <input id="contactFF" name="contactFF" className="form-input" type="email"
                   placeholder="E-mail" onChange={handleContactFF}/>
            <input id="nameFF" className="form-input" type="text" name="nameFF"
                   placeholder="Имя" onChange={handleNameFF}/>
            <input id="projectFF" name="projectFF" className="form-input" type="text"
                   placeholder="Товар" onChange={handleProjectFF}/>
            <div className="bottom-form-wrapper">
                <div className="control-file">
                    <input id="fileFF" className="input__file" name="fileFF" accept="image/*"
                           type="file" multiple onChange={handleLoadFile}/>
                    <label htmlFor="fileFF" className="btm-form input__file-button btn-main">
                        <span className="input__file-button-text">Загрузить файл
                            {fileFF.length > 0 && ` (${fileFF.length})`}</span>
                    </label>
                </div>
                <button className="btn-main btm-form input__file-button"
                        type="submit" id="submitFF" onClick={handleBtnMain}>
                    Оставить заявку
                </button>
            </div>
        </form>
    );
};

export default ApplicationForm;