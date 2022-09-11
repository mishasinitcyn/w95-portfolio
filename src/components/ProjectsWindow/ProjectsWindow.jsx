import React from 'react'
import "./ProjectsWindow.css"
import fileIcon from "./executable_script-0.png";
import documentIcon from "./document-0.png"
import descriptionIcon from "./message_file-0.png"
import {useState} from 'react';
import {FortisBC} from "./project-components/FortisBC"
import {BloodBank} from "./project-components/BloodBank"
import {Router} from "./project-components/Router"

export const ProjectsWindow = (props) => {
    const [FortisPopup, setFortisPopup] = useState(false);
    const [BloodBankPopup, setBloodBankPopup] = useState(false);
    const [RouterPopup, setRouterPopup] = useState(false)

    return (props.trigger) ?(
        <div className="popup">

            <div className="projects-popup-inner">

                <div className="header"  style={{backgroundColor: "blue"}}>
                    <h1>Academic Projects</h1>
                    <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
                </div>

                <div className="content">
                    <table className="projects-table">
                        <tr>
                            <th>Project</th>
                            <th>Date</th>
                            <th>Course</th>
                            <th>Source</th>
                        </tr>
                        <tr>
                           <td onClick={() => setFortisPopup(true)} ><img src={fileIcon}/> FortisBC Document Database </td>
                            <td>Mar-Apr 2022</td>
                            <td>CMPT276</td>
                            <td><a href="https://github.com">Github</a></td>
                        </tr>
                        <tr>
                            <td onClick={() => setBloodBankPopup(true)}> <img src={fileIcon}/> Blood Bank Database</td>
                            <td>Mar-Apr 2022</td>
                            <td>CMPT354</td>
                            <td>Github</td>
                        </tr>
                        <tr>
                            <td  onClick={() => setRouterPopup(true)}><img src={fileIcon}/> Network Router</td>
                            <td>Mar-Apr 2022</td>
                            <td>CMPT371</td>
                            <td>Github</td>
                        </tr>
                        <tr>
                            <td><img src={documentIcon}/> Cancer Data Analysis</td>
                            <td>Mar-Apr 2022</td>
                            <td>MACM316</td>
                            <td>Github</td>
                        </tr>
                        <tr>
                            <td><img src={documentIcon}/> Climate Data Analysis</td>
                            <td>Mar-Apr 2022</td>
                            <td>CMPT310</td>
                            <td>Github</td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <FortisBC trigger={FortisPopup} setTrigger={setFortisPopup}/>

            <BloodBank trigger={BloodBankPopup} setTrigger={setBloodBankPopup}/>
            <Router trigger={RouterPopup} setTrigger={setRouterPopup}/>

        </div>
    ) : "";
}
