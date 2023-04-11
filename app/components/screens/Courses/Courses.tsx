import { Skeleton } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { FC, useState } from 'react';

import { useRequestCoursesQueries } from '@/api/hooks/useRequestCoursesQueries';
import { WrapperContent } from '@/components/layout/WrapperContent';
import Heading from '@/components/ui/Heading/Heading';
import SubHeading from '@/components/ui/Heading/SubHeading';
import DisplayCourse from '@/components/ui/displays/DisplayCourse/DisplayCourse';
import InputSearch from '@/components/ui/inputs/InputSearch';
import useDebounce from '@/utills/hooks/useDebounce';
import { Meta } from '@/utills/meta/Meta';

const Courses: FC = () => {
	const [page, setPage] = useState(1);
	const [searchValue, setSearchValue] = useState('');

	const debounedSearchValue = useDebounce(searchValue, 300);
	const { data, isFetching } = useRequestCoursesQueries({ debounedSearchValue, page });

	return (
		<Meta title='Курсы'>
			<WrapperContent>
				<Heading small title='КУРСЫ' />
				<SubHeading className='mb-8'>Выбери то, что тебе по вкусу!</SubHeading>

				<InputSearch
					placeholder='Поиск'
					value={searchValue}
					onChange={({ target: { value } }) => setSearchValue(value)}
				/>

				<DisplayCourse data={data?.data} isFetching={isFetching} />

				{data ? (
					<Pagination
						className='mt-8 flex justify-center'
						count={Math.ceil(data.meta.itemCount / data.meta.take)}
						shape='rounded'
						onChange={(_, value) => setPage(value)}
					/>
				) : (
					<Skeleton className='m-auto' height={32} width={160} />
				)}
			</WrapperContent>
		</Meta>
	);
};

export default Courses;
