
import { PostsService } from "@/utills/services/posts.service"
import { useQuery } from "@tanstack/react-query"

export const usePost = (id: number) => {
    const { isLoading, data: post, refetch} = useQuery(
        {
            queryKey: ['get post id'],
            queryFn: () => PostsService.getPostById(id), 
            select: ({data}) => data,
        }
    )

    return {
        isLoading, 
        post, 
        refetch
    }
}