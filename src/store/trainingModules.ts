import { writable, get } from 'svelte/store';
import { moduleLessons } from './moduleLessons';

export interface ITrainingModule {
	id: string;
	trainingId: string;
	image: string;
	name: string;
	description: string;
	enabled: boolean;
}

function createTrainingModules() {
	const all = writable([]);
	const { subscribe, update } = all;
	return {
		subscribe,
		getById: (id: string) => get(all).find((mod) => mod.id === id) || getEmptyTrainingModule(),
		getAllFromTraining: (trainingId: string) => get(all).filter((mod) => mod.trainingId === trainingId) || [],
		create: (mod: ITrainingModule) => update((mods) => [...mods, mod]),
		createBulk: (trainingMods: ITrainingModule[]) => update((mods) => [...mods, ...trainingMods]),
		edit: (mod: ITrainingModule) =>
			update((mods) => {
				const index = mods.findIndex((m) => m.id === mod.id);
				if (index !== -1) mods[index] = mod;
				return mods;
			}),
		remove: (id: string) =>
			update((mods) => {
				const index = mods.findIndex((m) => m.id === id);
				if (index !== -1) {
					moduleLessons.removeAllFromModule(id);
					mods.splice(index, 1);
				}
				return mods;
			}),
		removeAllFromTraining: (trainingId: string) =>
			update((mods) => {
				mods.forEach((mod) => {
					if (mod.trainingId === trainingId) moduleLessons.removeAllFromModule(mod.id);
				});
				return mods.filter((mod) => mod.trainingId !== trainingId);
			}),
	};
}

export const trainingModules = createTrainingModules();
export function getEmptyTrainingModule(trainingId: string = ''): ITrainingModule {
	return {
		id: '',
		trainingId,
		image: '',
		name: '',
		description: '',
		enabled: true,
	};
}
