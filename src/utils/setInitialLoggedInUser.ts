import { user } from '../store/user';
import avatar from '../assets/avatars/alexandre.png';

export function setInitialLoggedInUser() {
	const initialUser = {
		name: 'Alexandre Calil',
		avatar,
	};
	user.set(initialUser);
}
