import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Shop from './Shop.jsx';
import Cart from './Cart.jsx';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import ErrorPage from './ErrorPage.jsx';
import { useState } from 'react';

function App() {
	const [cart, setCart] = useState([]);
	const [balance, setBalance] = useState(10000);
	const [history, setHistory] = useState([]);

	return (
		<>
			<Router>
				<Nav cart={cart} />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/shop" element={<Shop cart={cart} setCart={setCart} />}></Route>
					<Route
						path="/cart"
						element={
							<Cart
								cart={cart}
								setCart={setCart}
								balance={balance}
								setBalance={setBalance}
								history={history}
								setHistory={setHistory}
							/>
						}
					></Route>
					<Route path="/*" element={<ErrorPage />}></Route>
				</Routes>
				<Footer balance={balance} setBalance={setBalance} />
			</Router>
		</>
	);
}

export default App;
