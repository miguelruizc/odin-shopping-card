import { useEffect, useState } from 'react';

const Shop = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => {
				if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
				return res.json();
			})
			.then((json) => {
				console.log(json);
				setItems(json);
			})
			.catch((err) => console.log(err));
	}, []);

	const itemsList = items.map((element) => {
		console.log(element);

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

				<form action="shopItemForm">
					<input type="number" min="1" placeholder={1} />
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
