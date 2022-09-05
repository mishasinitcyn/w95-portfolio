import React from 'react'
import "./Router.css"
import videoIcon from "./video_mk-2.png"


export const Router = (props) => {
    return (props.trigger) ?(
        
        <div className="popup">
            <div className="router-popup-inner">
                <div className="router-header"  style={{backgroundColor: "blue"}}>
                    <h1>Router</h1>
                    <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
                </div>

                <div className="router-content">
                    <div className="router-description">
                        {/* <h2>Project Description</h2> */}
                        <p><strong>Project Description</strong></p>
                        <p>
                            This routing table .... I don't remember what it does. Takes an ip address and matches it with the best router using binary operations?
                        </p>
                        
                    </div>

                    <div className="router-tech">
                        <p><strong>My Contributions</strong></p>
                        <ul>
                            <li>Implemented secure authentication and user permissions with the Microsoft Active Directory API</li>
                            <li>Developed feature to export JSON data as pdf using html-pdf, fs, and blob</li>
                            <li>Maintained workflow and version control using DevOps tools such as Jira and GitHub</li>
                            <li>Hosted the application on Heroku, running on Amazon Web Services (AWS)</li>
                            <li>Communicated weekly with router engineers to ensure compliance with requirements engineering and federal utilities regulations</li>
                        </ul>
                    </div>

                    <div className="router-tech">
                        <p><strong>Languages, Frameworks, Libraries Used</strong></p>
                        <ul>
                            <li>Python</li>
                            <li>Socket</li>
                        </ul>
                    </div>
                                    
                    
                    <div className="router-video-container">
                        {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/BQbco5ynQIs" title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true" 
                        className="router-video"></iframe> */}
                        <p><strong>Video Demo</strong></p> 
                        <a href="https://www.youtube.com/embed/BQbco5ynQIs" target="_blank" ><img src={videoIcon}></img></a>
                    </div>

                </div>
            </div>
        </div>
    ): ""
}
