import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import Button from '../Button/Button';

import styles from './BlockNews.module.scss';

interface INewsBlock {
	id: number;
	image: string;
	title?: string;
	description?: string;
	isLoading?: boolean;
}

export const BlockNewsItem: FC<INewsBlock> = ({ id, image, description, isLoading, title }) => {
	return (
		<div className={styles['news-container-item']}>
			<Image alt='promo' width={700} height={300} objectFit='cover' src={`/${image}`} />
			<div className={styles['info-block']}>
				<h1 className='line-clamp-1'>{title}</h1>
				<p className='line-clamp-3'>{description}</p>
				<Button className='mx-auto' variant='white'>
					<Link href={`news/${id}`}>Смотреть</Link>
				</Button>
			</div>
		</div>
	);
};
