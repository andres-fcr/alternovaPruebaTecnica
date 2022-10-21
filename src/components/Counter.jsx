import React, {useState} from "react";
import {Button} from "react-bootstrap";

const Counter = ({handleCounterChange, prod }) => {
	const [counter, setCounter] = useState(0);

	const handleCounter = () => {
		setCounter((count) => count + 1);
		///adds the quantity to the product object ///
		handleCounterChange({
			...prod,
			quantity: counter + 1,
		});
	};

	return (
		<Button variant="outline-dark" onClick={() => handleCounter()}>
			{counter}
		</Button>
	);
};

export default Counter;
