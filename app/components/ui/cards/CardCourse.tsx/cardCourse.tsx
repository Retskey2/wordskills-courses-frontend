import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { ICourse } from '@/utills/typescript/interfaces/course.interface';

import styles from './cardCourse.module.scss';

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
				<li>{hoursInWeek}ч/нед</li>
				<li>{courseDurationMonth}ч/нед</li>
				<li>{isOnline && 'Online'}</li>
			</ul>
		</div>
	</Link>
);
