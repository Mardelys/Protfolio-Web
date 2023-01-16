/*Estos son las dependencias que tiene con el otro comentario*/
import React from "react";
import "./Projects.css";
import { IoRemoveOutline } from 'react-icons/io5'

/*--------------AQUI INTENTO DE FILTROS-----dependencias ------*/


import { useState } from 'react';
import { ButtonList } from "./ButtonList";
import { ProjectsList } from "./CardProject";
import data from './data';

/*Aqui filtro y componente nuevo*/
function RenderProjects() {
   const allCategories = [
      'All',
      ...new Set(data.map(project => project.category)),
   ];

   const [categories, setCategories] = useState(allCategories);
   const [projects, setProjects] = useState(data);

   const filterCategory = (category) => {
      if (category === 'All') {
         setProjects(data)
         return
      }

      const filteredData = data.filter(project => project.category === category);
      setProjects(filteredData)
   }

   return (
      <>
         <div className="section-projects ">
            
            <h2><IoRemoveOutline className="outline" />Proyectos</h2>
            

             
               <ButtonList categories={categories} filterCategory={filterCategory} />
            
            
               <ProjectsList projects={projects} />
            
         </div>
      </>
   );
}

export default RenderProjects;



















/*

--------SOLO SERIA BORRAR LO QUE INDICO SI SALE MAL otra vez y volver a todo a la normalidad----
export default function ContainerProjects() {
  return (
    <div className="section-projects">
      <div>
        
        <div>
          <button className="button-filter" on>All</button>
          <button className="button-filter">My Work</button>
          <button className="button-filter">Collaborations</button>
        </div>
        <div className="container-projects">
          <Projects />
          <Projects />
          <Projects />
          <Projects />
          <Projects />
          <Projects />
          <Projects />
        </div>
      </div>
    </div>
  );
}*/


