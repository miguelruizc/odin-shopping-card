import PropTypes from 'prop-types';
import { useState } from 'react';

const Footer = ({ balance, setBalance }) => {
	const [addingBalance, setAddingBalance] = useState(false);

	const formatedBalance = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(balance);

	const addBalanceSubmit = (event) => {
		event.preventDefault();

		const amount = parseFloat(event.target.elements[0].value);
		setBalance(balance + amount);
		setAddingBalance(false);

		event.target.reset();
	};

	return (
		<div className="footer">
			{!addingBalance && <button onClick={() => setAddingBalance(true)}>+</button>}
			{addingBalance && (
				<form className="addBalanceForm" onSubmit={addBalanceSubmit}>
					<input type="number" placeholder="how much to add..."></input>
					<button type="submit">Submit</button>
				</form>
			)}
			<p>Balance: {formatedBalance}$</p>
		</div>
	);
};

Footer.propTypes = {
	balance: PropTypes.number,
	setBalance: PropTypes.func,
};

export default Footer;
