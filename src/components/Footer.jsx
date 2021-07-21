import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<FooterWrapper>
			<div className="footer">
				<h3>The Info</h3>
				<p className="footer-content">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, modi delectus aut culpa incidunt
					voluptatum voluptatem rem laudantium sapiente dicta iure veniam in assumenda sed sequi aperiam enim
					ducimus ex nihil molestiae est. Repellendus numquam voluptate fugit a quidem harum, qui error?
					Quaerat possimus, odio accusantium in tempore architecto sapiente assumenda, mollitia illum quam est
					ducimus sit voluptatum, a quod adipisci ad consectetur rerum voluptas. Sunt incidunt enim tempora
					laudantium vitae reiciendis numquam placeat, sit voluptatibus sequi, suscipit obcaecati quisquam?
				</p>

				<div className="footer-links">
					<Link>Twitter</Link>
					<Link>LinkedIn</Link>
					<Link>RSS</Link>
				</div>

				<small>
					&copy; 2021 Retro Designs Co.
					<br /> All Rights Reserved
				</small>
			</div>
		</FooterWrapper>
	);
};

const FooterWrapper = styled.div`
	grid-area: footer;
	padding: 2rem 0;
	background-color: #000;
	text-align: center;
	color: #fff;

	.footer-content {
		width: 50%;
		margin: 0 auto;
		font-size: 0.8rem;
	}

	.footer-links {
		margin: 1rem 0;
	}
	.footer-links a {
		margin: 0 1rem;
		color: #fff;
	}
`;

export default Footer;
