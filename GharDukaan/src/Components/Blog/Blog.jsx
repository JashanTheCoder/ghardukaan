import React from 'react';
import './Blog.css';
import img from '../images/about.jpg';

const Blog = () => {
	const list = [
		{
			cover: '/images/property1.jpg', // Access images directly from the public folder
			category: 'For Sale',
			location: 'New York, NY',
			name: 'Luxury Apartment',
			price: '$2,500',
			type: 'Apartment',
		},
		{
			cover: '/images/property2.jpg',
			category: 'For Rent',
			location: 'Los Angeles, CA',
			name: 'Modern Studio',
			price: '$1,200',
			type: 'Studio',
		},
		// Add more items as needed
	];

	return (
		<>
			<section className='blog-out mb'>
				{/* Back Component */}
				<div className='back'>
					<div className='container'>
						<span>Blog</span>
						<h1>Blog Grid - Our Blogs</h1>
					</div>
					<img src={img} alt='Background' />
				</div>

				{/* Blog Content with Recent Card */}
				<div className='container recent'>
					<div className='content grid3 mtop'>
						{list.map((item, index) => {
							const { cover, category, location, name, price, type } = item;
							return (
								<div className='box shadow' key={index}>
									<div className='img'>
										<img src={cover} alt={name} />{' '}
										{/* Image sourced from public folder */}
									</div>
									<div className='text'>
										<div className='category flex'>
											<span
												style={{
													background:
														category === 'For Sale' ? '#25b5791a' : '#ff98001a',
													color:
														category === 'For Sale' ? '#25b579' : '#ff9800',
												}}
											>
												{category}
											</span>
											<i className='fa fa-heart'></i>
										</div>
										<h4>{name}</h4>
										<p>
											<i className='fa fa-location-dot'></i> {location}
										</p>
									</div>
									<div className='button flex'>
										<div>
											<button className='btn2'>{price}</button>
											<label htmlFor=''>/sqft</label>
										</div>
										<span>{type}</span>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				{/* Blog Content with Recent Card */}
				<div className='container recent'>
					<div className='content grid3 mtop'>
						{list.map((item, index) => {
							const { cover, category, location, name, price, type } = item;
							return (
								<div className='box shadow' key={index}>
									<div className='img'>
										<img src={cover} alt={name} />{' '}
										{/* Image sourced from public folder */}
									</div>
									<div className='text'>
										<div className='category flex'>
											<span
												style={{
													background:
														category === 'For Sale' ? '#25b5791a' : '#ff98001a',
													color:
														category === 'For Sale' ? '#25b579' : '#ff9800',
												}}
											>
												{category}
											</span>
											<i className='fa fa-heart'></i>
										</div>
										<h4>{name}</h4>
										<p>
											<i className='fa fa-location-dot'></i> {location}
										</p>
									</div>
									<div className='button flex'>
										<div>
											<button className='btn2'>{price}</button>
											<label htmlFor=''>/sqft</label>
										</div>
										<span>{type}</span>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default Blog;
