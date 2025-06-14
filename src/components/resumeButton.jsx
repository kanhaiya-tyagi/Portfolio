import React from 'react';
import { FaFileAlt } from 'react-icons/fa';
import "../styles/resumeButton.css";

const ResumeButton = () => {
	return (
		<a
		href="/KanhaiyaTyagi.pdf"
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
