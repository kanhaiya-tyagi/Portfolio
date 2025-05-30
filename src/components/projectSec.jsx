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
          proName="Tip Time"
          href="https://github.com/kanhaiya-tyagi/Tip-Time"
          description="An android application made with Kotlin and Jetpack compose that takes input of the base amount and the percentage you want to tip and also a round up button."
        />
      </div>
    </div>
    
  )
}

export default projects