import { useEffect, useRef } from "react";
import { useStore } from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "./view/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
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

	const theme = createTheme({
		typography: {
			fontFamily: "'Prompt'",
			textTransform: "none",
		},
		breakpoints: {
			values: {
				xs: 0,
				sm: 600,
				md: 900,
				lg: 1200,
				xl: 1536,
			},
		},
	});
	console.log(movies);
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
