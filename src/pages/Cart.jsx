import React from "react";
import { useStore } from "../store/store";
import CartList from "../components/CartList";
import BreadcrumbsComponents from "../components/BreadcrumbsComponents";
import { Grid, ImageListItem, ImageListItemBar, IconButton, Button, Typography, Stack } from "@mui/material";

function Cart() {
	const cartItems = useStore((state) => state.cartItems);

	if (cartItems.length === 0) {
		return (
			<>
				<BreadcrumbsComponents before="Home" latest="Cart" />
				<Typography variant="h4" style={{ color: "white", margin: "30px 0" }}>
					No Items
				</Typography>
			</>
		);
	}

	return (
		<div>
			<CartList cartItems={cartItems} />
		</div>
	);
}

export default Cart;
