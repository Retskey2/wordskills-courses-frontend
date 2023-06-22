
import { PostsService } from "@/utills/services/posts.service"
import { useQuery } from "@tanstack/react-query"

export const useCountPosts = () => {

    const { isLoading, data: count, refetch} = useQuery(
        {
            queryKey: ['count posts'],
            queryFn: () => PostsService.getCount(), 
            select: ({data}) => data,
        }
    )

    return {
        isLoading, 
        count, 
        refetch
    }
}