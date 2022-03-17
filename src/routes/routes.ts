import Home from './Home.svelte';
import Trainings from './Trainings.svelte';
import UserSettings from './UserSettings.svelte';

export interface IRoute {
	path: string;
	component: any;
	name: string;
	icon: string;
	parent?: string;
	isOnSidebar: boolean;
}

export const routes = {
	home: {
		path: '/',
		component: Home,
		name: 'Home',
		icon: 'bi bi-house',
		parent: null,
		isOnSidebar: true,
	},
	trainings: {
		path: '/trainings',
		component: Trainings,
		name: 'Treinamentos',
		icon: 'bi bi-book',
		parent: 'home',
		isOnSidebar: true,
	},
	userSettings: {
		path: '/user-settings',
		component: UserSettings,
		name: 'Key Account',
		icon: 'bi bi-gear',
		parent: 'home',
		isOnSidebar: false,
	},
};
