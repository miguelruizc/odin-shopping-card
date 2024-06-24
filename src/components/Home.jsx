import homeImage from '../assets/image.webp';
import homeImage2 from '../assets/image2.webp';
import homeImage3 from '../assets/image3.webp';

const Home = () => {
	return (
		<div className="content">
			<h1>Home</h1>
			<img className="homeImage" src={homeImage} alt="Store" />
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, ratione nihil qui ab optio, atque expedita aperiam ex, eum neque dolore. Ipsum non vitae suscipit earum, tenetur tempore dignissimos iure.</p>
			<img className="homeImage" src={homeImage2} alt="Store" />
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, ratione nihil qui ab optio, atque expedita aperiam ex, eum neque dolore. Ipsum non vitae suscipit earum, tenetur tempore dignissimos iure.</p>
			<img className="homeImage" src={homeImage3} alt="Store" />
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, ratione nihil qui ab optio, atque expedita aperiam ex, eum neque dolore. Ipsum non vitae suscipit earum, tenetur tempore dignissimos iure.</p>
		</div>
	);
};

export default Home;
