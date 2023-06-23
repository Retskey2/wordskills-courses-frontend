
import { CourseService } from "@/utills/services/course.service"


import { useQuery } from "@tanstack/react-query"

export const useGetUsersByCourse = (id: string) => {
    const { isLoading, data, refetch} = useQuery(
        {
            queryKey: ['get user subscriptions', id],
            queryFn: () => CourseService.getSubscriptions(id), 
            select: ({data}) => data, 
        }
    )

    return {
        isLoading, 
        data, 
        refetch
    }
}