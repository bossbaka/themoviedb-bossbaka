import create from "zustand";
import axios from "axios";
import { persist } from "zustand/middleware";

const api = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=a`;

export const useStore = create(
	persist(
		(set) => ({
			movies: [],
			loading: false,
			fetchMovies: async () => {
				const response = await axios.get(api);
				set({ loading: false, movies: await response.data.results });
			},
			filter: "",
			setFilter: (filter) =>
				set((state) => ({
					...state,
					filter,
				})),
			cart: "",
			addToCart: (cart) =>
				set((state) => ({
					...state,
					cart,
				})),
		}),
		{
			name: "themoviedb-storage",
		}
	)
);
