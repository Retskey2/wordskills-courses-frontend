import Image from 'next/image';
import { FC } from 'react';

import Education from '@/assets/image/education.svg';

import styles from './PriorityItem.module.scss';

const PriorityItemLeft: FC = () => (
	<div className={styles.containerPriority}>
		<div className='relative h-56 w-56'>
			<div className='absolute z-1 flex h-44 w-44 items-center justify-center rounded-xl bg-blue-600'>
				<Image alt='image' draggable={false} src={Education} />
			</div>
			<div className='absolute bottom-0 right-0 z-0 h-32 w-32 border border-blue-600' />
		</div>
		<div className='ml-10'>
			<h1>Качественное образование </h1>
			<p>
				Мы гарантируем высокий уровень подготовки, соответсвующий требования рынка труда как в
				России, так и за рубежом
			</p>
		</div>
	</div>
);

export default PriorityItemLeft;
