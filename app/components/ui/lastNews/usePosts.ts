import { PostsService } from "@/utills/services/posts.service"
import { useQuery } from "@tanstack/react-query"

export const usePosts = () => {
    const { isLoading, data: posts, refetch} = useQuery(
        {
            queryFn: () => PostsService.getPosts(), 
            queryKey: ['get posts'],
            select: ({data}) => data,
        }
    )

    return {
        isLoading, 
        posts, 
        refetch
    }
}