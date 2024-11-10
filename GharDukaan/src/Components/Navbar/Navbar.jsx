import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
	const [navList, setNavList] = useState(false);

	const navItems = [
		{ text: 'Home' },
		{ text: 'About' },
		{ text: 'Services' },
		{ text: 'Contact' },
	];

	return (
		<header>
			<div className='container flex'>
				<div className='logo'>
					<img src='./images/logo.png' alt='Logo' />
				</div>
				<div className='nav'>
					<ul className={navList ? 'small' : 'flex'}>
						{navItems.map((item, index) => (
							<li key={index}>
								<a href={`#${item.text.toLowerCase()}`}>{item.text}</a>
							</li>
						))}
					</ul>
				</div>
				<div className='button flex'>
					<h4>
						<span>2</span> My List
					</h4>
					<button className='btn1'>
						<i className='fa fa-sign-out'></i> Sign In
					</button>
				</div>

				<div className='toggle'>
					<button onClick={() => setNavList(!navList)}>
						{navList ? (
							<i className='fa fa-times'></i>
						) : (
							<i className='fa fa-bars'></i>
						)}
					</button>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
