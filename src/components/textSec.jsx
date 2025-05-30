import React from 'react'
import ResumeButton from "./resumeButton"

const about = ({Id, heading, content}) => {
  return (
    <div className='prd' id={Id}>
      <div className='headDiv'>
        <h1 className='secHead'>{heading}</h1>
        <p className='content'>{content}
          <br />
          I am a passionate and curious Computer Science student currently pursuing my B.Tech at COER University. I enjoy exploring the world of technology and turning ideas into real-world applications. Whether it’s writing clean code, learning new frameworks, or diving into the logic behind machines, I love the process of building and learning. <br /> <br />
          I'm currently focused on improving my skills in Web Development with React (+Vite).  and I've also worked with languages like C, Java, Python and Android development using Jetpack Compose,. I recently started building my personal projects using React.
          I’ve completed an internship in Python Programming and hold a certification in Programming in C. I’ve also participated in organizing tech events like a 12-hour internal hackathon at my university. <br /> <br />
          Outside of academics, I like learning at my own pace, solving logical problems.
          I’m always looking for opportunities to grow, collaborate, and create something impactful.
          <br /><br /><br /><br /><em style={{fontWeight: "bold"}}>Want to know more? View my complete resume below. </em><br /><br />
          <ResumeButton />
        </p>
      </div>
    </div>
  )
}

export default about