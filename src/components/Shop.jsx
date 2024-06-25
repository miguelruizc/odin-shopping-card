import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Shop = ({ setCart }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => {
				if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
				return res.json();
			})
			.then((json) => {
				setItems(json);
			})
			.catch((err) => console.log(err));
	}, []);

	const addToCart = (event, itemId) => {
		event.preventDefault();

		let formValue = event.target.elements['quantity'].value;
		if (formValue === '') formValue = 1;

		const quantity = parseInt(formValue);

		const item = items.find((obj) => obj.id === itemId);
		const newCartItem = {
			id: item.id,
			title: item.title,
			price: item.price,
			image: item.image,
			quantity: quantity,
		};

		setCart((state) => {
			//Check if another item with same id existed in cart, so that it only updates quantity
			let index = state.findIndex((obj) => obj.id === itemId);
			if (index !== -1) {
				let newItem = state[index];
				newItem.quantity += quantity;
				let newState = [...state];
				newState[index] = newItem;
				return newState;
			} else return [...state, newCartItem];
		});

		event.target.reset();
	};

	const itemsList = items.map((element) => {
		return (
			<div className="shopItem card" key={element.id}>
				<div className="shopItemLeft">
					<img src={element.image} alt="item picture" />
					<div className="shopItemForm">
						<form
							onSubmit={(event) => {
								addToCart(event, element.id);
							}}
						>
							<div className="quantityInput">
								<label htmlFor="quantity">Quantity:</label>
								<input
									id={element.id}
									name="quantity"
									type="number"
									min="1"
									max="99"
									placeholder="1"
								/>
							</div>
							<button type="submit">Add to cart</button>
						</form>
					</div>
				</div>
				<div className="shopItemRight">
					<h2>{element.title}</h2>
					<h3>${element.price}</h3>
					<hr />
					<div className="shopItemInfo">
						<p>
							Rating: {element.rating.rate} Reviews: {element.rating.count}
						</p>
						<p>Category: {element.category}</p>
						<p>{element.description}</p>
					</div>
				</div>
			</div>
		);
	});

	return (
		<div className="content">
			<h1>Shop</h1>
			{itemsList}
		</div>
	);
};

Shop.propTypes = {
	setCart: PropTypes.func.isRequired,
};

export default Shop;
