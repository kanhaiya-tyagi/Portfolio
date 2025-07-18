import React from 'react'
import ProCard from "./proCard"

const projects = ({Id, heading}) => {
	return (
		<div className='prd' id={Id}>
		<div className='headDiv projectSection'>
			<h1 className="secHead">{heading}</h1>
			<ProCard 
			proName="Task Manager" 
			href="https://kanhaiya-tyagi.github.io/task-manager/settings"
			description="A responsive React-based task manager with dark/light themes, color customization, sound feedback, route-based navigation, and localStorage support. Deployed via GitHub Pages."
			/>
			<ProCard 
			proName="Student Manager" 
			href="https://github.com/kanhaiya-tyagi/student-manager"
			description="A full-stack Student Manager app for adding, viewing, editing, and deleting student records using React, Node.js, and MySQL."
			/>
			<ProCard 
			proName="Background Changer" 
			href="https://backgroungchanger-seven.vercel.app/" 
			description="A react based app that changes the background of the page when the button of a certain color is clicked."
			/>
		</div>
		</div>
		
	)
}

export default projects