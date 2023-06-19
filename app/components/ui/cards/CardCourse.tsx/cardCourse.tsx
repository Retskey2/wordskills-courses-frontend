import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import iconAntCalendarBlue from '@/assets/icon/ant-calendar-blue.svg';
import iconAntClockBlue from '@/assets/icon/ant-clock-blue.svg';
import iconAntDesktopBlue from '@/assets/icon/ant-desktop-blue.svg';

import styles from './cardCourse.module.scss';
import { ICourse } from '@/utills/typescript/interfaces/course.interface';

interface ICardCourse {
	item: ICourse;
	className?: string;
}

export const CardCourse: React.FC<ICardCourse> = ({
	item: { courseDurationMonth, desc, hoursInWeek, isOnline, name, id },
	className
}) => (
	<Link href={`/courses/${id}`}>
		<div className={cn(className, styles['card-course-wrapper'])}>
			<Image alt='navigator' height={85} src='/icons/course-icon.svg' width={85} />
			<h2>{name}</h2>
			<span>Junior</span>
			<p>{desc}</p>
			<ul>
				<li>
					<Image width={16} alt='chalkboard' src={iconAntClockBlue} />
					<span>{hoursInWeek}ч/нед</span>
				</li>
				<li>
					<Image width={16} alt='chalkboard' src={iconAntCalendarBlue} />
					<span>{courseDurationMonth} месяцев</span>
				</li>
				<li>
					<Image width={16} alt='chalkboard' src={iconAntDesktopBlue} />
					<span>{isOnline ? 'Online' : 'Offline'}</span>
				</li>
			</ul>
		</div>
	</Link>
);
