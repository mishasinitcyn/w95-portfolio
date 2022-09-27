import React from 'react'
import "./CancerData.css"
import videoIcon from "./video_mk-2.png"


export const CancerData = (props) => {
    return (props.trigger) ?(
        
        <div className="popup">
            <div className="router-popup-inner">
                <div className="router-header"  style={{backgroundColor: "blue"}}>
                    <h1>Cancer Data Analysis</h1>
                    <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
                </div>

                <div className="router-content">
                    <div className="router-description">
                        {/* <h2>Project Description</h2> */}
                        <p><strong>Project Description</strong></p>
                        <p>
                            This report investigates the principles of data analysis and details the process of classifying tumours as benign or cancerous using MATLAB.
                        </p>
                        
                    </div>

                    <div className="router-tech">
                        <p><strong>My Contributions</strong></p>
                        <ul>
                            <li>Used Data Analysis concepts such as the sigmoid function and nonlinear fit to analyze medical data</li>
                            <li>Graphed and analyzed findings in MATLAB</li>
                        </ul>
                    </div>

                    <div className="router-tech">
                        <p><strong>Languages, Frameworks, Libraries Used</strong></p>
                        <ul>
                            <li>MATLAB</li>
                        </ul>
                    </div>
                                    
                {/*                     
                    <div className="router-video-container">
                        
                        <p><strong>Video Demo</strong></p> 
                        <a href="https://www.youtube.com/embed/BQbco5ynQIs" target="_blank" ><img src={videoIcon}></img></a>
                    </div> 
                */}

                </div>
            </div>
        </div>
    ): ""
}
