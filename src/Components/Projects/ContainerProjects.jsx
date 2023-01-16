import React,{useState} from "react";
import CardProject from './CardProject'
import './Projects.css'
import { CardProject, ButtonList } from './components';


export default function Projects(){
   const allCategories = [
		'All',
		...new Set(data.map(article => article.category)),
	];

	const [categories, setCategories] = useState(allCategories);
	const [articles, setArticles] = useState(data);

	const filterCategory = (category) => {
		if (category === 'All'){
			setArticles(data)
			return
		}

		const filteredData = data.filter(article => article.category === category);
		setArticles(filteredData)
	}

	return (
		<>
			<div className='title'>
				<h1>
					Filter <span>Blog</span> Basics
				</h1>
				<img
					src='https://blogfilterbasics.netlify.app/static/media/img-portada.8261f3883a73550017d1.png'
					alt='imagen-header'
				/>
			</div>

			<ButtonList categories={categories} filterCategory={filterCategory}/>

			<ArticleList articles={articles}/>
		</>
	);
}

      {/*<div className="section-projects">
         <div>
            <h1>Projects</h1>
            <div>
               <button>All</button>
               <button>My Work</button>
               <button>Collaborations</button>
            </div>
            <div className="container-projects">
           
            
            </div>
         </div>

   </div>*/}
   