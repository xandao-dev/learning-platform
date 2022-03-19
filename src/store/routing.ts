import type { IRoute } from 'src/routes/routes';
import { writable } from 'svelte/store';

export const currentRoute = writable<IRoute | undefined>(undefined);
