import create from "zustand";
import axios from "axios";
import { persist } from "zustand/middleware";

//const apiKey = import.meta.env.VITE_API_KEY;
const apiKey = "f8c6cf14d8a5eff95ed59c269a996c60";

export const useStore = create(
	persist(
		(set, get) => ({
			movies: [],
			fetchMovies: async () => {
				const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=a`);
				set({ movies: await response.data.results });
			},
			movie: [],
			fetchMovie: async (id) => {
				const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
				set({ movie: await response.data });
			},
			filter: "",
			setFilter: (filter) =>
				set((state) => ({
					...state,
					filter,
				})),
			cartItems: [],
			cartTotalItems: 0,
			cartTotalPrice: 0,
			cartDiscount: 0,
			addToCart: (data) => {
				const newData = { ...data, quantity: 1 };
				const foundIndex = get().cartItems.findIndex((item) => item.id === data.id);
				if (foundIndex >= 0) {
					get().cartItems[foundIndex] = {
						...get().cartItems[foundIndex],
						quantity: get().cartItems[foundIndex].quantity + 1,
					};
				} else {
					set(() => ({
						cartItems: [...get().cartItems, newData],
					}));
				}
				get().updateTotalPrice();
			},
			removeFromCart: (id) => {
				const foundIndex = get().cartItems.findIndex((item) => item.id === id);
				if (get().cartItems[foundIndex].quantity > 1) {
					get().cartItems[foundIndex] = {
						...get().cartItems[foundIndex],
						quantity: get().cartItems[foundIndex].quantity - 1,
					};
				} else {
					get().cartItems.splice(foundIndex, 1);
				}
				get().updateTotalPrice();
			},
			updateTotalPrice: () => {
				let { total, qty, discount } = get().cartItems.reduce(
					(cartTotal, cartItem) => {
						const { quantity, price } = cartItem;
						const totalPriceOfItem = price * quantity;

						if (quantity > 3) {
							const totalDiscount10per = (totalPriceOfItem * 10) / 100;
							cartTotal.discount = totalPriceOfItem - totalDiscount10per;
							if (quantity > 5) {
								const totalDiscount20per = (totalPriceOfItem * 20) / 100;
								cartTotal.discount = totalPriceOfItem - totalDiscount20per;
							}
						}

						cartTotal.total += totalPriceOfItem;
						cartTotal.qty += quantity;

						return cartTotal;
					},
					{ total: 0, qty: 0, discount: 0 }
				);
				set({
					cartTotalItems: qty,
					cartTotalPrice: total,
					cartDiscount: discount,
				});
			},
			clearAllFromCart: () => set({ cartItems: [], cartTotalItems: 0 }),
		}),
		{
			name: "themoviedb-storage",
		}
	)
);
