import React, {useState} from "react";
import {Button, Card, Col, Row} from "react-bootstrap";
import Counter from "./Counter";

const Products = ({data, handleCartChange}) => {
	const [prodToCart, setProdToCart] = useState(null);

	const setAddToCart = (product) => {
		!product.stock ? alert("product out of stock") : prodToCart ? handleCartChange(prodToCart) : null;
	};

	const handleCounterChange = (prod) => {
		setProdToCart(prod);
	};

	return (
		<Row xs={1} md={2} className="g-4 mt-5 border rounded p-3">
			{data.map((prod) => (
				<Col key={prod.id}>
					<Card className="flex" style={{MinWidth: 200}}>
						<Card.Img
							className="h-75"
							variant="top"
							src={`https://via.placeholder.com/400x200/3e3e3e/FFFFFF/?text=${prod.name}`}
						/>
						<Card.Body className="">
							<Row>
								<Col>
									<Counter
										handleCounterChange={handleCounterChange}
										prod={prod}
									/>
								</Col>
								<Col xs lg={8}>
									<Button
										variant="success"
										onClick={() => setAddToCart(prod)}
									>
										Add To Cart
									</Button>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	);
};

export default Products;
