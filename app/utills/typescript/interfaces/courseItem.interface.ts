import { СategoryCourse } from '../types/couse.types';

export interface ICardCourseItem {
	image?: string;
	title: string;
	category: СategoryCourse;
	description: string;
	timeWeek: number;
	timeDuration: number;
	type: 'offline' | 'online';
}
