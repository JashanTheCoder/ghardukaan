import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<>
			<section className='footerContact'>
				<div className='container'>
					<div className='send flex'>
						<div className='text'>
							<h1>Do You Have Questions?</h1>
							<p>We'll help you to grow your career and growth.</p>
						</div>
						<button className='btn5'>Contact Us Today</button>
					</div>
				</div>
			</section>

			<footer>
				<div className='container'>
					<div className='box logo-box'>
						<div className='logo'>
							<img src='../images/logo-light.png' alt='Logo' />
							<h2>Do You Need Help With Anything?</h2>
							<p>
								Receive updates, hot deals, tutorials, discounts straight in
								your inbox every month.
							</p>

							<div className='input flex'>
								<input type='text' placeholder='Email Address' />
								<button>Subscribe</button>
							</div>
						</div>
					</div>

					<div className='box'>
						<h3>Section Title</h3>
						<ul>
							<li>Item 1</li>
							<li>Item 2</li>
							<li>Item 3</li>
							<li>Item 4</li>
						</ul>
					</div>

					<div className='box'>
						<h3>Section Title</h3>
						<ul>
							<li>Item 1</li>
							<li>Item 2</li>
							<li>Item 3</li>
							<li>Item 4</li>
						</ul>
					</div>

					<div className='box'>
						<h3>Section Title</h3>
						<ul>
							<li>Item 1</li>
							<li>Item 2</li>
							<li>Item 3</li>
							<li>Item 4</li>
						</ul>
					</div>
				</div>
			</footer>
			<div className='legal'>
				<span>© 2021 RentUP. Designed By GorkCoder.</span>
			</div>
		</>
	);
};

export default Footer;
