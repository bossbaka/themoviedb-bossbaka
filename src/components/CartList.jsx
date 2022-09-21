import React, { useState } from "react";
import { Grid, IconButton, Button, Typography, Stack, Card, CardContent, CardMedia, Box } from "@mui/material";
import { MdOutlineAdd, MdOutlineRemove } from "react-icons/md";
import { useStore } from "../store/store";
import Modal from "./Modal";
import BreadcrumbsComponents from "./BreadcrumbsComponents";
import { useTheme } from "@mui/material/styles";
import Image from "mui-image";

const Image_path = "https://image.tmdb.org/t/p/w500/";

function CartList({ cartItems }) {
	const addToCart = useStore((state) => state.addToCart);
	const removeFromCart = useStore((state) => state.removeFromCart);

	const cartTotalPrice = useStore((state) => state.cartTotalPrice);
	const cartTotalItems = useStore((state) => state.cartTotalItems);
	const cartDiscount = useStore((state) => state.cartDiscount);

	const clearAllFromCart = useStore((state) => state.clearAllFromCart);

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const theme = useTheme();

	console.log(cartItems);

	const IconButtonStyles = {
		borderRadius: "unset",
		border: "1px solid #fff",
	};

	if (cartItems.length === 0) {
		return (
			<>
				<Typography variant="h4" style={{ color: "white", margin: "30px 0" }}>
					No Items
				</Typography>
			</>
		);
	}

	return (
		<div>
			<BreadcrumbsComponents before="Home" latest="Cart" />

			<div style={{ margin: "30px 0" }}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={8} md={8}>
						{cartItems.map((item, index) => (
							<div key={item.id}>
								<Card sx={{ display: "flex", backgroundColor: "rgb(30 41 59 / 48%)", padding: "20px" }}>
									<CardMedia
										component="img"
										sx={{ width: 120 }}
										image={`${Image_path + item.poster_path}`}
										alt="Live from space album cover"
									/>
									<Box sx={{ display: "flex", flexDirection: "column" }}>
										<CardContent sx={{ flex: "1 0 auto", color: "white" }}>
											<Typography component="div" variant="h6" gutterBottom>
												{item.title}
											</Typography>
											<Typography variant="body1" gutterBottom>
												{item.price} Baht
											</Typography>
										</CardContent>

										<Box
											sx={{
												display: "flex",
												alignItems: "center",
												p: "16px",
												color: "white",
											}}
										>
											<IconButton onClick={() => removeFromCart(item.id)} sx={IconButtonStyles}>
												<MdOutlineRemove style={{ color: "white" }} />
											</IconButton>
											<Typography
												variant="subtitle1"
												gutterBottom
												style={{ marginBottom: "0", padding: "0 30px" }}
											>
												{item.quantity}
											</Typography>
											<IconButton sx={IconButtonStyles} onClick={() => addToCart(item)}>
												<MdOutlineAdd style={{ color: "white" }} />
											</IconButton>
										</Box>
									</Box>
								</Card>
							</div>
						))}
						<Button
							variant="contained"
							color="error"
							size="large"
							style={{ marginTop: "30px" }}
							onClick={clearAllFromCart}
						>
							CLEAR CART
						</Button>
					</Grid>

					<Grid item xs={12} sm={4} md={4}>
						<Card sx={{ display: "flex" }}>
							<Box sx={{ display: "flex", flexDirection: "column" }}>
								<CardContent sx={{ flex: "1 0 auto" }}>
									<Typography variant="h5" gutterBottom>
										ORDER SUMMARY | {cartTotalItems} ITEM(S)
									</Typography>

									<Typography variant="h6" gutterBottom>
										Total {cartTotalPrice} Baht
									</Typography>

									<Typography variant="h6" gutterBottom>
										Discount {cartDiscount}
									</Typography>
								</CardContent>
							</Box>
						</Card>

						<Modal handleClose={handleClose} open={open} />

						<div className="mt-8">
							<Stack spacing={2}>
								<Button
									variant="contained"
									sx={{
										backgroundColor: "white",
										color: "#000",
										":hover": {
											bgcolor: "primary.main",
											color: "white",
										},
									}}
									size="large"
									fullWidth
									onClick={handleClickOpen}
								>
									CHECKOUT
								</Button>
								<Button variant="contained" size="large" fullWidth onClick={handleClickOpen}>
									CONTINUE SHOPPING
								</Button>
							</Stack>
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default CartList;
