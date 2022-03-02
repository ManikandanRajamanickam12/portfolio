import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import "../component/Contact.css"
import emailjs from "emailjs-com";
import Pulse from 'react-reveal/Pulse';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    function handleSubmit(e) {


        e.preventDefault();
        emailjs
            .sendForm(
                "service_odtokap",
                "template_6yidb7p",
                e.target,
                "user_URGXU97U57rRK2W1eCM1w"
            )
            .then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                },
                function (err) {
                    console.log("FAILED...", err);
                }
            );
        toast("Response sent :)");

    }

    // const handleSubmit = () => toast("Response sent :)");

    return (
        <div id="contact">
            <div className="contact-section">
                <h1>Get In Touch</h1>
                <div className="contact-info">
                    <div className="contact-detail">
                        <h3>Manikandan R</h3>
                        <p>Vallam,Thanjavur</p>
                        <label>Email-ID</label>
                        <p>vlmani2000@gmail.com</p>
                        <div className="media">

                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100025351846238" target="blank"> <FacebookIcon className="fb1" /></a>
                                    <a href="https://www.instagram.com/manikandan_1212_/" target="blank"><InstagramIcon className="insta1" /></a>
                                    <a href="https://www.linkedin.com/in/manikandan-r-5b4a171a6/" target="blank"><LinkedInIcon className="linkedin1" /></a>
                                    <a href="https://github.com/ManikandanRajamanickam12" target="blank"><GitHubIcon className="githup1" /></a>
                                </li>
                            </ul>
                            <span>Resume   -<a href="https://drive.google.com/file/d/1C2NgnGHStXio4u6LoW-4TI92VuFOvo1s/view?usp=sharing" target="blank"><InsertDriveFileIcon className="resume" /></a></span>

                        </div>



                    </div>

                    <div className="contact-container">

                        {/* <div className="contact-field">
                            <h2>Share ur thoughts &nbsp;&#x1F4AC;</h2>
                            <input type="text" placeholder="Full Name" required  ></input><br />
                            <input type="email" placeholder="Email" required></input><br />
                            <input type="text" placeholder="Subject" required  ></input><br />
                            <textarea rows="8" placeholder="Message" required></textarea><br />
                            <button>Send</button>
                        </div> */}

                        <Pulse>  <form action="submit" className="form" onSubmit={handleSubmit}>

                            <h4 className="form__title">Share your thoughts &nbsp;&#x1F4AC;</h4>

                            <div className="form__div">
                                <input type="text" className="form__input" name="username" placeholder=" " required />
                                <label className="form__label">Your Name</label>
                            </div>

                            <div className="form__div">
                                <input type="email" className="form__input" name="useremail" placeholder=" " required />
                                <label for="" className="form__label">Your Email</label>
                            </div>
                            <div id="main_div" className="form__div">
                                <textarea id="textarea" className="form__input" placeholder=" " name="message" rows="4" required />
                                <label for="" className="form__label">Share your message!</label>
                            </div>
                            <button className="form__button" >Submit</button>
                            <ToastContainer />
                        </form>
                        </Pulse>

                    </div>



                </div>

            </div>

        </div >
    )
}

export default Contact
