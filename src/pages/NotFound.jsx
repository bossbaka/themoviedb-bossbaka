import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

function NotFound() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/", { replace: true });
	};

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				minHeight: "100vh",
				backgroundColor: "#0f172a",
			}}
		>
			<Typography variant="h1" style={{ color: "white" }}>
				404
			</Typography>
			<Typography variant="h6" style={{ color: "white" }}>
				The page you’re looking for doesn’t exist.
			</Typography>
			<Button variant="contained" style={{ margin: "20px" }} onClick={handleClick}>
				Back Home
			</Button>
		</Box>
	);
}

export default NotFound;
