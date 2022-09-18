import { useEffect, useRef } from "react";
import { useStore } from "../store/store";
import ImgList from "../components/ImgList";
import { Typography } from "@mui/material";

function Home() {
	const movies = useStore((state) => state.movies);
	const fetchMovies = useStore((state) => state.fetchMovies);

	const effectRan = useRef(false);
	useEffect(() => {
		if (effectRan.current === true) {
			fetchMovies();
		}
		return () => {
			effectRan.current = true;
		};
	}, []);

	if (movies.length === 0) {
		return (
			<Typography variant="h4" style={{ color: "white", margin: "30px 0" }}>
				Empty
			</Typography>
		);
	}

	return (
		<div>
			<ImgList movies={movies} />
		</div>
	);
}

export default Home;
