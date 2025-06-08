import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa';
import "../styles/proCard.css"

const proCard = ({proName, href, description}) => {
	return (
		<div className='proCardDiv'>
		<a href={href} target='_blank'><h2>{proName}</h2> <FaExternalLinkAlt className="linkIcon" /></a>
		<div className="proDescp">{description}</div>
		</div>
	)
}

export default proCard