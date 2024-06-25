import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = ({ cart }) => {
	return (
		<div className="nav">
			<ul>
				<li>
					<Link to="/">HOME</Link>
				</li>
				<li>
					<Link to="/shop">SHOP</Link>
				</li>
				<li>
					<Link to="/cart">CART ({cart.length})</Link>
				</li>
			</ul>
		</div>
	);
};

Nav.propTypes = {
	cart: PropTypes.array.isRequired,
};

export default Nav;
