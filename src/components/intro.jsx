import React from 'react'
import '../styles/intro.css'
import Explore from "./explore"
import ResumeButton from './resumeButton';

const intro = () => {
	return (
		<div className='introDiv' id='intro'>
		<div>
			<div className="topFloat">
			<ResumeButton />
			<Explore />
			</div>
		</div>


		<div className='intro'>
			<p className='im'>Hey! 👋 I'm</p>
			<span className='name'>Kanhaiya Tyagi</span>
			<p className="para">a <span style={{color: "maroon"}}> <em>Computer Science Engineering Undergrad</em> </span> and aspiring <em>Developer</em>.</p>
		</div>

		<div className="wave">
			<svg viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg">
			<path fill="#1e80c7" d="M0,96L1440,32L1440,320L0,320Z"></path>
			</svg>
		</div>
		</div>
	)
}

export default intro
