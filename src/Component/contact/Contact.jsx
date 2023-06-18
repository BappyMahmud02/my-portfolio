import React, { useContext, useRef, useState } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { themeContext } from '../../Context';



const Contact = () => {
    const form = useRef()
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_7azm4dj', 'template_8fxn059', form.current, '2Ute_3QWOh1s2bfmy')
          .then((result) => {
              console.log(result.text);
              setDone(true)
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Thanks for Contacting me',
                showConfirmButton: false,
                timer: 1500
              })
          }, (error) => {
              console.log(error.text);
          });
      };

      const theme = useContext(themeContext);
      const darkMode = theme.state.darkMode;

    return (
        <div className="contact-form container mx-auto" >
            <div className='w-left'>
                <div className="span ">
                    <span style={{color: darkMode?'white': ''}} className='font-bold text-[70px]'>Get in touch</span> <br />
                    <span className='contact font-bold text-[40px]'>Contact me</span>
                    <div
                        className="blur s-blur1"
                        style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>

            </div>
            {/* right side form */}
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="submit" value="Send me" className="button s-button" />
                    {/* <span>{done && "Thanks for Contacting me"}</span> */}
                    <div
                        className="blur c-blur1"
                        style={{ background: "var(--purple)" }}
                    ></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;