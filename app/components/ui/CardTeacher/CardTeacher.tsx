import { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import StarRating from 'react-star-rating-component'

import styles from './CardTeacher.module.scss'

interface ICardTeacher {
	image: StaticImageData
}

const CardTeacher: FC<ICardTeacher> = ({ image }) => {
	return (
		<div className={styles.cardTeacher}>
			<Image
				objectFit="cover"
				width={200}
				height={230}
				src={image}
				alt="Photo"
			/>
			<div>
				<div>Алла Борисовна</div>
				<div className={styles.old}>27 лет</div>
				<div className={styles.star}>
					<StarRating name="star-rating" value={5} emptyStarColor="#4f4f4f" />
				</div>
				<p>
					Мне очень понравилось обучение здесь! Самые лучшие преподаватели!
					Всегда помогут, подскажут, дадут обратную связь. Училась и в других
					школах, но могу с уверенностью сказать, что...
				</p>
				<Link href="/">
					<a>Смотреть полностью</a>
				</Link>
			</div>
		</div>
	)
}

export default CardTeacher
