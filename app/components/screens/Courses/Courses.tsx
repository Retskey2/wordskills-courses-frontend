import { Skeleton } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { useQuery } from '@tanstack/react-query';
import { FC, useState } from 'react';
import { Meta } from 'utills/meta/Meta';

import fetchPageCourses from '@/api/requests/coursePageFetch';
import InputSearch from '@/components/inputs/InputSearch';
import { WrapperContent } from '@/components/layout/WrapperContent';
import Heading from '@/components/ui/Heading/Heading';
import SubHeading from '@/components/ui/Heading/SubHeading';
import { CardCourse } from '@/components/ui/cards/CardCourse.tsx/cardCourse';

import styles from './Courses.module.scss';

const Courses: FC = () => {
	const [page, setPage] = useState(1);

	const { data, isError, isLoading } = useQuery({
		queryKey: ['courses', page],
		queryFn: () => fetchPageCourses(page),
		keepPreviousData: true
	});

	if (isError) return <div>Error fetching data</div>;

	return (
		<Meta title='Курсы'>
			<WrapperContent>
				<Heading small title='КУРСЫ' />
				<SubHeading className='mb-8'>Выбери то, что тебе по вкусу!</SubHeading>

				<InputSearch placeholder='Поиск' />

				<div className={styles['course-container']}>
					{!isLoading || data
						? data.data.map((item, id) => <CardCourse key={id} item={item} />)
						: [...Array(9)].map((_, index) => <Skeleton key={index} height={400} width={400} />)}
				</div>
				<Pagination
					className='mt-8 flex justify-center'
					count={3}
					shape='rounded'
					onChange={(e, value) => setPage(value)}
				/>
			</WrapperContent>
		</Meta>
	);
};

export default Courses;
