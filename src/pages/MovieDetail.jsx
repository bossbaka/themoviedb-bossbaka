import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Typography, Button, Grid, Chip } from "@mui/material";
import { useStore } from "../store/store";
import Image from "mui-image";
import BreadcrumbsComponents from "../components/BreadcrumbsComponents";

const Image_path = "https://image.tmdb.org/t/p/w500/";

function MovieDetail() {
	const history = useNavigate();
	const params = useParams();
	const movie = useStore((state) => state.movie);
	const fetchMovie = useStore((state) => state.fetchMovie);
	const addToCart = useStore((state) => state.addToCart);

	useEffect(() => {
		fetchMovie(params.id);
	}, [params.id]);

	let newObjMovie = movie;
	newObjMovie = { ...newObjMovie, price: 250 };

	const handleAddToCart = () => {
		history("/cart");
		addToCart(newObjMovie);
	};

	console.log(newObjMovie);

	return (
		<div>
			<BreadcrumbsComponents before="Home" latest="Movie" />

			<div style={{ margin: "30px 0" }}>
				<Grid container spacing={2} alignItems="center">
					<Grid item xs={12} sm={6} md={6}>
						<Typography variant="h3" gutterBottom>
							{newObjMovie.title}
						</Typography>

						<Typography variant="h4" gutterBottom>
							{newObjMovie.price} Baht
						</Typography>

						<div style={{ margin: "20px 0" }}>
							<Typography variant="subtitle2" gutterBottom style={{ marginLeft: "5px" }}>
								Release date : {newObjMovie.release_date}
							</Typography>
							{newObjMovie.genres.map((g, index) => (
								<Chip
									key={index}
									label={g.name}
									size="small"
									color="primary"
									style={{ marginRight: "5px" }}
								/>
							))}
						</div>
						<Typography variant="subtitle1" gutterBottom>
							{newObjMovie.overview}
						</Typography>

						<Button
							variant="contained"
							size="large"
							fullWidth
							onClick={handleAddToCart}
							style={{ marginTop: "30px" }}
						>
							ADD TO CART
						</Button>
					</Grid>

					<Grid item xs={12} sm={6} md={6}>
						<div className="flex justify-center	">
							<Image src={Image_path + newObjMovie.poster_path} duration={1000} width={350} />
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default MovieDetail;
