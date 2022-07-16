import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

import Button from '../../Button/Button'

import styles from './ItemVertical.module.scss'

interface IItemVertical {
	image: StaticImageData
	date?: Date
	title?: string
	description?: string
}

const ItemVertical: FC<IItemVertical> = ({
	image,
	date,
	title,
	description,
}) => {
	return (
		<div className={styles.itemVertical}>
			<Image width={350} height={295} src={image} alt={title} />
			<section>
				<div className={styles.content}>
					<div>23.12.2022</div>
					<div>09:00</div>
				</div>
				<h2>Анализ датасета</h2>
				<p>Бесплатный онлайн-урок по разработке telegram-бота на python</p>
				<Button>Присоединиться</Button>
			</section>
		</div>
	)
}

export default ItemVertical
