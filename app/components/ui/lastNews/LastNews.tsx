import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import Heading from '@/components/ui/Heading/Heading'

import arrow from '@/assets/image/arrow-show.svg'
import navigator from '@/assets/image/navigator-icon.svg'
import NewsHorizontal from '@/assets/image/news-horizontal.jpg'
import NewsVertical from '@/assets/image/news-vertical.png'

import ItemHorizontal from './ItemHorizontal/ItemHorizontal'
import ItemVertical from './ItemVertical/ItemVertical'
import styles from './LastNews.module.scss'

interface NewsProps {
	horizontal?: boolean
}

let dataNewsVertical = [
	{
		id: 1,
		image: NewsVertical,
	},
	{
		id: 2,
		image: NewsVertical,
	},
]

let dataWNewsHorizontal = [
	{
		id: 1,
		image: NewsHorizontal,
	},
	{
		id: 2,
		image: NewsHorizontal,
	},
]

const LastNews: FC<NewsProps> = ({ horizontal }) => {
	return (
		<div className={styles.newsBlock}>
			<section>
				<div className={styles.article}>
					<Image src={navigator} alt="navigator" />
					<Heading title="Последние события" className="ml-2" />
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
					<Link href="/">
						<a>
							<span>Посмотреть все</span>
							<Image src={arrow} alt="arrow" />
						</a>
					</Link>
				</div>
			</section>
		</div>
	)
}
export default LastNews
