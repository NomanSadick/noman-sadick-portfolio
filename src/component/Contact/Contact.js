import React from 'react';
import './Contact.css'
import emailjs from 'emailjs-com';
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';


const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_cm0s8qc', 'template_3wavjjg', e.target, 'user_8JOHJHMvAXdnyYbrqyyUS')
            .then((result) => {
                if (result) {
                    alert("your message successfully sent!")
                }
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div className="contacts" id="contact">
            <h2 className="section__heading">Contact</h2>
                <div className="row pl-4 "  style={{maxWidth: "1000px",margin: "auto"}}>
                    <div className="col-md-4 contact-details">
                                <h2 >Get In Touch</h2>
                                <p className="address">
                                <HomeIcon/><span className="address-details"> 
                                Kaligonj, Jhinaidah, Bangladesh.
                                </span><br />
                                <PhoneIcon/><span className="address-details">+880-1722-466476</span><br />
                                <EmailIcon/><span className="address-details"> nomansadickjs@gmail.com </span> 
                                </p>
                    </div>
                    <div className="col-md-6 col-sm-12 ">
                        <h2>Fill Free To Message Me</h2>
                        <form  className="contact-form" action="" onSubmit={sendEmail} >
                            <div className="form-group">


                                <input type="text" name="name"
                                    style={{border:'1px solid gray'}}
                                    placeholder="Your name " id=""
                                      required
                                />

                                <input type="email" name="email"
                                style={{border:'1px solid gray'}}
                                    placeholder="Your email address " id=""
                                      required
                                />

                                <input type="text" name="subject"
                                style={{border:'1px solid gray'}}
                                    placeholder="Subject" id=""
                                      required
                                />

                                <textarea type="text-area" name="message"
                                
                                    placeholder=" Your message " id=""
                                    
                                    required
                                    rows="4" cols="38"
                                    className="order-text-area  contact-text-area"
                                    style={{ height: " 80px", paddingTop: "15px",border:'1px solid gray' }}
                                />

                            </div>

                            <div className="" style={{ width: " 170px", }}>
                                <input
                                    className="submit-button "
                                    type="submit"
                                    value="Submit"
                                    style={{
                                        background: "#262335",
                                        // padding: " 0 50px 20px 45px",
                                        width: "170px",
                                        height: "42px",
                                        marginTop: "10px",
                                        border: "none",
                                        color: "white",
                                        fontWeight: 'bold',
                                        textTransform: "uppercase",
                                        letterSpacing:'2px',
                                        alignItems: "center",
                                        textAlign: "center"
                                       
                                    }}
                                />
                            </div>

                        </form>
                    </div>

                </div>
       
   
        </div>
    );
};

export default Contact;