import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import BackgroundImageItem from '@/assets/icon/background-item.svg';
import Arrow from '@/assets/image/arrow-direction.svg';

import styles from './Direction.module.scss';

const DirectionItem: FC = () => (
	<div className={styles.directionItem}>
		<h1>
			<span>WorldSkills</span> Exam
		</h1>
		<p>Индивидуальные консультации и обучение от экспертов WorldSkills.</p>
		<Link href='/courses'>
			<div className='absolute bottom-6 cursor-pointer'>
				<Image alt='arrow' src={Arrow} />
			</div>
		</Link>
		<div className='absolute -bottom-[6px] right-[4px]'>
			<Image alt='arrow' src={BackgroundImageItem} width={150} />
		</div>
	</div>
);

export default DirectionItem;
