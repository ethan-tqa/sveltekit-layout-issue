import { type LayoutLoad } from './$types';

export const ssr = false;

// This is the client side code of the root layout.
export const load: LayoutLoad = async ({ depends, data }) => {
	return {
		...data,
		b: "B",
	};
};
