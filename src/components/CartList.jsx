import React, { useState } from "react";
import { Grid, IconButton, Button, Typography, Stack } from "@mui/material";
import { MdOutlineAdd, MdOutlineRemove } from "react-icons/md";
import { useStore } from "../store/store";
import Modal from "./Modal";
import BreadcrumbsComponents from "./BreadcrumbsComponents";

function CartList({ cartItems }) {
	const addToCart = useStore((state) => state.addToCart);
	const removeFromCart = useStore((state) => state.removeFromCart);

	const cartTotalPrice = useStore((state) => state.cartTotalPrice);
	const cartTotalItems = useStore((state) => state.cartTotalItems);

	const clearAllFromCart = useStore((state) => state.clearAllFromCart);

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<BreadcrumbsComponents before="Home" latest="Cart" />

			<div style={{ margin: "30px 0" }}>
				<Button
					variant="outlined"
					color="error"
					size="large"
					onClick={clearAllFromCart}
					style={{ float: "right" }}
				>
					CLEAR CART
				</Button>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={8} md={8}>
						{cartItems.map((item, index) => (
							<div key={item.id}>
								<Typography variant="h6" gutterBottom>
									{item.title}
								</Typography>
								<Stack direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
									<IconButton onClick={() => removeFromCart(item.id)}>
										<MdOutlineRemove style={{ color: "white" }} />
									</IconButton>
									<Typography variant="subtitle1" gutterBottom>
										{item.quantity}
									</Typography>
									<IconButton onClick={() => addToCart(item)}>
										<MdOutlineAdd style={{ color: "white" }} />
									</IconButton>
								</Stack>
							</div>
						))}
					</Grid>

					<Grid item xs={12} sm={4} md={4}>
						<Typography variant="h6" gutterBottom>
							Total {cartTotalItems} Quantity
						</Typography>
						<Typography variant="h6" gutterBottom>
							Total {cartTotalPrice} Baht
						</Typography>

						<Modal handleClose={handleClose} open={open} />
						<Button variant="contained" size="large" fullWidth onClick={handleClickOpen}>
							CHECKOUT
						</Button>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default CartList;
