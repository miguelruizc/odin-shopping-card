const Footer = ({ balance }) => {
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

export default Footer;
