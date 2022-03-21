import { writable, get } from 'svelte/store';
import { trainingModules } from './trainingModules';

export interface ITraining {
	id: string;
	image: string;
	name: string;
	description: string;
	workload: string;
	startDate: number;
	endDate: number;
	enabled: boolean;
}

function createTrainings() {
	const all = writable([]);
	const { subscribe, update } = all;
	return {
		subscribe,
		getById: (id: string) => get(all).find((t) => t.id === id) || getEmptyTraining(),
		create: (training: ITraining) => update((trs) => [...trs, training]),
		createBulk: (trainings: ITraining[]) => update((trs) => [...trs, ...trainings]),
		edit: (training: ITraining) =>
			update((trs) => {
				const index = trs.findIndex((t) => t.id === training.id);
				if (index !== -1) trs[index] = training;
				return trs;
			}),
		remove: (id: string) =>
			update((trs) => {
				const index = trs.findIndex((t) => t.id === id);
				if (index !== -1) {
					trainingModules.removeAllFromTraining(id);
					trs.splice(index, 1);
				}
				return trs;
			}),
	};
}

export const trainings = createTrainings();
export function getEmptyTraining(): ITraining {
	return {
		id: '',
		image: '',
		name: '',
		description: '',
		workload: '',
		startDate: 0,
		endDate: 0,
		enabled: true,
	};
}
