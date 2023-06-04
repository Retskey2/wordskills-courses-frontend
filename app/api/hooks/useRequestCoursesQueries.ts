import { useQuery } from '@tanstack/react-query';

import fetchPageCourses from '../requests/coursePageFetch';

interface UseRequestCoursesQueriesParams {
	// debounced search term for filter
	debounedSearchValue?: string;

	// page number to start from
	page?: number;

	// skip items at first
	skip?: number;

	// choose the number of elements on one page
	take?: number;
}

export const useRequestCoursesQueries = (params: UseRequestCoursesQueriesParams) =>
	useQuery({
		queryKey: ['courses', params.page, params.debounedSearchValue],
		queryFn: () => fetchPageCourses({ params }),
		keepPreviousData: true,
		refetchOnWindowFocus: false
	});
