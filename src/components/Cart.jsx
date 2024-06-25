import PropTypes from 'prop-types';
import { useState } from 'react';

const Cart = ({ cart, setCart, balance, setBalance }) => {
	const [history, setHistory] = useState([]);

	const handleQuantityChange = (event, id) => {
		const newQuant = event.target.value;

		setCart((state) => {
			let index = state.findIndex((obj) => obj.id === id);
			let newObject = state[index];
			let newState = [...state];

			if (newQuant <= 0) {
				// If quant <= 0: Remove cart element
				newState.splice(index, 1);
			} else {
				// If quant > 0: modify cart element
				newObject.quantity = newQuant;
				newState[index] = newObject;
			}

			return newState;
		});
	};

	const handleRemove = (id) => {
		setCart((state) => {
			let index = state.findIndex((obj) => obj.id === id);
			let newState = [...state];

			newState.splice(index, 1);

			return newState;
		});
	};

	const handleBuy = (id) => {
		const index = cart.findIndex((element) => element.id === id);
		const cartItem = cart[index];
		const total = cartItem.quantity * cartItem.price;

		// Check if total < balance
		if (total > balance) {
			alert('Insuficient balance');
			return;
		}

		// Remove total from balance
		setBalance(balance - total);

		// Remove item from cart
		let newCart = [...cart];
		newCart.splice(index, 1);
		setCart(newCart);
	};

	const cartList = cart.map((element) => {
		return (
			<div key={element.id} className="cartItem">
				<h2>{element.title}</h2>
				<p>{element.price}</p>
				<img src={element.image} alt="Image of item" />
				<p>
					Quantity:
					<input
						type="number"
						value={element.quantity}
						onChange={(event) => handleQuantityChange(event, element.id)}
					/>
				</p>
				<p>Total: {element.price * element.quantity}</p>
				<button
					onClick={() => {
						handleRemove(element.id);
					}}
				>
					remove
				</button>
				<button
					onClick={() => {
						handleBuy(element.id);
					}}
				>
					buy
				</button>
			</div>
		);
	});

	const historyList = history.map((element) => {
		return (
			<div key={element.id} className="cartItem">
				<h2>{element.title}</h2>
				<p>{element.price}</p>
				<p>Quantity: {element.quantity}</p>
				<p>Total: {element.price * element.quantity}</p>
			</div>
		);
	});

	return (
		<div className="content">
			<h1>Cart</h1>
			{cartList}
			{history.length > 0 && (
				<>
					<h2>History</h2>
					{historyList}
				</>
			)}
		</div>
	);
};

Cart.propTypes = {
	cart: PropTypes.array.isRequired,
	setCart: PropTypes.func.isRequired,
	balance: PropTypes.number.isRequired,
	setBalance: PropTypes.func.isRequired,
};

export default Cart;
