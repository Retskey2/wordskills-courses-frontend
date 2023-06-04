import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';


import arrow from '@/assets/image/arrow-show.svg';
import navigator from '@/assets/image/navigator-icon.svg';
import NewsHorizontal from '@/assets/image/news-horizontal.jpg';
import NewsVertical from '@/assets/image/news-vertical.png';
import Heading from '@/components/ui/Heading/Heading';

import ItemHorizontal from './ItemHorizontal/ItemHorizontal';
import ItemVertical from './ItemVertical/ItemVertical';
import styles from './LastNews.module.scss';

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

const dataWNewsHorizontal = [
	{
		id: 1,
		image: NewsHorizontal
	},
	{
		id: 2,
		image: NewsHorizontal
	}
];

const LastNews: FC<NewsProps> = ({ horizontal }) => (
	<div className={styles.newsBlock}>
		<section>
			<div className={styles.article}>
				<Image alt='navigator' src={navigator} />
				<Heading className='ml-2' title='Последние события' />
			</div>
			{horizontal ? (
				<div className={styles.item}>
					{dataWNewsHorizontal.map((data) => (
						<ItemHorizontal key={data.id} image={data.image} />
					))}
				</div>
			) : (
				<div>
					{dataNewsVertical.map((data) => (
						<ItemVertical key={data.id} image={data.image} />
					))}
				</div>
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
export default LastNews;
