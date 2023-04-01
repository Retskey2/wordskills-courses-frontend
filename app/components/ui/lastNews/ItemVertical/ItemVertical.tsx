import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

import Button from '../../Button/Button';

import styles from './ItemVertical.module.scss';

interface IItemVertical {
	image: StaticImageData;

	title?: string;
	description?: string;
}

const ItemVertical: FC<IItemVertical> = ({ image, title, description }) => (
	<div className={styles.itemVertical}>
		<Image alt={title} height={295} src={image} width={350} />
		<section>
			<div className={styles.content}>
				<div>23.12.2022</div>
				<div>09:00</div>
			</div>
			<h2>Анализ датасета</h2>
			<p>{description}</p>
			<Button>Присоединиться</Button>
		</section>
	</div>
);

export default ItemVertical;
