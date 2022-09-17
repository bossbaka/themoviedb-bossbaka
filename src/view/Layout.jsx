import React from "react";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import Header from "./Header";

function Layout() {
	return (
		<>
			<Header />
			<Container maxWidth="xl">
				<main className="flex-1 mt-7">
					<div className="min-h-screen">
						<Outlet />
					</div>
				</main>
			</Container>
		</>
	);
}

export default Layout;
