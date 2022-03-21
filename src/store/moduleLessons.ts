import { writable, get } from 'svelte/store';

export interface IModuleLesson {
	id: string;
	moduleId: string;
	name: string;
	content: string;
}

function createTrainingModuleLessons() {
	const all = writable([]);
	const { subscribe, update } = all;
	return {
		subscribe,
		getById: (id: string) => get(all).find((l) => l.id === id) || null,
		getAllFromModule: (moduleId: string) => get(all).filter((l) => l.moduleId === moduleId) || [],
		create: (lesson: IModuleLesson) => update((lessons) => [...lessons, lesson]),
		createBulk: (moduleLessons: IModuleLesson[]) => update((lessons) => [...lessons, ...moduleLessons]),
		edit: (lesson: IModuleLesson) =>
			update((lessons) => {
				const index = lessons.findIndex((l) => l.id === lesson.id);
				if (index !== -1) lessons[index] = lesson;
				return lessons;
			}),
		remove: (id: string) =>
			update((lessons) => {
				const index = lessons.findIndex((l) => l.id === id);
				if (index !== -1) lessons.splice(index, 1);
				return lessons;
			}),
		removeAllFromModule: (moduleId: string) =>
			update((lessons) => lessons.filter((mod) => mod.moduleId !== moduleId)),
	};
}

export const moduleLessons = createTrainingModuleLessons();
export function getEmptyModuleLesson(moduleId: string = ''): IModuleLesson {
	return {
		id: '',
		moduleId,
		name: '',
		content: '',
	};
}
