import React from 'react';
import { FaFileAlt } from 'react-icons/fa';
import "../styles/resumeButton.css";

const ResumeButton = () => {
	return (
		<a
		href="/Kanhaiya-Tyagi-Resume.pdf"
		target="_blank"
		rel="noopener noreferrer"
		className="resume-button"
		>
		{/* 📄  */}
		<FaFileAlt className="resume-icon" /> Resume
		</a>
	);
};

export default ResumeButton;
