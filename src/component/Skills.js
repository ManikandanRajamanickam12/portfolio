import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import { faEnvira } from "@fortawesome/free-brands-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faKorvue } from "@fortawesome/free-brands-svg-icons";
import "../component/Skills.css"
import Slide from 'react-reveal/Slide';



function Skills() {

    return (
        <div id="skills">
            <div className="skills">
                <h1>TECH SKILLS</h1>
                <div className="tech-skills">
                    <Slide left><div className="frontend">
                        <p id="title">Front-End</p>
                        <hr />
                        <p className="skill1">
                            <FontAwesomeIcon className="icon" icon={faHtml5} color="Dodgerblue" />
                            <FontAwesomeIcon className="icon" icon={faCss3Alt} color="Dodgerblue" />
                        </p >
                        <p className="skill2">
                            <FontAwesomeIcon className="icon" icon={faJs} color="Dodgerblue" />
                            <FontAwesomeIcon className="icon" icon={faReact} color="Dodgerblue" />
                        </p>


                    </div>
                    </Slide>

                    <div className="backend">
                        <p id="title">Back-End</p>
                        <hr />
                        <p className="skill3">
                            <span><img className="icon" src="expresss.png" width="120px" width="180px" height="100px" /></span>

                        </p >
                        <p className="skill4">
                            <span><img className="icon" src="mongoose.png" width="120px" width="180px" height="100px" /></span>
                            <span> <FontAwesomeIcon className="icon" icon={faNode} color="Dodgerblue" /></span>
                        </p >
                    </div>

                    <Slide right>
                        <div className="dbase-app">
                            <p id="title">Database</p>
                            <hr />
                            <p className="skill5">

                                <FontAwesomeIcon className="icon" icon={faEnvira} color="Dodgerblue" />
                            </p >
                            <p id="title">Android-App</p>
                            <hr />
                            <p className="skill6">
                                <span><FontAwesomeIcon className="icon" icon={faJava} color="Dodgerblue" /></span>
                                <span><FontAwesomeIcon className="icon" icon={faKorvue} color="Dodgerblue" /></span>

                            </p>
                        </div>
                    </Slide>

                </div>
            </div>
        </div>
    )
}

export default Skills
