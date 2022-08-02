import { FC } from 'react'

import Heading from '@/components/ui/Heading/Heading'

import SubHeading from '../../ui/Heading/SubHeading'

import styles from './Courses.module.scss'

const Courses: FC = () => {
	return (
		<div className="w-full max-w-[1260px] m-auto mt-12 mb-16">
			<Heading title="КУРСЫ" small />
			<SubHeading>Выбери то, что тебе по вкусу!</SubHeading>
		</div>
	)
}

export default Courses
