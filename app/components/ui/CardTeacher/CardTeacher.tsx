import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import StarRating from 'react-star-rating-component';

import styles from './CardTeacher.module.scss';

interface ICardTeacher {
	image: StaticImageData;
}

const CardTeacher: FC<ICardTeacher> = ({ image }) => (
	<div className={styles.cardTeacher}>
		<Image alt='Photo' height={230} objectFit='cover' src={image} width={200} />
		<div>
			<div>Алла Борисовна</div>
			<div className={styles.old}>27 лет</div>
			<div className={styles.star}>
				<StarRating emptyStarColor='#4f4f4f' name='star-rating' value={5} />
			</div>
			<p>
				Мне очень понравилось обучение здесь! Самые лучшие преподаватели! Всегда помогут, подскажут,
				дадут обратную связь. Училась и в других школах, но могу с уверенностью сказать, что...
			</p>
			<Link href='/'>Смотреть полностью</Link>
		</div>
	</div>
);

export default CardTeacher;
