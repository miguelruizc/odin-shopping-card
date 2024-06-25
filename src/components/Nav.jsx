import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = ({ cart }) => {
	return (
		<div className="nav">
			<ul>
				<li>
					<Link to="/">Home</Link>
					<Link to="/shop">Shop</Link>
					<Link to="/cart">Cart({cart.length})</Link>
				</li>
			</ul>
		</div>
	);
};

Nav.propTypes = {
	cart: PropTypes.array.isRequired,
};

export default Nav;
