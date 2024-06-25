import PropTypes from 'prop-types';

const Footer = ({ balance = 10000 }) => {
	const formatedBalance = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(balance);

	return (
		<div className="footer">
			<p>Balance: {formatedBalance}$</p>
		</div>
	);
};

Footer.propTypes = {
	balance: PropTypes.number,
};

export default Footer;
