import React from 'react'
import "./AboutWindow.css"

export const AboutWindow = (props) => {
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
                        </div>
                        <div className="about-education-right">
                            <img src="https://viewpointvancouver.ca/wp-content/uploads/2021/01/SFU-logo.png"></img>
                        </div>
                    </div>
                    
                    <div className="about-courses">
                    <table className="courses-table">
                        <tr>
                            <th>Course Name</th>
                            <th>Course Code</th>
                            <th>Status</th>
                        </tr>
                        <tr>
                            <td>Algebra I: Linear Algebra</td>
                            <td>MATH240</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>Artificial Intelligence</td>
                            <td>CMPT310</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>Calculus I</td>
                            <td>MATH150</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>Calculus II</td>
                            <td>MATH152</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>Computing Laboratory</td>
                            <td>CMPT127</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>Data Communications and Networking</td>
                            <td>CMPT371</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>Computing Laboratory</td>
                            <td>CMPT127</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>Data Structures and Algorithms</td>
                            <td>CMPT307</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>Database Systems</td>
                            <td>CMPT354</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>Discrete Mathematics I</td>
                            <td>MACM101</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>Discrete Mathematics II</td>
                            <td>MACM101</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>Introduction to Computer Systems</td>
                            <td>CMPT295</td>
                            <td>In Progress</td>
                        </tr>
                        <tr>
                            <td>Introduction to Probability and Statistics</td>
                            <td>STAT270</td>
                            <td>In Progress</td>
                        </tr>
                        <tr>
                            <td>Macroeconomics</td>
                            <td>ECON105</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>Microeconomics</td>
                            <td>ECON103</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>Multimedia Systems</td>
                            <td>CMPT365</td>
                            <td>In Progress</td>
                        </tr>
                        <tr>
                            <td>Numerical Analysis</td>
                            <td>MACM316</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>Social Issues and Communication Strategies in Computing Science</td>
                            <td>CMPT105W</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>Software Engineering</td>
                            <td>CMPT276</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>User Interface Design</td>
                            <td>CMPT363</td>
                            <td>In Progress</td>
                        </tr>

                    </table>
                    </div>
                </div>
            </div>
            

        </div>
    ) : "";
}

