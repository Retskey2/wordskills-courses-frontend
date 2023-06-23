
import { CourseService } from '@/utills/services/course.service';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';

export const useUpdateCountOpened = (id: number) => {
    const { mutateAsync } = useMutation({
        mutationKey: ['update count opened', id],
        mutationFn: () => CourseService.updateCountOpened(id)
     }
    )

    useEffect(()=> {
        mutateAsync()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}