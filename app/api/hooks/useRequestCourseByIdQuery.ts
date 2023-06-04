import { useQuery } from '@tanstack/react-query';

import fetchCourseById from '../requests/courseByIdFetch';

interface UseRequestCoursesQueriesParams {
	// Identification course
	courseId: string;
}

export const useRequestCourseByIdQuery = (params: UseRequestCoursesQueriesParams) =>
	useQuery({
		queryKey: ['course', params.courseId],
		queryFn: () => fetchCourseById({ params }),
		keepPreviousData: true,
		refetchOnWindowFocus: false,
		enabled: params.courseId.length > 0
	});
