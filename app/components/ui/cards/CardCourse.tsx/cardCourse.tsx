import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { ICardCourseItem } from '@/utills/typescript/interfaces/courseItem.interface';

import styles from './cardCourse.module.scss';

interface ICardCourse {
	item: ICardCourseItem;
	className?: string;
}

export const CardCourse: React.FC<ICardCourse> = ({
	item: { category, description, timeDuration, timeWeek, title, type },
	className
}) => (
	<Link href='/'>
		<div className={cn(className, styles['card-course-wrapper'])}>
			<Image alt='navigator' height={85} src='/icons/course-icon.svg' width={85} />
			<h2>{title}</h2>
			<span>{category}</span>
			<p>{description}</p>
			<ul>
				<li>{timeWeek}ч/нед</li>
				<li>{timeDuration}ч/нед</li>
				<li>{type}</li>
			</ul>
		</div>
	</Link>
);
