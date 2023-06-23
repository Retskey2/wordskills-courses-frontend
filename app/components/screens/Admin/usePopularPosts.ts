

import { PostsService } from "@/utills/services/posts.service"


import { useQuery } from "@tanstack/react-query"

export const usePopularPosts = () => {
    const { isLoading, data: posts, refetch} = useQuery(
        {
            queryKey: ['most popular posts'],
            queryFn: () => PostsService.getPopular(), 
            select: ({data}) => data, 
        }
    )

    return {
        isLoading, 
        posts, 
        refetch
    }
}