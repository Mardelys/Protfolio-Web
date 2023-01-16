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
               <h2><IoRemoveOutline className="outline" />About Me</h2>
               <p>Hello, my name is Mardelys Torres, I enjoy creating and developing websites, I like interface design and putting it into practice every time I develop a project fills me with joy and satisfaction by appreciating how much progress I have made with time and practice. I started learning as a self-taught person in 2021 and managed to learn HTML and css, however, I learned a lot by taking the Educamás programming bootcamp "Programate Academy".</p>
               <p>My main focus is to create applications that are useful and pleasant to the user, develop complete projects and that satisfy the needs of the client.</p>
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