import React from "react";
import './About.css';
import { IoRemoveOutline } from 'react-icons/io5'


export default function Contact(){
   return(
      <div className="container-contact">
         <div>
            <h2><IoRemoveOutline className="outline"/> Get In Touch</h2>
            <p>Thank you for getting here, at the moment I do not have work experience, I am looking for an opportunity and my first job. If you have questions or need more information about me, write a message, or if you just want to say hello, I'll be happy to answer.</p>
            <p>
            Thank you for taking the time to look at what I do, you can contact me directly at my email or whatsapp if it is your preference, I will respond soon with great pleasure.
            </p>
         </div>
         <div className="container-button">
            <a href="mailto:mardelys1996@gmail.com"><button className="button-contact">E-mail</button></a>
            <a href="https://wa.link/sbnsjl" target="_blank"><button>Whatsapp</button></a>
         </div>
      </div>
   )
}

