import { Skeleton } from '@mui/material';
import React, { memo } from 'react';

import { ICourse } from '@/utills/typescript/interfaces/course.interface';

import { CardCourse } from '../../cards/CardCourse.tsx/cardCourse';

import styles from './DisplayCourse.module.scss';

interface Props {
	data: ICourse[] | undefined;
	isFetching: boolean;
}

const DisplayCourse: React.FC<Props> = memo(({ data, isFetching }) => (
	<div className={styles['course-container']}>
		{!isFetching || data
			? data?.map((item, id) => <CardCourse key={id} item={item} />)
			: [...Array(9)].map((_, index) => <Skeleton key={index} className='w-full' height={600} />)}
	</div>
));

export default DisplayCourse;
