import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { WrapperContent } from '@/components/layout/WrapperContent';
import Accordion from '@/components/ui/Accordion/Accordion';
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs';
import { BreadcrumbProps } from '@/components/ui/Breadcrumbs/breadcrumbs.interface';
import Button from '@/components/ui/Button/Button';
import { NoSSR } from '@/components/ui/NoSSR/NoSSR';
import SubscriptionButton from '@/components/ui/SubscriptionButton/SubscriptionButton';

import iconAntCalendar from '@/assets/icon/ant-calendar.svg';
import iconAntClock from '@/assets/icon/ant-clock.svg';
import iconAntDesktop from '@/assets/icon/ant-desktop.svg';
import iconBackLogo from '@/assets/icon/course-back-icon.svg';

import styles from './Course.module.scss';
import { useUpdateCountOpened } from './useUpdateCountOpened';
import { useRequestCourseByIdQuery } from '@/api/hooks/useRequestCourseByIdQuery';
import { useAuth } from '@/utills/hooks/useAuth';
import { Meta } from '@/utills/meta/Meta';

export const Course = () => {
	const router = useRouter();
	const courseId = typeof router.query?.id === 'string' ? router.query.id : '';
	const { data } = useRequestCourseByIdQuery({ courseId });

	const { user } = useAuth();

	const breadcrumbs: BreadcrumbProps[] = [
		{
			label: 'Курсы',
			path: '/courses'
		},
		{
			label: `${data?.name}`,
			path: `/courses/${courseId}`
		}
	];

	return (
		<Meta title='Курсы'>
			<WrapperContent>
				<Breadcrumbs breadcrumbs={breadcrumbs} />
				<div className={styles['label-container']}>
					<div className='absolute -left-36 top-20'>
						<Image alt='illustration' draggable={false} src={iconBackLogo} />
					</div>
					<div className='absolute -right-24 -top-28'>
						<Image alt='illustration' draggable={false} src={iconBackLogo} width={160} />
					</div>
					<div className='mx-auto flex max-w-[500px] flex-col gap-2'>
						<div>Дата начала: 01.04.2022</div>
						<div className='text-4xl font-medium'>{data?.name}</div>
						<div className='text-2xl'>от {data?.price} ₽</div>
						<ul className='mt-6 flex justify-between'>
							<li className='flex items-center gap-2'>
								<Image width={24} alt='clock' draggable={false} src={iconAntClock} />
								<span>{data?.hoursInWeek}ч/нед</span>
							</li>
							<li className='flex items-center gap-2'>
								<Image width={24} alt='clock' draggable={false} src={iconAntCalendar} />
								<span>{data?.courseDurationMonth} месяцев</span>
							</li>
							<li className='flex items-center gap-2'>
								<Image width={24} alt='clock' draggable={false} src={iconAntDesktop} />
								<span>{data?.isOnline ? 'Online' : 'Offline'}</span>
							</li>
						</ul>
					</div>
				</div>
				<NoSSR>{user && <SubscriptionButton courseId={courseId} />}</NoSSR>
				<div className='my-6 text-[#828282]'>Описание</div>
				<p className='text-justify'>{data?.desc}</p>
				<div className='my-2 flex flex-col gap-2'>
					<Accordion
						contents={[
							{
								email: 'bashlovka96@mail.ru',
								title: 'Башловка Руслан Борисович'
							},
							{
								email: 'andreyMali@mail.ru',
								title: 'Андрей Бережков Вячеславович'
							},
							{
								email: 'sluxoi23@mail.ru',
								title: 'Чапраков Андрей Борисович'
							}
						]}
						title='Преподаватели'
					/>
				</div>
			</WrapperContent>
		</Meta>
	);
};
