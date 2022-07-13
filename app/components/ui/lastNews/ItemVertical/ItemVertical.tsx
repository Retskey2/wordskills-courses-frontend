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
				<div className="flex justify-between text-gray-500 mb-3">
					<div>23.12.2022</div>
					<div>09:00</div>
				</div>
				<h2 className="mb-3 font-medium text-2xl">Анализ датасета</h2>
				<p className="mb-8 text-gray-500 mb-3">
					Бесплатный онлайн-урок по разработке telegram-бота на python
				</p>
				<Button>Присоединиться</Button>
			</div>
		</div>
	)
}

export default ItemVertical
