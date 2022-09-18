import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";

function BreadcrumbsComponents({ before, latest }) {
	return (
		<Breadcrumbs aria-label="breadcrumb" style={{ color: "white" }}>
			<Link to="/">{before}</Link>
			<Typography style={{ color: "white" }}>{latest}</Typography>
		</Breadcrumbs>
	);
}

export default BreadcrumbsComponents;
