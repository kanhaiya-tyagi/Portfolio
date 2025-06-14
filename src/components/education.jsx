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
						<td><b>B.Tech CSE</b> (2023–2027)</td>
						<td>
							<strong>COER University</strong><br />
							<span className='smallText'>Roorkee, Uttarakhand</span>
						</td>
						<td>Current CGPA: 6.7</td>
						</tr>

						{/* School */}
						<tr>
						<td rowSpan={2}><FaSchool className='eduIcon' /></td>
						<td><b>Class 12th </b>(2023)</td>
						<td rowSpan={2}>
							<strong>Sanskar Bharti Convent School</strong><br />
							<span className='smallText'>Talheri Buzurg, Saharanpur</span>
						</td>
						<td>74% (Science Stream)</td>
						</tr>
						<tr>
						<td><b>Class 10th</b> (2021)</td>
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
