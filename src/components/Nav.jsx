import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className="nav">
			<ul>
				<li>
					<Link to="/">Home</Link>
					<Link to="/shop">Shop</Link>
					<Link to="/cart">Cart</Link>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
