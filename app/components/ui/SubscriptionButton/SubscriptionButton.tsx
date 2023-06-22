import { useMutation } from '@tanstack/react-query';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';

import { useSubscriptions } from '@/components/screens/Course/useSubscriptions';

import { IButton } from '../Button/Button';

import styles from './SubscriptionButton.module.scss';
import { UsersService } from '@/utills/services/user.service';
import { toastrError } from '@/utills/toastr-error';

interface SubscriptionButton extends IButton {
	courseId: string;
}

const SubscriptionButton: FC<SubscriptionButton> = ({ courseId, children }) => {
	const [isSmashed, setIsSmashed] = useState(false);

	const { subscriptions, refetch } = useSubscriptions();

	useEffect(() => {
		if (subscriptions) {
			const isHasMovie = subscriptions.some((f) => f.id === +courseId);
			if (isSmashed !== isHasMovie) setIsSmashed(isHasMovie);
		}
	}, [subscriptions, isSmashed, courseId]);

	const { mutateAsync } = useMutation({
		mutationKey: ['update subscription'],
		mutationFn: () => UsersService.toggleSubscriptions(courseId),
		onError(error) {
			toastrError(error, 'Update favorite list');
		},
		onSuccess() {
			setIsSmashed(!isSmashed);
			refetch();
		}
	});

	return (
		<button
			onClick={() => mutateAsync()}
			className={cn(styles.button, {
				[styles.smashed]: isSmashed
			})}
		>
			{isSmashed ? 'Записан' : 'Записаться'}
		</button>
	);
};

export default SubscriptionButton;
