import React from 'react'
import "./BloodBank.css"

export const BloodBank = (props) => {
    return (props.trigger) ?(
        
        <div className="popup">
            <div className="blood-bank-popup-inner">
                <div className="blood-bank-header"  style={{backgroundColor: "blue"}}>
                    <h1>Blood Bank Database</h1>
                    <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
                </div>

                <div className="blood-bank-content">
                    <div className="blood-bank-description">
                        <p><strong>Project Description</strong></p>
                        <text>
                            I worked within a team of three computer science students to develop a database to manage the collection, storage, and transportation of blood.
                            <br></br>Built as a course project for CMPT354 Database Systems, this database provides a solid foundation of database design principles.
                        </text>
                    </div>

                    <div className="blood-bank-tech">
                        <p><strong>My Contributions</strong></p>
                        <ul>
                            <li>Composed complex queries such as divison, nested aggregation and grouping.</li>
                            <li>Applied database design principles such as 3NF and BCNF, and designed the Entity Relation Diagram using Lucidchart to demonstrate cardinality and dependency constraints.</li>
                            <li>Maintained workflow and version control using DevOps tools such as Jira and GitHub</li>
                            <li>Deployed the database using Node, Express, and PostgreSQL.</li>
                        </ul>
                    </div>

                    <div className="fortis-tech">
                        <p><strong>Languages, Frameworks, Libraries Used</strong></p>
                        <ul>
                            <li>Node</li>
                            <li>Express</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    ): ""
}
