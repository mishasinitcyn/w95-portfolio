import React from 'react'
import "./ClimateData.css"
import videoIcon from "./video_mk-2.png"
import Carousel from 'better-react-carousel'
import Climatedata1 from "./Images/Climatedata1.jpg"
import Climatedata2 from "./Images/Climatedata2.jpg"
import Climatedata3 from "./Images/Climatedata3.jpg"
import Climatedata4 from "./Images/Climatedata4.jpg"
import Climatedata5 from "./Images/Climatedata5.jpg"
import Climatedata6 from "./Images/Climatedata6.jpg"
import Climatedata7 from "./Images/Climatedata7.jpg"
import Climatedata8 from "./Images/Climatedata8.jpg"
import Climatedata9 from "./Images/Climatedata9.jpg"

const MyDot = ({ isActive }) => (
    <span
      style={{
        display: 'inline-block',
        height: isActive ? '20px' : '10px',
        width: isActive ? '20px' : '10px',
        background: '#1890ff'
      }}
    ></span>
  )

export const ClimateData = (props) => {
    return (props.trigger) ?(
        
        <div className="popup">
            <div className="router-popup-inner">
                <div className="router-header"  style={{backgroundColor: "blue"}}>
                    <h1>Climate Data Analysis</h1>
                    <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
                </div>

                <div className="router-content">
                    <div className="router-description">
                        {/* <h2>Project Description</h2> */}
                        <p><strong>Project Description</strong></p>
                        <p>
                            This report investigates the dataset "Periodicity of western spruce budworm in Southern British Columbia, Canada" 
                            from National Centers for Environmental Information using box plots, graphs, and Hidden Markov Model tools. 

                            {/* Created as part of a group project. */}
                        </p>
                        
                    </div>

                    <div className="router-carousel" style={{marginTop: "2%", position: "relative", width: "98%", margin: "auto"}}>
                        <Carousel cols={2} rows={1} gap={10} loop="true" >
                            <Carousel.Item>
                                <img width="100%" src={Climatedata1} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width="100%" src={Climatedata2} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width="100%" src={Climatedata3} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width="100%" src={Climatedata4} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width="100%" src={Climatedata5} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width="100%" src={Climatedata6} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width="100%" src={Climatedata7} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width="100%" src={Climatedata8} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width="100%" src={Climatedata9} />
                            </Carousel.Item>
                            
                        </Carousel>
                    </div>   

                    <div className="router-tech">
                        <p><strong>My Contributions</strong></p>
                        <ul>
                            <li>Researched and experimented with tree ring datasets from NCEI to fit into HMMTools software.</li>
                            <li>Typed report introduction, context, data analysis, and conclusion.</li>
                        </ul>
                    </div>

                    <div className="router-tech">
                        <p><strong>Languages, Frameworks, Libraries Used</strong></p>
                        <ul>
                            <li>HMMTools</li>
                            <li>R</li>
                            <li>Datasets from National Centers for Environmental Information</li>
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
