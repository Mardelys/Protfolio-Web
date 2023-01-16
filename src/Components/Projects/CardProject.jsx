import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub} from 'react-icons/fa'
import { TbBrandJavascript } from 'react-icons/tb'
import { FiExternalLink } from 'react-icons/fi'
import './Projects.css'

/*---------Apartir de aqui pego la seccion-----*/




export const ProjectsList = ({ projects }) => {
   return (
      <div className="container-projects">
         {projects.map(project => (
            <div className="card-project">
               <div className="card-body">
                  <div className="card-header">
                     <h1>{project.title}</h1>
                     <img className="img-project" src={require(`./images/img-${project.image}.png`)} alt="" />
                  </div>
                  <div className="icon-tecnology" >
                     <ul>
                        <li><FaHtml5 className="fab" /></li>
                        <li><FaCss3Alt className="fab" /></li>
                        <li><TbBrandJavascript className="fab" /></li>
                        <li ><FaReact className="fab" /></li>

                     </ul>
                  </div>
                  <div className="container-info">
                     <div className="info"><p>{project.description}</p></div>
                     <div className="icons">
                        <a href={project.link}><FiExternalLink className="icon-external" /></a>
                        <a href={project.github}><FaGithub className="icon-external" /></a>
                     </div>
                  </div>
               </div>

            </div>))}
      </div>
   )
};
export default ProjectsList;




/**export  const Projects =() =>{
   return (
      <div className="card-project">
         
         <div className="card-body">
            <div className="card-header">
               <h1>skdnksadn</h1>
               <img className="img-project" src={require(`./images/img-ecommerce.png`)} alt="" />
            </div>
            <div className="icon-tecnology" >
               <ul>
                  <li><FaHtml5 className="fab" /></li>
                  <li><FaCss3Alt className="fab" /></li>
                  <li><TbBrandJavascript className="fab"/></li>
                  <li ><FaReact className="fab"/></li>
                  
               </ul>
            </div>
            <div className="container-info">
               <div className="info"><p>jszshfjkashfkjaskf</p></div>
               <div className="icons">
                  <a href="#"><FiExternalLink className="icon-external" /></a>
                  <a href="#"><FaGithub className="icon-external" /></a>
               </div>
            </div>
         </div>
         
      </div>
   )
}
export default Projects;*/