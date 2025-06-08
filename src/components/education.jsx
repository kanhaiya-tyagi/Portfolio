import React from 'react'
import { FaSchool, FaUniversity } from 'react-icons/fa'
import "../styles/education.css"

const education = ({Id, heading}) => {
	return (
		<div className='prd' id={Id}>
			<div className='headDiv'>
				<h1 className="secHead">{heading}</h1>
				<div className="eduTableWrapper">
					<table className="eduTable">
					<thead>
						<tr>
						<th>Icon</th>
						<th>Class/Degree</th>
						<th>Institution</th>
						<th>Grades</th>
						</tr>
					</thead>
					<tbody>

						{/* College */}
						<tr>
						<td><FaUniversity className='eduIcon' /></td>
						<td>B.Tech CSE (2023–2027)</td>
						<td>
							<strong>COER University</strong><br />
							<span className='smallText'>Roorkee, Uttarakhand</span>
						</td>
						<td>Current CGPA: 6.7</td>
						</tr>

						{/* School */}
						<tr>
						<td rowSpan={2}><FaSchool className='eduIcon' /></td>
						<td>Class 12th</td>
						<td rowSpan={2}>
							<strong>St. Mary's School</strong><br />
							<span className='smallText'>Civil Lines, Meerut</span>
						</td>
						<td>74% (Science Stream)</td>
						</tr>
						<tr>
						<td>Class 10th</td>
						<td>83.8%</td>
						</tr>
					</tbody>
					</table>
				</div>
			</div>
		</div>
	)
} 

export default education
