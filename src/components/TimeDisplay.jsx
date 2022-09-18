import React from "react";
import { useCountdown } from "../hooks/useCountdown";
import { Typography } from "@mui/material";

function TimeDisplay() {
	const ONEMIN = 60 * 1000;
	const NOW_IN_MS = new Date().getTime();

	const dateTimeAfterThreeDays = NOW_IN_MS + ONEMIN;

	const [minutes, seconds] = useCountdown(dateTimeAfterThreeDays);

	if (minutes + seconds <= 0) {
		return <Typography variant="h4">Expired!</Typography>;
	}

	return (
		<div>
			<Typography variant="h4">
				{minutes} : {seconds}
			</Typography>
		</div>
	);
}

export default TimeDisplay;
