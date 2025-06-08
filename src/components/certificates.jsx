import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import "../styles/certificates.css"
 
const pointSec = ({Id, heading, points=[]}) => {
	return (
		<div className='prd' id={Id}>
		<div className='headDiv'>
			<h1 className="secHead">{heading}</h1>
			<ul className='content certificates'>
			{points.map((point, index) => (
				<li key={index}>
				<FaCheckCircle className="pointIcon" />
				{point}</li>
			))}
			</ul>
		</div>
		</div>
	)
}

export default pointSec 