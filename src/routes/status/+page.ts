import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const sensorState = await parent();
	return sensorState
};