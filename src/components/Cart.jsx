const Cart = ({ cart, setCart }) => {
	const handleQuantityChange = (event, id) => {
		console.log('quantity input onChange trigger');
		const newQuant = event.target.value;

		console.log(`New quant: ${newQuant}`);

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

			console.log(newState);
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
				<button>remove</button>
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

export default Cart;
