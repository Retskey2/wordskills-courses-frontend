import { AxiosRequestConfig } from 'axios';

import { ICourse } from '@/utills/typescript/interfaces/course.interface';

import { axiosClassic } from '../interceptors';


interface RequestCourseParams {
	params: { courseId: string };
	config?: AxiosRequestConfig;
}

async function fetchCourseById({
	params: { courseId },
	config
}: RequestCourseParams): Promise<ICourse> {
	const { data } = await axiosClassic.get<ICourse>(`/course/${courseId}`, { ...config });

	return data;
}

export default fetchCourseById;
