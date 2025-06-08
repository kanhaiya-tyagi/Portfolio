import { useState } from 'react'
import React from 'react'
import { FaInfoCircle, FaCode, FaProjectDiagram, FaCertificate, FaCompass, FaComments, FaGraduationCap } from "react-icons/fa";
import "../styles/explore.css"

const explore = () => {
	const [showList, setShowList] = useState(false)

	const toggleList = () => setShowList(prev => !prev )
	return (
		<div>
			<div 
			className="explore"
			onClick={toggleList}
			>
			<FaCompass style={{ marginRight: "8px" }} />
				Explore
			</div>


			<div className={`linkList ${showList? 'visible': ''}`}>
				<ul>
					<li><a href="#about" onClick={toggleList}><FaInfoCircle style={{marginRight: "8px"}} />about<span>&#x2197;</span></a></li>
					<li><a href="#skills"><FaCode style={{marginRight: "8px"}} />skills<span>&#x2197;</span></a></li>
					<li><a href="#projects"><FaProjectDiagram style={{marginRight: "8px"}} />projects<span>&#x2197;</span></a></li>
					<li><a href="#certificates"><FaCertificate style={{marginRight: "8px"}} />certificates<span>&#x2197;</span></a></li>
					<li><a href="#education"><FaGraduationCap style={{marginRight: "8px"}} />education<span>&#x2197;</span></a></li>
					<li><a href="#footer"><FaComments style={{marginRight: "10px"}} />contacts<span>&#x2197;</span></a></li>
				</ul>
			</div>
		</div>
	)
}

export default explore
