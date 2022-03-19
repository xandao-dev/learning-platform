import { writable } from 'svelte/store';

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
