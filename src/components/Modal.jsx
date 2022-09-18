import React, { useState } from "react";
import {
	Snackbar,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	IconButton,
	Alert,
} from "@mui/material";
import TimeDisplay from "./TimeDisplay";
import { MdClose } from "react-icons/md";
import { useStore } from "../store/store";
import { useNavigate } from "react-router-dom";

function Modal({ handleClose, open }) {
	const clearAllFromCart = useStore((state) => state.clearAllFromCart);

	const [openSnackbar, setOpenSnackbar] = useState(false);

	const history = useNavigate();

	const handleClickSnackbar = () => {
		history("/");
		clearAllFromCart();
	};

	const handleCloseSnackbar = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};

	const action = (
		<div>
			<IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
				<MdClose />
			</IconButton>
		</div>
	);

	return (
		<div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">Please Pay</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						<TimeDisplay />
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Close</Button>
					<Button onClick={handleClickSnackbar} autoFocus>
						Submit
					</Button>
				</DialogActions>
			</Dialog>

			<Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
				<Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: "100%" }}>
					ok
				</Alert>
			</Snackbar>
		</div>
	);
}

export default Modal;
