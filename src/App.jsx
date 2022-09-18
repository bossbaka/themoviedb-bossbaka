import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "./view/Layout";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./utility/ScrollToTop";
import Cart from "./pages/Cart";

function App() {
	const theme = createTheme({
		palette: {
			primary: {
				main: "#1e293b",
			},
			secondary: {
				main: "#0f172a",
			},
		},
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
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<Home />} />
							<Route path="/movies/:id" element={<MovieDetail />} />
							<Route path="/cart" element={<Cart />} />
						</Route>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</ScrollToTop>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
