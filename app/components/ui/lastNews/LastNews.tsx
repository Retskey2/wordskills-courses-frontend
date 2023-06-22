import { Skeleton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import Heading from '@/components/ui/Heading/Heading';

import arrow from '@/assets/image/arrow-show.svg';
import navigator from '@/assets/image/navigator-icon.svg';
import NewsVertical from '@/assets/image/news-vertical.png';

import ItemHorizontal from './ItemHorizontal/ItemHorizontal';
import ItemVertical from './ItemVertical/ItemVertical';
import styles from './LastNews.module.scss';
import { usePosts } from './usePosts';

interface NewsProps {
	horizontal?: boolean;
}

const dataNewsVertical = [
	{
		id: 1,
		image: NewsVertical
	},
	{
		id: 2,
		image: NewsVertical
	}
];

const LastNews: FC<NewsProps> = ({ horizontal }) => {
	const { posts, isLoading } = usePosts();
	console.log(posts);
	return (
		<div className={styles.newsBlock}>
			<section>
				<div className={styles.article}>
					<Image alt='navigator' src={navigator} />
					<Heading className='ml-2' title='Последние события' />
				</div>
				{horizontal ? (
					<Link href='/courses'>
						<div className={styles.item}>
							{posts
								?.map((post) => (
									<ItemHorizontal
										isLoading={isLoading}
										key={post.id}
										id={post.id}
										image={post.imgSrc}
										description={post.body}
										title={post.title}
									/>
								))
								.slice(0, 2)}
						</div>
					</Link>
				) : (
					<Link href='/courses'>
						<div>
							{dataNewsVertical.map((data) => (
								<ItemVertical key={data.id} image={data.image} />
							))}
						</div>
					</Link>
				)}
				<div className={styles.viewAll}>
					<Link href='/news'>
						<div className='cursor-pointer'>
							<span>Посмотреть все</span>
							<Image alt='arrow' src={arrow} />
						</div>
					</Link>
				</div>
			</section>
		</div>
	);
};
export default LastNews;
