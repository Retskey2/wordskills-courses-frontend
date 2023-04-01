import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

import styles from './ItemHorizontal.module.scss';

interface IItemHorizontal {
	image: StaticImageData;
	title?: string;
	description?: string;
}

const ItemHorizontal: FC<IItemHorizontal> = ({ image, description, title }) => (
	<div className={styles.itemHorizontal}>
		<Image alt='promo' height={1000} objectFit='cover' src={image} />
		<section>
			<h2>{title}</h2>
			<p>{description}</p>
		</section>
	</div>
);

export default ItemHorizontal;
