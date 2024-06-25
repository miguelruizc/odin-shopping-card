import PropTypes from 'prop-types';

const Cart = ({ cart, setCart, balance, setBalance, history, setHistory }) => {
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

		// Add purchase to history
		const newPurchase = {
			title: cartItem.title,
			price: cartItem.price,
			quantity: cartItem.quantity,
			total: total,
			image: cartItem.image,
			id: cartItem.id,
		};
		setHistory([...history, newPurchase]);

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
			<div key={element.id} className="historyItem">
				<img src={element.image} alt="Item image" />
				<h2>{element.title}</h2>
				<p>{element.price}</p>
				<p>Quantity: {element.quantity}</p>
				<p>Total: {element.price * element.quantity}</p>
			</div>
		);
	});

	return (
		<div className="content cart">
			<div className="cart-section">
				<h1>Cart</h1>
				{cart.length > 0 && cartList}
				{cart.length === 0 && <p>Cart is empty, go add stuff </p>}
			</div>
			{history.length > 0 && (
				<div className="history-section">
					<h2>History</h2>
					{historyList}
				</div>
			)}
		</div>
	);
};

Cart.propTypes = {
	cart: PropTypes.array.isRequired,
	setCart: PropTypes.func.isRequired,
	balance: PropTypes.number.isRequired,
	setBalance: PropTypes.func.isRequired,
	history: PropTypes.array.isRequired,
	setHistory: PropTypes.func.isRequired,
};

export default Cart;
