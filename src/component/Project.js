import React from 'react'
import "../component/Project.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos, GitHub, ZoomOut } from "@material-ui/icons";
import image1 from "../image/pic1.png"
import image2 from "../image/pic2.png"
import image3 from "../image/pic3.png"
import image4 from "../image/Pandect.jpeg"
import image5 from "../image/tweedle.jpeg"
import image6 from "../image/ssite.jpeg"
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import { borderRadius } from '@material-ui/system';

function Project() {
    const PreviousBtn = (props) => {
        console.log(props);
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
            </div>
        );
    };
    const NextBtn = (props) => {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
            </div>
        );
    };

    return (
        <div id="projects" className="project-section">
            <h1>Projects</h1>
            <div className="testimonial"
                style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
                <div style={{ width: "60%", height: "", textAlign: "center" }}>

                    <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
                        <Card1 img1={image2} />
                        <Card2 img2={image3} />
                        <Card3 img3={image1} />
                        <Card4 img4={image4} />
                        <Card5 img5={image5} />
                        <Card6 img6={image6} />

                    </Slider>
                </div>
            </div>

        </div>
    )
}

const Card1 = ({ img1 }) => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            color: "gray",

        }}>
            <img
                src={img1}
                style={{
                    width: 700,
                    height: 320,
                    border: "1px solid #0ba7f0",
                    padding: 7,
                    marginBottom: 20,


                }} />
            <p style={{ color: "white" }} >
                My Recent work  is a Website for the  Tech Innovation club of Sastra University as a Team. This website is build to provide access for students regarding various Club Activities and Event.
            </p>


            <div id="github" style={{ border: "2px solid white", padding: "10px", backgroundColor: " #7a7875", borderRadius: "20px" }}>
                <p style={{ color: "white" }}>Visit Page</p> <a href="https://ticofsastra.web.app/" target="_blank"> <FindInPageIcon /></a>
            </div>
        </div>
    )

}

const Card2 = ({ img2 }) => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            color: "gray",

        }}>
            <img
                src={img2}
                style={{
                    width: 700,
                    height: 320,
                    border: "1px solid #0ba7f0",
                    padding: 7,
                    marginBottom: 20,


                }} />
            <p style={{ color: "white" }}>
                Dovetail is a Real Time Chat Application which helps to connect
                people around us.It was created as part of a competition sponsored by the IITH to make it easier for visitors to interact with the site.
            </p>
            {/* <p style={{ fontStyle: "italic", marginTop: 25 }}>
                <span style={{ fontWeight: 500, color: "green" }}>Web developer</span>wefiveplusu </p> */}
            <div id="github" style={{ border: "2px solid white", padding: "10px", backgroundColor: " #7a7875", borderRadius: "20px" }}>
                <p style={{ color: "white" }}>Visit Page</p> <a href="https://dovetail-elan.herokuapp.com/" target="_blank"> <FindInPageIcon /></a>
            </div>
        </div>
    )

}
const Card3 = ({ img3 }) => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            color: "gray",

        }}>
            <img
                src={img3}
                style={{
                    width: 700,
                    height: 320,
                    border: "1px solid #0ba7f0",
                    padding: 7,
                    marginBottom: 20,


                }} />
            <p style={{ color: "white" }} >
                A Web Application for Restaurant.My first Web Application using HTML5,CSS,and Javascript.
            </p>


            <div id="github" style={{ border: "2px solid white", padding: "10px", backgroundColor: " #7a7875", borderRadius: "20px" }}>
                <p style={{ color: "white" }}>Visit Page</p> <a href="https://manikandanrajamanickam12.github.io/courseratest/
ass5/5/" target="_blank"> <FindInPageIcon /></a>
            </div>
        </div>
    )

}
const Card4 = ({ img4 }) => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            color: "gray",

        }}>
            <img
                src={img4}
                style={{
                    width: 700,
                    height: 320,
                    border: "1px solid #0ba7f0",
                    padding: 7,
                    marginBottom: 20,


                }} />
            <p style={{ color: "white" }}>
                Pandect is a blog platform. Users can share documents, photographs, movies, and any other form of file with it. Using his Google account, the User can sign up in this platform.
            </p>
            {/* <p style={{ fontStyle: "italic", marginTop: 25 }}>
                <span style={{ fontWeight: 500, color: "green" }}>Web developer</span>wefiveplusu </p> */}
            <div id="github" style={{ border: "2px solid white", padding: "10px", backgroundColor: " #7a7875", borderRadius: "20px" }}>
                <p style={{ color: "white" }}>Visit Github</p> <a href="https://dovetail-elan.herokuapp.com/" target="_blank"> <GitHub /></a>
            </div>
        </div>
    )

}
const Card5 = ({ img5 }) => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            color: "gray",

        }}>
            <img
                src={img5}
                style={{
                    width: 700,
                    height: 320,
                    border: "1px solid #0ba7f0",
                    padding: 7,
                    marginBottom: 20,


                }} />
            <p style={{ color: "white" }} >
                A private social networking site for members of a specific organisation. Only participants with a valid SASTRA account are allowed to use the app in this project.
            </p>


            <div id="github" style={{ border: "2px solid white", padding: "10px", backgroundColor: " #7a7875", borderRadius: "20px" }}>
                <p style={{ color: "white" }}>Visit Github</p> <a href="github.com/ManikandanRajamanickam12" target="_blank"> <GitHub /></a>
            </div>
        </div>
    )

}
const Card6 = ({ img6 }) => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            color: "gray",

        }}>
            <img
                src={img6}
                style={{
                    width: 700,
                    height: 320,
                    border: "1px solid #0ba7f0",
                    padding: 7,
                    marginBottom: 20,


                }} />
            <p style={{ color: "white" }} >
                UTSAV'20, hosted by Sastra University, was my first web development competition. My colleague and I were awarded the 1st Runner Up Prize in this competition.
            </p>


            <div id="github" style={{ border: "2px solid white", padding: "10px", backgroundColor: " #7a7875", borderRadius: "20px" }}>
                <p style={{ color: "white" }}>Visit Page</p> <a href="github.com/ManikandanRajamanickam12" target="_blank"> <GitHub /></a>
            </div>
        </div>
    )

}




export default Project
