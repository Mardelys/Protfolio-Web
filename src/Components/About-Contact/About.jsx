import React from "react"
import { IoRemoveOutline } from 'react-icons/io5'
import './About.css'


export default function AboutMe() {

   return (
      <div className="container-about">
         <div className="section-1">
            <div >
               <img className="img-about" src={require("./images/foto.png")} alt="" />
            </div>
            <div>
               <h2><IoRemoveOutline className="outline" />About Me</h2>
               <p>Hello, my name is Mardelys Torres, I enjoy creating and developing websites, I like interface design and putting it into practice every time I develop a project fills me with joy and satisfaction by appreciating how much progress I have made with time and practice. I started learning as a self-taught person in 2021 and managed to learn HTML and css, however, I learned a lot by taking the Educamás programming bootcamp "Programate Academy".</p>
               <p>My main focus is to create applications that are useful and pleasant to the user, develop complete projects and that satisfy the needs of the client.</p>
            </div>
         </div>
         <hr className="line" />
         <div className="section-2">
            <div >
               <h2>My Skills</h2>
            </div>
            <div>
               <ul className="icon-skills">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
               </ul>
            </div>
         </div>
      </div>

   )
}