import React, {useEffect, useState} from "react";
import {Badge, Button, Col, Container, Row, Table} from "react-bootstrap";

const Cart = ({data}) => {
	const [total, setTotal] = useState(0);
	const [finalData, setFinalData] = useState([]);

	useEffect(() => {
		const totalPrice = data.reduce((accumulator, current) => {
			if (current) {
				return accumulator + current.unit_price * current.quantity;
			}
			return accumulator;
		}, 0);
		setTotal(totalPrice);
	}, [data]);

	const setCreateOrder = () => {
		////Adding total price per product/////
		const dataWithTotal = data.reduce((acc, current) => {
			return acc.concat({...current, totalprice: current.unit_price * current.quantity});
		}, []);
		const completeOrderData = [...dataWithTotal, {orderTotal: total}];
		////Saving  JSON in local Storage ////
		localStorage.setItem("cart", JSON.stringify(completeOrderData))
		alert("Order Created successfully")
	};

	if (data.length === 0)
		return (
			<Container className="mt-5 fs-3 border rounded p-4">
				<h2 className="mb-3">Cart</h2>

				<Row>
					<Col>
						<h3>You have no products in your cart ...</h3>
					</Col>
				</Row>
			</Container>
		);

	return (
		<div className="mt-5 border rounded p-4">
			<h2 className="mb-3">Cart</h2>
			<Table striped className="mb-4">
				<thead>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Unit Price</th>
						<th>Total Price</th>
					</tr>
				</thead>
				<tbody>
					{data.map((product) => (
						<tr key={product.id}>
							<td>{product.name}</td>
							<td>{product.quantity}</td>
							<td>$ {product.unit_price}</td>
							<td>$ {product.quantity * product.unit_price}</td>
						</tr>
					))}
				</tbody>
			</Table>
			<div>
				<Row>
					<h3 className="mb-5">
						Total price <Badge bg="secondary">$ {total}</Badge>
					</h3>
					<Button onClick={() => setCreateOrder()}>CREATE ORDER</Button>
				</Row>
			</div>
		</div>
	);
};

export default Cart;
