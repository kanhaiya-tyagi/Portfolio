import React from 'react'
import ProCard from "./proCard"

const projects = ({Id, heading}) => {
	return (
		<div className='prd' id={Id}>
		<div className='headDiv projectSection'>
			<h1 className="secHead">{heading}</h1>
			<ProCard 
			proName="Background Changer" 
			href="https://backgroungchanger-seven.vercel.app/" 
			description="A react based app that changes the background of the page when the button of a certain color is clicked."
			/>
			<ProCard 
			proName="Password Generator"
			href="https://pswrd-generator.vercel.app/"
			description="A web application created in the journey of learning react and implement hooks"
			/>
		</div>
		</div>
		
	)
}

export default projects