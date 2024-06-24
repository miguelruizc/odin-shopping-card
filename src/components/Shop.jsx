import { useEffect, useState } from 'react';

const Shop = ({ cart, setCart }) => {
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

		const item = items.find((obj) => obj.id === itemId);
		const newCartItem = {
			id: item.id,
			title: item.title,
			price: item.price,
			image: item.image,
			quantity: parseInt(event.target.elements['quantity'].value),
		};

		setCart((state) => [...state, newCartItem]);

		event.target.reset();
	};

	const itemsList = items.map((element) => {
		return (
			<div className="shopItem" key={element.id}>
				<h2>{element.title}</h2>
				<h3>{element.price}$</h3>
				<p>Category: {element.category}</p>
				<p>{element.description}</p>
				<img src={element.image} alt="item picture" />
				<p>
					Rating: {element.rating.rate} Reviews: {element.rating.count}
				</p>

				<form
					action="shopItemForm"
					onSubmit={(event) => {
						addToCart(event, element.id);
					}}
				>
					<input
						id={element.id}
						name="quantity"
						type="number"
						min="1"
						placeholder="1"
						required
					/>
					<button type="submit">Add to cart</button>
				</form>
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

export default Shop;
