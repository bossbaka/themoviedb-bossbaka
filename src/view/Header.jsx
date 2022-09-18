import React from "react";
import { Box, AppBar, Toolbar, Typography, InputBase, IconButton, Badge, Container } from "@mui/material";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import { styled, alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useStore } from "../store/store";

function Header() {
	const filter = useStore((state) => state.filter);
	const setFilter = useStore((state) => state.setFilter);
	const cartTotalItems = useStore((state) => state.cartTotalItems);

	const handleChange = (e) => {
		setFilter(e.target.value);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{ backgroundColor: "secondary" }}>
				<Container maxWidth="xl">
					<Toolbar style={{ padding: 0 }}>
						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
						>
							<Link to="/">THE MOVIE DB</Link>
						</Typography>
						<Search>
							<SearchIconWrapper>
								<MdSearch />
							</SearchIconWrapper>
							<StyledInputBase
								placeholder="Movie Title"
								inputProps={{ "aria-label": "search" }}
								value={filter}
								onChange={handleChange}
							/>
						</Search>
						<Link to="/cart">
							<IconButton style={{ marginLeft: "20px", color: "white" }}>
								<Badge badgeContent={cartTotalItems} color="error">
									<MdShoppingCart />
								</Badge>
							</IconButton>
						</Link>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
}

export default Header;

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(1),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
}));
