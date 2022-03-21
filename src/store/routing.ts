import type { IRoute } from '../routes/routes';
import { writable } from 'svelte/store';

export const currentRoute = writable<IRoute | undefined>(undefined);
