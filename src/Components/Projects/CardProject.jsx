import React from "react";
import { FaHtml5, FaCss3Alt, FaReact,FaGithub,  FaGitAlt } from 'react-icons/fa'
import { TbBrandJavascript } from 'react-icons/tb'
import { FiExternalLink } from 'react-icons/fi'
import './Projects.css'




export default function Projects({image,title,icon1,icon2,description,deploy, github}) {
   return (
      <div className="card-project">
         
         <div className="card-body">
            <div className="card-header">
               <h1>{title}</h1>
               <img className="img-project" src={require(`./images/img-${image}.png`)} alt="" />
            </div>
            <div className="icon-tecnology" >
               <ul>
                  <li><FaHtml5 className="fab" /></li>
                  <li><FaCss3Alt className="fab" /></li>
                  <li className="fab">{icon1}</li>
                  <li className="fab">{icon2}</li>
                  
               </ul>
            </div>
            <div className="container-info">
               <div className="info"><p>{description}</p></div>
               <div className="icons">
                  <a href={`${deploy}`}><FiExternalLink className="icon-external" /></a>
                  <a href={`${github}`}><FaGithub className="icon-external" /></a>
               </div>


            </div>

         </div>
      </div>
   )
}