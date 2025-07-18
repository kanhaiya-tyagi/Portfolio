import './styles/App.css'
import Intro from "./components/intro"
import TextSec from "./components/textSec"
import Certificates from "./components/certificates"
import Skill from "./components/skills"
import ProjectSec from "./components/projectSec"
import ScrollToTopButton from './components/ScrollToTop'
import Footer from "./components/footer"
import Education from "./components/education"

function App() {

	const skills = [
		"C", "Cpp", "Java", "Python", "Kotlin", 
		"MySql", "MongoDB", "HTML", "CSS", "Tailwind", "Bootstrap", "JavaScript", 
		"React", "Vite", "NodeJs", "Express", "VsCode",
		"AndroidStudio","Git", "GitHub" 
	]

	const certificates = [
		"MongoDB Bootcamp - LetsUpgrade",
		"Python Internship - Codsoft",
		"Programming in C - Data Flair",
		"High Performance Computing - AICTE",
		"Game Development and Animation - COER University"
	]

	return (
		<>
		<Intro />
		<TextSec Id="about" heading="About me" content=""/>
		<Skill Id="skills" heading="Skills" skills={skills}/>
		<ProjectSec Id="projects" heading="Projects"/>
		<Certificates Id="certificates" heading="Certificates" points={certificates}/>
		<Education Id="education" heading="Education" />
		<ScrollToTopButton />
		<Footer Id="footer"/>
		</>
	)
}

export default App