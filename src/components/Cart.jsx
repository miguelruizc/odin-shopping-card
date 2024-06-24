const Cart = ({ cart, setCart }) => {
	const cartList = cart.map((element) => {
		return (
			<div key={element.id} className="cartItem">
				<h2>{element.title}</h2>
				<p>{element.price}</p>
				<img src={element.image} alt="Image of item" />
				<p>Cuantity: {element.quantity}</p>
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
