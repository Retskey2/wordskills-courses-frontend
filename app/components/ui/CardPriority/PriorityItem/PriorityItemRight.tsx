import Image from 'next/image'
import { FC } from 'react'

import Education from '@/assets/image/education.svg'

import styles from './PriorityItem.module.scss'

const PriorityItemRight: FC = () => {
	return (
		<div className={styles.containerPriority}>
			<div>
				<h1>Качественное образование </h1>
				<p>
					Мы гарантируем высокий уровень подготовки, соответсвующий требования
					рынка труда как в России, так и за рубежом
				</p>
			</div>
			<div className="ml-10 relative h-56 w-56">
				<div className="rounded-xl bg-blue-600 w-44 h-44 absolute flex items-center justify-center z-1">
					<Image draggable={false} src={Education} alt="image" />
				</div>
				<div className="border border-blue-600 w-32 h-32 absolute bottom-0 right-0 z-0" />
			</div>
		</div>
	)
}

export default PriorityItemRight
