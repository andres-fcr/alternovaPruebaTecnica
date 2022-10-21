import {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Cart from "./components/Cart";
import Products from "./components/Products";
import TopBar from "./components/TopBar";
import data from "./data/data.json";

function App() {
	const [cartProducts, setCartProducts] = useState([]);

	const handleCartChange = (x) => {
		//// Update the product quantity if it exists in cart ///////
		const setUpdateProduct = () => {
			const toUpdateIndex = cartProducts.findIndex((y) => y.id === x.id);
			const prods = [...cartProducts];

			prods[toUpdateIndex] = {...prods[toUpdateIndex], quantity: prods[toUpdateIndex].quantity + x.quantity};
			return prods;
		};

		setCartProducts((cartProducts) =>
			cartProducts.length === 0 || !cartProducts.some((y) => y.id === x.id) ? cartProducts.concat(x) : setUpdateProduct()
		);
	};

	return (
		<>
			<TopBar />
			<Container>
				<Row>
					<Col>
						<Products data={data.products} handleCartChange={handleCartChange} />
					</Col>
					<Col>
						<Cart data={cartProducts} />
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default App;
