import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Arrow from '@/assets/image/arrow-direction.svg'

import styles from './Direction.module.scss'

const DirectionItem: FC = () => {
	return (
		<div className={styles.directionItem}>
			<h1>
				<span>WorldSkills</span> Exam
			</h1>
			<p>Индивидуальные консультации и обучение от экспертов WorldSkills.</p>
			<Link href="/">
				<a className="">
					<Image src={Arrow} alt="arrow"></Image>
				</a>
			</Link>
		</div>
	)
}

export default DirectionItem
