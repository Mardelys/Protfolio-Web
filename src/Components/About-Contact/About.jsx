import React from "react"
import './About.css'
import { IoRemoveOutline, IoLogoVercel } from 'react-icons/io5'
import { TbBrandJavascript } from 'react-icons/tb'
import {SiNetlify } from 'react-icons/si'
import { FaHtml5, FaCss3Alt, FaReact, FaGithubAlt,FaGitAlt } from 'react-icons/fa'
import './About.css'

export default function AboutMe() {

   return (
      <div className="container-about">
         <div className="section-1">
            <div >
               <img className="img-about" src={require("./images/foto.jpg")} alt="" />
            </div>
            <div>
               <h2><IoRemoveOutline className="outline" />Acerca de mí</h2>
               <p>Hola, mi nombre es Mardelys Torres, disfruto creando y desarrollando sitios web, me gusta el diseño de interfaces y ponerlo en práctica cada vez que desarrollo un proyecto me llena de alegría y satisfacción al apreciar cuánto he avanzado con el tiempo y práctica. Empecé a aprender como autodidacta en 2021 y logré aprender HTML y css, sin embargo, aprendí mucho tomando el bootcamp de programación de Educamás "Programate Academy" de donde soy egresada.</p>
               <p>Mi enfoque principal es crear aplicaciones que sean útiles y agradables para el usuario, desarrollar proyectos completos y que satisfagan las necesidades del cliente. Además de todo, obtener nuevos conocimientos y habilidades por cada reto que completo satisfactoriamente y sobre cualquier cosa siempre dar lo mejor de mi.</p>
            </div>
         </div>
         <div className="section-2">
            <div >
               <h2>My Skills</h2>
            </div>
            <div>
               <ul className="icon-skills">
                  <li><FaHtml5/></li>
                  <li><FaCss3Alt/></li>
                  <li><TbBrandJavascript/></li>
                  <li> <FaReact/></li>
                  <li> <FaGithubAlt/></li>
                  <li><FaGitAlt/></li>
                  <li><IoLogoVercel/></li>
                  <li><SiNetlify/></li>
               </ul>
            </div>
         </div>
      </div>

   )
}