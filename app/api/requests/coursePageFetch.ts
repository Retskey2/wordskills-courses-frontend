import { AxiosRequestConfig } from 'axios';

import { ICourse } from '@/utills/typescript/interfaces/course.interface';

import { axiosClassic } from '../interceptors';


interface RequestPokemonParams {
	params: {
		debounedSearchValue: string;
		page?: number;
		skip?: number;
		take?: number;
	};
	config?: AxiosRequestConfig;
}

interface ResponseData {
	data: ICourse[];
	meta: {
		hasNextPage: true;
		hasPreviousPage: false;
		itemCount: number;
		page: number;
		pageCount: number;
		take: number;
	};
}

async function fetchPageCourses({
	params: { debounedSearchValue, page = 1, skip, take = 9 },
	config
}: RequestPokemonParams): Promise<ResponseData> {
	skip = (page - 1) * take;

	const { data } = await axiosClassic.get<ResponseData>(
		`/course/?page=${page}&take=${take}&skip=${skip}&searchTerm=${debounedSearchValue}`,
		{ ...config }
	);

	return data;
}

export default fetchPageCourses;
