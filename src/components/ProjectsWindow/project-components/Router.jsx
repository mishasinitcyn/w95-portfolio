import React from 'react'
import "./Router.css"
import videoIcon from "./video_mk-2.png"
import Carousel from 'better-react-carousel'
import router1 from "./Images/router1.png"
import router2 from "./Images/router2.png"


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
                            This program reads a routing table from a text file, orders the addresses by mask length, and
                            uses the forwarding algorithm to forward a given packet. Includes binary operations and internet protocols.

                        </p>
                        
                    </div>

                    <div className="router-carousel">
                        <Carousel cols={1} rows={1} gap={10} loop="true" >
                            <Carousel.Item>
                                <img width="100%" src={router1} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width="100%" src={router2} />
                            </Carousel.Item>
                        </Carousel>
                    </div>   

                    <div className="router-tech">
                        <p><strong>My Contributions</strong></p>
                        <ul>
                            <li>Implemented port forwarding protocol in python using binary operations</li>
                        </ul>
                    </div>

                    <div className="router-tech">
                        <p><strong>Languages, Frameworks, Libraries Used</strong></p>
                        <ul>
                            <li>Python</li>
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
