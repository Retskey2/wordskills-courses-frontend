
import { CourseService } from "@/utills/services/course.service"


import { useQuery } from "@tanstack/react-query"

export const usePopularCourse = () => {
    const { isLoading, data: course, refetch} = useQuery(
        {
            queryKey: ['most popular course'],
            queryFn: () => CourseService.getPopular(), 
            select: ({data}) => data, 
        }
    )

    return {
        isLoading, 
        course, 
        refetch
    }
}