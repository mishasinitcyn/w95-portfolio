import React from 'react'
import "./FortisBC.css"
import videoIcon from "./video_mk-2.png"

import FortisBCLogo from "./FortisBCLogo.png"

export const FortisBC = (props) => {
    return (props.trigger) ?(
        
        <div className="popup">
            <div className="fortis-popup-inner">
                <div className="fortis-header"  style={{backgroundColor: "blue"}}>
                    <h1>FortisBC Document Database</h1>
                    <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
                </div>

                <div className="fortis-content">
                    <div className="fortis-description">
                        {/* <h2>Project Description</h2> */}
                        <a href="https://www.fortisbc.com" style={{cursor: "pointer"}} target="_blank"><img src={FortisBCLogo}/></a>
                        <p><strong>Project Description</strong></p>
                        <p>
                            I worked within a team of five developers on a document database and management system for the energy company FortisBC. The application originated as a school project with no promise of 
                            real adoption within the company, but upon delivering the final product to the company's senior software engineers, they expressed interest in purchasing it from us.
                            FortisBC is currently in talks with us to acquire the software and implement it in their company, thus it is no longer public on github. However, a link to the video demo of the application is available below.
                        </p>
                        
                    </div>

                    <div className="fortis-tech">
                        <p><strong>My Contributions</strong></p>
                        <ul>
                            <li>Implemented secure authentication and user permissions with the Microsoft Active Directory API</li>
                            <li>Developed feature to export JSON data as pdf using html-pdf, fs, and blob</li>
                            <li>Maintained workflow and version control using DevOps tools such as Jira and GitHub</li>
                            <li>Hosted the application on Heroku, running on Amazon Web Services (AWS)</li>
                            <li>Communicated weekly with FortisBC engineers to ensure compliance with requirements engineering and federal utilities regulations</li>
                        </ul>
                    </div>

                    <div className="fortis-tech">
                        <p><strong>Languages, Frameworks, and Libraries Used</strong></p>
                        <ul>
                            <li>React</li>
                            <li>Typescript</li>
                            <li>Express</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>MongoDB</li>
                            <li>Azure Active Directory</li>
                            <li>node-html-pdf</li>
                            <li>React blob</li>
                        </ul>
                    </div>
                                    
                    
                    <div className="fortisbc-video-container">
                        {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/BQbco5ynQIs" title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true" 
                        className="fortisbc-video"></iframe> */}
                        {/* <p><strong>Video Demo</strong></p>  */}
                        <button style={{marginBottom: "20px"}}id="view-button"><a href="https://www.youtube.com/embed/BQbco5ynQIs" target="_blank">View video demo</a></button>
                        {/* <a href="https://www.youtube.com/embed/BQbco5ynQIs" target="_blank" ><img src={videoIcon}></img></a> */}
                    </div>

                </div>
            </div>
        </div>
    ): ""
}
