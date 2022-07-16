import { StaticImageData } from 'next/image'
import Image from 'next/image'
import { FC } from 'react'

import styles from './ItemHorizontal.module.scss'

interface IItemHorizontal {
	image: StaticImageData
	title?: string
	description?: string
}

const ItemHorizontal: FC<IItemHorizontal> = ({ image }) => {
	return (
		<div className={styles.itemHorizontal}>
			<Image objectFit="cover" height={1000} src={image} alt="promo" />
			<section>
				<h2>Национальная сборная</h2>
				<p>
					Национальная сборная WorldSkills Russia – носитель лучших технологий
					подготовки ...
				</p>
			</section>
		</div>
	)
}

export default ItemHorizontal
