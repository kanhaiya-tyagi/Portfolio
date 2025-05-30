import React from 'react'
import "../styles/skills.css"

const skills = ({Id, heading, skills=[]}) => {
  return (
    <div className='prd' id={Id}>
        <div className='headDiv'>
            <h1 className="secHead">{heading}</h1>
            <ul className='content skills'>
                {skills.map((skill, index) => (
                <li key={index} className="skill-item">
                  <img
                    src={`https://skillicons.dev/icons?i=${skill.toLowerCase()}`}
                    alt={skill}
                    className="skill-icon"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <span className="skill-name">{skill}</span>
                </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default skills