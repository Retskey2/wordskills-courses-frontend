
import { UsersService } from "@/utills/services/user.service"

import { useQuery } from "@tanstack/react-query"

export const useCountUsers = () => {
    const { isLoading, data: count, refetch} = useQuery(
        {
            queryKey: ['count users'],
            queryFn: () => UsersService.getCount(), 
            select: ({data}) => data,
        
        }
    )

    return {
        isLoading, 
        count, 
        refetch
    }
}