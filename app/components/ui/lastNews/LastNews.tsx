import Image from 'next/image'
import React, { FC } from 'react'

import Promo from '@/assets/image/PromoData.png'
import navigator from '@/assets/image/navigator-icon.svg'

import ItemVertical from './ItemVertical/ItemVertical'
import styles from './LastNews.module.scss'

interface NewsProps {
	variant: 'vertical' | 'horizontal'
}

let dataNews = [
	{
		id: 1,
		image: Promo,
	},
	{
		id: 2,
		image: Promo,
	},
]

export const LastNews: FC<NewsProps> = (variant) => {
	return (
		<div className="w-full bg-gray-200 pt-12 pb-24">
			<div className={styles.last_news}>
				<div>
					<Image src={navigator} alt="navigator" />
					<span>Последние события</span>
				</div>
				<div>
					{dataNews.map((data) => (
						<ItemVertical key={data.id} image={data.image} />
					))}
				</div>
				<div className="flex justify-end mt-20">Посмотреть все</div>
			</div>
		</div>
	)
}
