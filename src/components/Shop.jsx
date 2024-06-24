import { useEffect } from "react";

const Shop = () => {

	useEffect(()=>{
		fetch('https://fakestoreapi.com/products')
		.then((res) => res.json())
		.then((json) => console.log(json))
		.catch(err => console.log(err));
	}, []);

	return (
		<div className="content">
			<h1>Shop</h1>
		</div>
	);
};

export default Shop;
