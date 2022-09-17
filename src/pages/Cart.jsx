import React, { useState, useEffect } from "react";
import { Typography, Button, Grid, Stack } from "@mui/material";
import { useStore } from "../store/store";

function Cart() {
	const [timer, setCounter] = useState(60);

	useEffect(() => {
		const TimerInt =
			timer > 0 &&
			setInterval(() => {
				setCounter((time) => time - 1);
			}, 1000);
		return () => {
			clearInterval(TimerInt);
		};
	}, [timer]);

	return (
		<div>
			Cart <Button variant="contained">CHECKOUT</Button>
			{timer}
		</div>
	);
}

export default Cart;
