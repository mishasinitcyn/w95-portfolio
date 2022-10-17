import React from 'react'
import "./EducationWindow.css"

export const EducationWindow = (props) => {
    return (props.trigger) ?(
        <div className="education-popup">

            <div className="education-popup-inner">

                <div className="education-header">
                    <h1>Courses Taken at Simon Fraser University</h1>
                    <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
                </div>

                <div className="education-content">
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
                            <td>MACM201</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>Introduction to Artificial Intelligence</td>
                            <td>CMPT310</td>
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
                            <td>Numerical Analysis</td>
                            <td>MACM316</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>Communication Strategies in Computing Science</td>
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
    ) : "";
}