import { type LayoutServerLoad } from './$types';

/*
Error when evaluating SSR module /src/routes/+layout.ts: failed to import "./$types"
Error: Failed to load url ./$types (resolved id: ./$types) in redacted/+layout.server.ts. Does the file exist?
*/

export const load: LayoutServerLoad = async ({ locals, depends }) => {

	return {
		a: "A",
	};
};
