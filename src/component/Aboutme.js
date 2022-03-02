import React from 'react'
import Image from 'react-bootstrap/Image'
import "../component/Aboutme.css"
import Slide from 'react-reveal/Slide';

function Aboutme() {
    return (
        <div id="aboutme">
            <div className="aboutme">
                <h1>ABOUT ME</h1>
                <div className="details">
                    <Slide left><div className="details-left">
                        <img src="pic2.jpeg"></img>
                    </div></Slide>
                    <Slide right><div className="details-right">
                        <h4>I am a designer with passion &#128150;</h4>
                        <p>Hi guys!! Myself Manikandan R from Vallam,Thanjavur District,TamilNadu,India.
                            I completed my Higher and secondary board schooling in Allwin higher Secondary School,Thanjavur.
                            I chose Computer Science in my higher board Schooling.
                            After,I joined SASTRA Deemed To Be University ,Thanjavur,TamilNadu to pursue my Bachelor's degree in Electronics and Communication Engineering.
                            <p>
                                In first Year, I face little struggle in programming paper.Then upcoming Years I tied to make my way to enrich in programing.I use covid-19 lockdown period,try to enrich my programming skills.
                                So,I interested to start learn App development,Web development with my friends,also enchance skills in java,javascripts,kotlin and other some.At the end I came this decision even the programming was difficult for me never stop to learn the new stuffs.Started to
                                learn a programming with passion.
                                Now I am a developer!
                            </p>
                        </p>

                    </div>
                    </Slide>
                </div>
            </div>

        </div >


    )
}

export default Aboutme
