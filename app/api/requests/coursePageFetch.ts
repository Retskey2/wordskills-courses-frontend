import { ICourse } from '@/utills/typescript/interfaces/course.interface';

import { axiosClassic } from '../interceptors';


async function fetchPageCourses(page: number, skip?: number, take = 9): Promise<ICourse[]> {
	skip = (page - 1) * take;

	const { data } = await axiosClassic.get<ICourse[]>(
		`/course/?page=${page}&take=${take}&skip=${skip}`
	);

	return data;
}

export default fetchPageCourses;
