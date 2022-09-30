import React from 'react'
import "./AboutWindow.css"
import {useState} from 'react';
import {EducationWindow} from "./EducationWindow/EducationWindow"

export const AboutWindow = (props) => {
    const [EducationPopup, setEducationPopup] = useState(false);

    return (props.trigger) ?(
        <div className="about-popup">

            <div className="about-popup-inner">

                <div className="about-header">
                    <h1>About Me</h1>
                    <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
                </div>

                <div className="about-content">
                    <div className="about-education">
                        <div className="about-education-left">
                            <h2>Education</h2>
                            <p><strong>Bachelor of Computer Science</strong></p>
                            <p>Expected Graduation Year 2024</p>
                            <p id="view-courses-button"
                            // style={{cursor: "pointer", border: "1px solid black", backgroundColor: "lightgrey", textAlign: "center", display: "inline-block" }} 
                            
                            onClick={() => setEducationPopup(true) }>View Courses Taken </p>
                        </div>
                        <div className="about-education-right">
                            <img src="https://viewpointvancouver.ca/wp-content/uploads/2021/01/SFU-logo.png"></img>
                        </div>
                    </div>
                    
                    <div className="about-courses">
                    
                    </div>
                </div>
            </div>
            <EducationWindow trigger={EducationPopup} setTrigger={setEducationPopup}/>

        </div>
    ) : "";
}

