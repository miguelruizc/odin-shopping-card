import PropTypes from 'prop-types';

const Cart = ({ cart, setCart, balance, setBalance }) => {
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
				<button>buy</button>
			</div>
		);
	});

	return (
		<div className="content">
			<h1>Cart</h1>
			{cartList}
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
