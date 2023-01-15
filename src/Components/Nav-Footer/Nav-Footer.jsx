import  React,{useState} from 'react'
import './Nav.css'
import {BsFillMoonFill, BsFillSunFill,BsGithub, BsInstagram, BsWhatsapp} from 'react-icons/bs'
import {GrLinkedinOption} from 'react-icons/gr'




export default function NavBar() {
   const [isOpen, setIsOpen] = useState(false)
   return (
      <>
     <header className="header-theme">
   <a href='#' className=''><img  className="img-personal" src={require("./images/Favicon.png")} alt="" /></a>
   <div className={`navbar ${isOpen && "open"}`} >
      <li><a href="#">HOME</a></li>
      <li><a href="#">ABOUT</a></li>
      <li><a href="#">PROJECTS</a></li>
      <li><a href="#">CONTACT</a></li>
   </div>
   <div className='main'>
      <a href='#' className="btn-cv">CV</a>
      <a href='#' ><button className="switch"><BsFillMoonFill className='icon-theme'/><BsFillSunFill className='icon-theme'/></button></a>
      <div className= {`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)} >
      <span></span>
      <span></span>
      <span></span>
      </div>
   </div>
      </header>
      <div className='container-icon'>
      <ul className='icon-contact'>
         <li><a href="#"><BsGithub/></a></li>
         <li><a href="#"><GrLinkedinOption/></a></li>
         <li><a href="#"><BsInstagram/></a></li>
         <li><a href="#"><BsWhatsapp/></a></li>
      </ul></div>
      </>


   )
}

export function Footer() {
   
   return (
      <div className="footer">
         <p>Designed & built by Mardelys Torres </p>
         <a href="#">mardelys1996@gmail.com </a>
         
      </div>
   )}