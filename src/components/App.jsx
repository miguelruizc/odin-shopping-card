import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Shop from './Shop.jsx';
import Cart from './Cart.jsx';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import ErrorPage from './ErrorPage.jsx';
import { useState } from 'react';

function App() {
	const [cart, setCart] = useState([]);

	return (
		<>
			<Router>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/shop" element={<Shop cart={cart} setCart={setCart} />}></Route>
					<Route path="/cart" element={<Cart cart={cart} setCart={setCart} />}></Route>
					<Route path="/*" element={<ErrorPage />}></Route>
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
