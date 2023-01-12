import  React from 'react'
import './Nav-Footer.css'
import {HiMenu} from 'react-icons/hi'


export default function Nav() {
   return (
      <nav className='navbar menu nav'>
         <div>
         <img  className="img-personal" src={require("./images/Favicon.png")} alt="" />
         </div>
         <div className='nav_li_bar1'>
            <div className='nav_li_bar' >
               <li><a href="#">HOME</a></li>
               <li><a href="#">ABOUT</a></li>
               <li><a href="#">PROJECTS</a></li>
               <li><a href="#">CONTACT</a></li>
            </div>
            <div className='btn-cv'>
               <button>CV</button>
            </div>
            <div className='btn'>
               <button className='switch'>icono</button>
            </div>
            <div className='hamburguer-menu'>
               <HiMenu/>
            </div>
         </div>
      </nav>
      


   )
}