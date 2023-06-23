import { MenuItem, Select, Skeleton } from '@mui/material';
import { FC, useEffect, useState } from 'react';

import { WrapperContent } from '@/components/layout/WrapperContent';
import Heading from '@/components/ui/Heading/Heading';

import { useCountCourse } from '../Course/useCountCourse';
import { useCountPosts } from '../News/useCountPosts';

import styles from './Admin.module.scss';
import { useCountUsers } from './useCountUser';
import { useGetUsersByCourse } from './useGetUsersByCourse';
import { usePopularCourse } from './usePopularCourse';
import { usePopularPosts } from './usePopularPosts';
import { useRequestCoursesQueries } from '@/api/hooks/useRequestCoursesQueries';
import { Meta } from '@/utills/meta/Meta';

const Admin: FC = () => {
	const [selectedOption, setSelectedOption] = useState('');

	const { count: CountPosts } = useCountPosts();
	const { count: countCourse } = useCountCourse();
	const { count: countUsers } = useCountUsers();

	const { course: popularCourse } = usePopularCourse();
	const { posts: popularPosts } = usePopularPosts();
	const { data: AllCourse } = useRequestCoursesQueries({});

	const { data, isLoading } = useGetUsersByCourse(selectedOption);

	const handleOptionChange = (event: any) => {
		const selectedValue = event.target.value;
		setSelectedOption(selectedValue);
	};
	return (
		<Meta title='Admin panel'>
			<WrapperContent>
				<Heading title='Админ панель' />
				<div className={styles['container']}>
					<div className={styles['info-block']}>
						{CountPosts ? (
							<div className='flex flex-col'>
								{countUsers}
								<span className='text-xl'>Пользователей</span>
							</div>
						) : (
							<div>
								<Skeleton className='w-full' height={30} />
								<Skeleton className='w-full' height={30} />
							</div>
						)}
					</div>
					<div className={styles['info-block-green']}>
						{CountPosts ? (
							<div className='flex flex-col'>
								{CountPosts}
								<span className='text-xl'>Новостей</span>
							</div>
						) : (
							<div>
								<Skeleton className='w-full' height={30} />
								<Skeleton className='w-full' height={30} />
							</div>
						)}
					</div>
					<div className={styles['info-block']}>
						{CountPosts ? (
							<div className='flex flex-col'>
								{countCourse}
								<span className='text-xl'>Курсов</span>
							</div>
						) : (
							<div>
								<Skeleton className='w-full' height={30} />
								<Skeleton className='w-full' height={30} />
							</div>
						)}
					</div>
				</div>
				<div className={styles['info-list']}>
					<div className={styles['list-wrapper']}>
						<h1 className='font-medium mb-2'>Популярные курсы</h1>
						<div className={styles['list-header']}>
							<div>#</div>
							<div>Заголовок</div>
							<div className='text-center'>Просмотров</div>
						</div>
						<div className={styles['wrapper-content']}>
							{popularCourse &&
								popularCourse.map((course, index) => (
									<div className={styles['list-content']}>
										{index}
										<div>{course.name}</div>
										<div className='text-center'>{course.countOpened}</div>
									</div>
								))}
						</div>
					</div>
					<div className={styles['list-wrapper']}>
						<h1 className='font-medium mb-2'>Новостной блок</h1>
						<div className={styles['list-header']}>
							<div>#</div>
							<div>Заголовок</div>
							<div className='text-center'>Просмотров</div>
						</div>
						<div className={styles['wrapper-content']}>
							{popularPosts &&
								popularPosts.map((post, index) => (
									<div className={styles['list-content']}>
										{index}
										<div>{post.title.slice(0, 12).concat('...')}</div>
										<div className='text-center'>{post.countOpened}</div>
									</div>
								))}
						</div>
					</div>
				</div>

				<div className='w-full bg-[#f0efef] mt-4 shadow-md p-4 rounded'>
					<h1 className='font-medium mb-2'>Ученики</h1>
					<div className=' flex flex-row items-center gap-4'>
						<span>Выберите курс</span>

						<Select
							className='w-[300px] h-[32px] bg-white'
							value={selectedOption}
							onChange={handleOptionChange}
						>
							{AllCourse &&
								AllCourse.data.map((course) => (
									<MenuItem key={course.id} value={course.id}>
										{course.name}
									</MenuItem>
								))}
						</Select>
					</div>
				</div>
				<div className='w-full bg-[#f0efef] shadow-md p-4 rounded gap-4 flex flex-row items-center'>
					<div className='grid grid-cols-3 gap-2'>
						<span className='w-[200px]'>Логин</span>
						<span className='w-[200px]'>Почта</span>
						<span className='w-[200px]'>Дата регистрации</span>
					</div>
				</div>
				<div className='w-full bg-[#f0efef] shadow-md p-4 rounded gap-4 flex flex-row items-center'>
					<div className='grid grid-cols-3 gap-2 justify-between'>
						{data ? (
							data?.map((data) => (
								<>
									<span className='w-[200px]'>{data.login}</span>
									<span className='w-[200px]'>{data.email}</span>
									<span className='w-[200px]'>{data.regDate.toLocaleString()}</span>
								</>
							))
						) : (
							<>
								<Skeleton className='w-full' width={160} height={30} />
								<Skeleton className='w-full' width={160} height={30} />
								<Skeleton className='w-full' width={160} height={30} />
							</>
						)}
					</div>
				</div>
			</WrapperContent>
		</Meta>
	);
};

export default Admin;
