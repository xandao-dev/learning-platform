import { writable } from 'svelte/store';

export interface ITraining {
	id: string;
	title: string;
	description: string;
	logo: string;
	duration: string;
	startDate: number;
	endDate: number;
	enabled: boolean;
}
