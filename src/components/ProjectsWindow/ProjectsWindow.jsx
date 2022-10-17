import React from 'react'
import "./ProjectsWindow.css"
import fileIcon from "./executable_script-0.png";
import documentIcon from "./document-0.png"
import descriptionIcon from "./message_file-0.png"
import {useState} from 'react';
import {FortisBC} from "./project-components/FortisBC"
import {BloodBank} from "./project-components/BloodBank"
import {Router} from "./project-components/Router"
import {CancerData} from "./project-components/CancerData"
import {ClimateData} from "./project-components/ClimateData"

export const ProjectsWindow = (props) => {
    const [FortisPopup, setFortisPopup] = useState(false);
    const [BloodBankPopup, setBloodBankPopup] = useState(false);
    const [RouterPopup, setRouterPopup] = useState(false)
    const [CancerDataPopup, setCancerDataPopup] = useState(false)
    const [ClimateDataPopup, setClimateDataPopup] = useState(false)

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
                            <td><a href="https://www.youtube.com/embed/BQbco5ynQIs" target="_blank">Demo</a></td>
                        </tr>
                        <tr>
                            <td onClick={() => setBloodBankPopup(true)}> <img src={fileIcon}/> Blood Bank Database</td>
                            <td>Jul-Aug 2022</td>
                            <td>CMPT354</td>
                            <td><a href="https://github.com/n-maido/best-354-app" target="_blank">Github</a></td>
                        </tr>
                        <tr>
                            <td  onClick={() => setRouterPopup(true)}><img src={fileIcon}/> Network Router</td>
                            <td>Mar 2022</td>
                            <td>CMPT371</td>
                            <td><a href="https://github.com/mishasinitcyn/Routing-Table" target="_blank">Github</a></td>
                        </tr>
                        <tr>
                            <td  onClick={() => setCancerDataPopup(true)} ><img src={documentIcon}/> Cancer Data Analysis</td>
                            <td>Aug 2022</td>
                            <td>MACM316</td>
                            <td><a href="https://github.com/mishasinitcyn/Computing-Report-Cancer-Data-Analysis/blob/main/Computing%20Report%203%20Mikhail%20Sinitcyn.pdf" target="_blank">Github</a></td>
                        </tr>
                        <tr>
                            <td onClick={() => setClimateDataPopup(true)} ><img src={documentIcon}/> Climate Data Analysis</td>
                            <td>Aug 2022</td>
                            <td>CMPT310</td>
                            <td><a href="https://github.com/mishasinitcyn/Tree-Ring-Data-Analysis" target="_blank">Github</a></td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <FortisBC trigger={FortisPopup} setTrigger={setFortisPopup}/>

            <BloodBank trigger={BloodBankPopup} setTrigger={setBloodBankPopup}/>
            <Router trigger={RouterPopup} setTrigger={setRouterPopup}/>
            <CancerData trigger={CancerDataPopup} setTrigger={setCancerDataPopup}/>
            <ClimateData trigger={ClimateDataPopup} setTrigger={setClimateDataPopup}/>

        </div>
    ) : "";
}

