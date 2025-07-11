// ScrollToTopButton.jsx
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../styles/ScrollToTop.css';

const ScrollToTopButton = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.scrollY > 300) {
		setVisible(true);
		} else {
		setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
		top: 0,
		behavior: 'smooth'
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	return (
		<div className={`scroll-to-top ${visible ? 'show' : ''}`} onClick={scrollToTop}>
		<FaArrowUp />
		</div>
	);
};

export default ScrollToTopButton;
