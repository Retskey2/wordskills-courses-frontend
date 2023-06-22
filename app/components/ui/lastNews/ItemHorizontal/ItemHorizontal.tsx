import { Skeleton } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './ItemHorizontal.module.scss';

interface IItemHorizontal {
	id: number;
	image: string;
	title?: string;
	description?: string;
	isLoading?: boolean;
}

const ItemHorizontal: FC<IItemHorizontal> = ({ image, description, title, id, isLoading }) => {
	console.log(isLoading);
	return (
		<Link href={`news/${id}`}>
			<div className={styles.itemHorizontal}>
				{id ? (
					<Image alt='promo' width={700} height={300} objectFit='cover' src={`/${image}`} />
				) : (
					<Skeleton width={700} height={300} className='p-0 my-0' />
				)}
				<section>
					{id ? (
						<div>
							<h2 className='line-clamp-1'>{title}</h2>
							<p className='line-clamp-3'>{description}</p>
						</div>
					) : (
						<div>
							<Skeleton className='w-full' height={30} />
							<Skeleton className='w-full' height={30} />
							<Skeleton className='w-full' height={30} />
						</div>
					)}
				</section>
			</div>
		</Link>
	);
};

export default ItemHorizontal;
