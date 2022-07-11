import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

import Button from '../../Button/Button'

interface ItemProps {
	image: StaticImageData
	date?: Date
	title?: string
	description?: string
}

const ItemVertical: FC<ItemProps> = ({ image, date, title, description }) => {
	return (
		<div className="flex mt-4 bg-white">
			<Image width={350} height={295} src={image} alt={title} />
			<div className="flex flex-col px-12 py-10 w-full">
				<div className="flex justify-between">
					<div>23.12.2022</div>
					<div>09:00</div>
				</div>
				<h2>Анализ датасета</h2>
				<p>Бесплатный онлайн-урок по разработке telegram-бота на python</p>
				<Button>Присоединиться</Button>
			</div>
		</div>
	)
}

export default ItemVertical
