import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useSelector}  from "react-redux"
import "./index.css"

const Contact = ()=>{
       const darkMode = useSelector((store)=>store.modeState.darkMode)
        const formRef = useRef();
        const [form, setForm] = useState({ name: '', email: '', message: '' });
        const [loading, setLoading] = useState(false);

        const handleChange = (e) => {
                 setForm({ ...form, [e.target.name]: e.target.value });
            };

                            const handleSubmit = (e) => {
                                e.preventDefault();
                                setLoading(true);

                                emailjs
                                .sendForm(
                                    process.env.REACT_APP_EMAILJS_SERVICE_ID,
                                    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                                    formRef.current,
                                    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
                                )
                                .then(() => {
                                    setLoading(false);
                                    toast.success('Message sent successfully!');
                                    setForm({ name: '', email: '', message: '' });
                                })
                                .catch((error) => {
                                    setLoading(false);
                                    toast.error('Failed to send message. Try again.');
                                    console.error(error);
                                });
                            };

                return (
                            
                <div className="contact-component">
                    
                   
                    <div className="social-media-accounts">
                 <div>
                    <a href={`${import.meta.env.VITE_FACEBOOK}`} target="_blank"><FaFacebook style={darkMode?{'fontSize':'35px','color':'white'}:{'fontSize':'35px'}} /></a>
                 </div>
                 <div>
                     <a href={`${import.meta.env.VITE_GITHUB}`} target="_blank"> <FaGithub style={darkMode?{'fontSize':'35px','color':'white'}:{'fontSize':'35px'}}/></a>
                  </div>
                 <div>
                    <a href={`${import.meta.env.VITE_LINKEDIN}`} target="_blank"> <FaLinkedin style={darkMode?{'fontSize':'35px','color':'white'}:{'fontSize':'35px'}}/></a>
                  </div>
                 <div>
                     <a href={`${import.meta.env.VITE_INSTAGRAM}`} target="_blank"> <FaInstagramSquare  style={darkMode?{'fontSize':'35px','color':'white'}:{'fontSize':'35px'}}/></a>
                  </div>
                 <div>
                    <a href={`${import.meta.env.VITE_TELEGRAM}`} target="_blank"> <FaTelegram style={darkMode?{'fontSize':'35px','color':'white'}:{'fontSize':'35px'}}/> </a> 
                  </div>
                 <div>
                      <a href={`${import.meta.env.VITE_TWITTER}`} target="_blank"><FaSquareXTwitter  style={darkMode?{'fontSize':'35px','color':'white'}:{'fontSize':'35px'}}/> </a>
                 </div>
                    </div> 

                  

                    <div className="medium-social-media-accounts">
                 <div>
                    <a href={`${import.meta.env.VITE_FACEBOOK}`} target="_blank"><FaFacebook style={darkMode?{'fontSize':'35px','color':'white'}:{'fontSize':'35px'}} /></a>
                 </div>
                 <div>
                     <a href={`${import.meta.env.VITE_GITHUB}`} target="_blank"> <FaGithub style={darkMode?{'fontSize':'35px','color':'white'}:{'fontSize':'35px'}}/></a>
                  </div>
                 <div>
                    <a href={`${import.meta.env.VITE_LINKEDIN}`} target="_blank"> <FaLinkedin style={darkMode?{'fontSize':'35px','color':'white'}:{'fontSize':'35px'}}/></a>
                  </div>
                 <div>
                     <a href={`${import.meta.env.VITE_INSTAGRAM}`} target="_blank"> <FaInstagramSquare  style={darkMode?{'fontSize':'35px','color':'white'}:{'fontSize':'35px'}}/></a>
                  </div>
                 <div>
                    <a href={`${import.meta.env.VITE_TELEGRAM}`} target="_blank"> <FaTelegram style={darkMode?{'fontSize':'35px','color':'white'}:{'fontSize':'35px'}}/> </a> 
                  </div>
                 <div>
                      <a href={`${import.meta.env.VITE_TWITTER}`} target="_blank"><FaSquareXTwitter  style={darkMode?{'fontSize':'35px','color':'white'}:{'fontSize':'35px'}}/> </a>
                 </div>
                    </div>

                    <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto' }}>
                            <ToastContainer position="top-right" />
                            <h2 className={`${darkMode?'contact-me-text text-white text-center text-4xl font-bold p-5 mb-10':"contact-me-text text-center text-4xl font-bold p-5 mb-10"}`}>Contact Me</h2>
                            <form ref={formRef} onSubmit={handleSubmit} >
                                <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                                className={`${darkMode?'contact-input contact-input-dark':'contact-input'}`}
                                required
                                />
                                <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={form.email}
                                onChange={handleChange}
                                className={`${darkMode?'contact-input contact-input-dark':'contact-input'}`}
                                required
                                
                                />
                                <textarea
                                name="message"
                                placeholder="Your Message"
                                value={form.message}
                                onChange={handleChange}
                                className={`${darkMode?'contact-textarea-dark contact-textarea':'contact-textarea'}`}
                                required
                                
                                />
                                <button type="submit" className="contact-btn">
                                {loading ? 'Sending...' : 'Send'}
                                </button>
                            </form>
                    </div>

                <div className="gmail-container">
                                      
                                       <div className={`${darkMode?'vertical-email vertical-email-dark':'vertical-email'}`}>
                                            <span>b</span>
                                            <span>a</span>
                                            <span>l</span>
                                            <span>a</span>
                                            <span>j</span>
                                            <span>i</span>
                                            <span>s</span>
                                            <span>u</span>
                                            <span>g</span>
                                            <span>u</span>
                                            <span>r</span>
                                            <span>@</span>
                                            <span>g</span>
                                            <span>m</span>
                                            <span>a</span>
                                            <span>i</span>
                                            <span>l</span>
                                            <span>.</span>
                                            <span>c</span>
                                            <span>o</span>
                                            <span>m</span>
                                       </div>
                                       <div className="line-container">
                                          <hr className={`${darkMode?'line line-dark':'line'}`}/>
                                       </div>
                </div>

               
  
              
                </div>
          )
}

export default Contact
