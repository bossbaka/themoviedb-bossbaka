import React from "react";
import { Grid, ImageListItem, ImageListItemBar, IconButton } from "@mui/material";
import { MdInfo } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store/store";

const Image_path = "https://image.tmdb.org/t/p/w500/";

function ImgList({ movies }) {
	const filter = useStore((state) => state.filter);

	const history = useNavigate();

	const seeDetail = (item) => {
		history("/movies/" + item.title, { state: { item } });
	};

	return (
		<>
			<Grid container spacing={2}>
				{movies
					.filter((item) => item.title.toLowerCase().includes(filter.toLowerCase()))
					.map((item) => (
						<Grid item xs={6} sm={4} md={3} key={item.id}>
							<ImageListItem>
								<img
									src={`${Image_path + item.poster_path}?w=248&fit=crop&auto=format`}
									srcSet={`${Image_path + item.poster_path}?w=248&fit=crop&auto=format&dpr=2 2x`}
									alt={item.title}
									loading="lazy"
									className="rounded-lg"
								/>
								<ImageListItemBar
									className="rounded-b-lg"
									title={item.title}
									subtitle={item.overview}
									actionIcon={
										<IconButton
											sx={{ color: "rgba(255, 255, 255, 0.54)" }}
											aria-label={`info about ${item.title}`}
											onClick={() => seeDetail(item)}
										>
											<MdInfo />
										</IconButton>
									}
								/>
							</ImageListItem>
						</Grid>
					))}
			</Grid>
		</>
	);
}

export default ImgList;
