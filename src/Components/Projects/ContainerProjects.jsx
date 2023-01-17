
import React from "react";
import "./Projects.css";
import { IoRemoveOutline } from 'react-icons/io5'
import { useState } from 'react';
import { ButtonList } from "./ButtonList";
import { ProjectsList } from "./CardProject";
import data from './data';


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





















