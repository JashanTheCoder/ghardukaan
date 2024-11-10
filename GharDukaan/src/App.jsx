import React from 'react';
import Blog from './Components/Blog/Blog';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import '../src/Components/Blog/Blog.css';
function App() {
	return (
		<div>
			<Navbar />
			<Blog />
			<Footer />;
		</div>
	);
}

export default App;
