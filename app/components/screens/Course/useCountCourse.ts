
import { CourseService } from "@/utills/services/course.service"

import { useQuery } from "@tanstack/react-query"

export const useCountCourse = () => {
    const { isLoading, data: count, refetch} = useQuery(
        {
            queryKey: ['count courses'],
            queryFn: () => CourseService.getCount(), 
            select: ({data}) => data,
        
        }
    )

    return {
        isLoading, 
        count, 
        refetch
    }
}