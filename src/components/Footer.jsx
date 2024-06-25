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

		const inputValue = parseFloat(event.target.elements[0].value);
		const amount = isNaN(inputValue) ? 0 : inputValue;

		console.log(inputValue);
		console.log(amount);

		setBalance(balance + amount);
		setAddingBalance(false);

		event.target.reset();
	};

	return (
		<div className="footer">
			<p>
				Balance: <strong>{formatedBalance} </strong>
			</p>
			{!addingBalance && (
				<span className="addBalanceButton" onClick={() => setAddingBalance(true)}>
					(Add)
				</span>
			)}
			{addingBalance && (
				<form className="addBalanceForm" onSubmit={addBalanceSubmit}>
					<input type="number" placeholder="how much to add..." min={1}></input>
					<button type="submit">Submit</button>
				</form>
			)}
		</div>
	);
};

Footer.propTypes = {
	balance: PropTypes.number,
	setBalance: PropTypes.func,
};

export default Footer;
