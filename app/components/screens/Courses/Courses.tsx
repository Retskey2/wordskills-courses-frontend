import { FC } from 'react'

import Heading from '@/components/ui/Heading/Heading'

import SubHeading from '../../ui/Heading/SubHeading'
import cn from 'classnames'
import styles from './Courses.module.scss'
import SearchBar from '@/components/ui/Search/SearchBar'
import Filter from '@/components/ui/Search/Filter'

const Courses: FC = () => {
	return (
		<div className="w-full max-w-[1260px] m-auto mt-12 mb-16">
			<Heading title="КУРСЫ" small />
			<SubHeading>Выбери то, что тебе по вкусу!</SubHeading>
			<div className={cn('m-16')}></div>
			<SearchBar placeholder='Поиск' filtersArray={[{
				isVisible: false,
				name: 'Junior'
			},
			{
				isVisible: false,
				name: 'Middle'
			},
			{
				isVisible: false,
				name: 'Senior'
			},

			]}></SearchBar>

		</div>
	)
}

export default Courses
