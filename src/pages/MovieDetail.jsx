import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography, Button, Grid, Stack } from "@mui/material";

const Image_path = "https://image.tmdb.org/t/p/w500/";

function MovieDetail() {
	const location = useLocation();
	const history = useNavigate();

	const onAddToCart = () => {
		history("/cart");
	};

	console.log(location);

	return (
		<div className="h-screen">
			<div
				className="banner-detail"
				style={{ backgroundImage: `url(${Image_path + location.state.item.backdrop_path})` }}
			>
				<Stack direction="row" alignItems="center" spacing={0}>
					<Grid container spacing={2}>
						<Grid item xs={8}>
							<Typography variant="h3" gutterBottom>
								{location.state.item.title}
							</Typography>
							{location.state.item.release_date}
							<Typography variant="subtitle1" gutterBottom>
								{location.state.item.overview}
							</Typography>
							<Button variant="contained" onClick={onAddToCart}>
								ADD TO CART
							</Button>
						</Grid>

						<Grid item xs={4}>
							poster_path
						</Grid>
					</Grid>
				</Stack>
			</div>
		</div>
	);
}

export default MovieDetail;
