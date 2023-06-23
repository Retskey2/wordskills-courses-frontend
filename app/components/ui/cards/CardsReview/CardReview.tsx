import Rating from '@mui/material/Rating';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import styles from './CardReview.module.scss';
import { IInterviewItem } from '@/utills/typescript/interfaces/reviewItem.interface';

interface ICardReview {
	item: IInterviewItem;
	className?: string;
}

const CardReview: React.FC<ICardReview> = ({
	item: { client, description, image, score },
	className
}) => (
	<Link href='/'>
		<div className={cn(className, styles['card-review-wrapper'])}>
			<Image alt='photo' objectFit='cover' height={340} src={image} width={300} />

			<div className={styles['card-content']}>
				<div className={styles['card-client']}>
					<span>{client.name}</span>
					<small>{client.age}</small>
				</div>
				<Rating readOnly name='simple-controlled' value={score} />
				<p>{description}</p>
			</div>
		</div>
	</Link>
);

export default CardReview;
