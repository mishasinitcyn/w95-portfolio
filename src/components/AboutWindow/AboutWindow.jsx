import React from 'react'
import "./AboutWindow.css"
import {useState} from 'react';
import {EducationWindow} from "./EducationWindow/EducationWindow"
import userCardIcon from "./user_card.png"

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
                    
                    <div className="about-me">
                        <img src={userCardIcon}/>
                        <text>My name is Mikhail (Misha) Sinitcyn. I am a computer science student studying web development, databases, data structures, algorithms and artificial intelligence.
                        I am well versed in C, C++, JavaScript, React, Express, HTML, CSS, MATLAB, and Python. I am fluent in English, Russian and French, having lived in Russia and Canada.
                        In my freetime I enjoy exercising, reading, and playing music. <br></br>
                        Read about my projects in the Projects section. 
                         </text>
                    
                    </div>
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
                    
                    
                </div>
            </div>
            <EducationWindow trigger={EducationPopup} setTrigger={setEducationPopup}/>

        </div>
    ) : "";
}

