import React from 'react'
import "./Popup.css"
import prompt from "../prompt.png";
import infoIcon from "../msg_information-0.png"

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">

            <div className="popup-inner">

                <div className="header">
                    <h1>Welcome!</h1>
                    <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
                </div>

                <div className="popup-content">
                    <div className="popup-content-top">
                            <img src={infoIcon}></img>
                        <p>Welcome to Mikhail Sinitcyn's online portfolio.<br></br> Feel free to look around, view my projects, and contact me.</p>
                    </div>
                    <div className="popup-content-bottom">
                        <button style={{marginBottom: "20px"}} >
                            <a href="https://www.linkedin.com/in/mikhail-sinitcyn-8909b5224/" target="_blank">LinkedIn</a>
                        </button>
                        <button style={{marginBottom: "20px"}}>
                            <a href="https://github.com/mishasinitcyn" target="_blank">Github</a>
                        </button>
                    </div>
                </div>
            </div>
            

        </div>
        // <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>

    ) : "";
}

export default Popup
