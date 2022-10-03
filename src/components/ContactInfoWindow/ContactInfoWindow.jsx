import React from 'react'

export const ContactInfoWindow = (props) => {
    return (props.trigger) ?(
        <div className="popup">

            <div className="popup-inner">

                <div className="header">
                    <h1>Contact Info</h1>
                    <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
                </div>

                <div className="content">
                    <div className="content-top">
                        <ul>
                            <li>Email - msa242@sfu.ca</li>
                            <li>LinkedIn - https://www.linkedin.com/in/mikhail-sinitcyn-8909b5224/</li>
                            <li>Github - https://github.com/mishasinitcyn</li>
                        </ul>
                    </div>
                    <div className="content-bottom">
                        <div className="bottom-left">
                            {/* <div className="bottom-left-box"></div> */}
                        </div>
                        {/* 
                        <div className="bottom-right">
                        <a href="https://github.com/mishasinitcyn"> <div className="link-button">Github</div> </a>
                        <a href="https://www.linkedin.com/in/mikhail-sinitcyn-8909b5224/"> <div className="link-button">LinkedIn</div> </a>
                        </div>
                         */}
                    </div>
                </div>
            </div>
            

        </div>
    ) : "";
}

