import { useEffect, useRef } from "react";
import { useStore } from "../store/store";
import Button from "@mui/material/Button";
import ImgList from "../components/ImgList";

function Home() {
	const effectRan = useRef(false);
	const movies = useStore((state) => state.movies);
	const fetchMovies = useStore((state) => state.fetchMovies);

	useEffect(() => {
		console.log("ran");
		if (effectRan.current === true) {
			fetchMovies();
		}
		return () => {
			console.log("un");
			effectRan.current = true;
		};
	}, []);

	if (movies.length === 0) {
		return <div>Empty</div>;
	}

	console.log(movies);
	return (
		<div style={{ margin: "50px" }}>
			<ImgList movies={movies} />
		</div>
	);
}

export default Home;
