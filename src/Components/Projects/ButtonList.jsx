import React from "react";


//a constant called button list is created, this contains the buttons to filter the categories of the projects
export const ButtonList = ({ categories, filterCategory }) => {
   //what will give structure to the button is returned
   //a map is made of what the category component contains, which in this case are the different categories assigned to the projects

	return (
		<div className='categories'>
			{categories.map(category => (
				<button
					type='button'
					className='btn-category'
					onClick={() => filterCategory(category)}
					key={category}
				>{/*a key is placed so that it can be identified that the button is linked to said category and inside the button the prop of the category to be filtered is passed*/}
					{category}
				</button> 
			))}
		</div>
	);
};

export default ButtonList;