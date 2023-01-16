import React from "react";
import './About.css';
import { IoRemoveOutline } from 'react-icons/io5'


export default function Contact(){
   return(
      <div className="container-contact">
         <div>
            <h2><IoRemoveOutline className="outline"/> Contáctame</h2>
            <p>Gracias por llegar hasta aquí, por el momento no tengo experiencia laboral, estoy buscando una oportunidad y mi primer empleo. Si tienes dudas o necesitas más información sobre mí, escribe un mensaje, o si solo quieres saludarme, estaré encantada de atenderte.</p>
            <p>
            Gracias por tomarte el tiempo de mirar lo que hago, puedes contactarme directamente a mi correo o whatsapp si es de tu preferencia, te responderé a la brevedad con mucho gusto.
            </p>
         </div>
         <div className="container-button">
            <a href="mailto:mardelys1996@gmail.com"><button className="button-contact">E-mail</button></a>
            <a href="https://wa.link/sbnsjl" target="_blank"><button>Whatsapp</button></a>
         </div>
      </div>
   )
}

