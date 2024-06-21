import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Shop from './Shop.jsx';
import Cart from './Cart.jsx';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/shop" element={<Shop />}></Route>
				<Route path="/cart" element={<Cart />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
