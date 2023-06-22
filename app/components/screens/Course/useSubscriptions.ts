import { useAuth } from "@/utills/hooks/useAuth"
import { UsersService } from "@/utills/services/user.service"
import { useQuery } from "@tanstack/react-query"

export const useSubscriptions = () => {
    const {user} = useAuth()
    const { isLoading, data: subscriptions, refetch} = useQuery(
        {
            queryKey: ['subscriptions courses'],
            queryFn: () => UsersService.getSubscriptions(), 
            select: ({data}) => data,
            enabled: !!user
        }
    )

    return {
        isLoading, 
        subscriptions, 
        refetch
    }
}