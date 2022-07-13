import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

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
		<div className="w-full bg-gray-200 pt-12 pb-24">
			<div className="m-auto max-w-[1260px]">
				<div className="mb-10">
					<Image src={navigator} alt="navigator" />
					<span className="ml-2 text-blue-600 font-semibold text-[40px]">
						Последние события
					</span>
				</div>
				{horizontal ? (
					<div className="flex justify-between gap-4">
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
				<div className="flex justify-end mt-12 items-center">
					<Link href="/">
						<a>
							<span className="text-blue-600 font-medium mr-5 text-2xl">
								Посмотреть все
							</span>
							<Image src={arrow} alt="arrow" />
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}
export default LastNews
