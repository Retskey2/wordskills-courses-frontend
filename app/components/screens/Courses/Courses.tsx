import cn from 'classnames'
import { useRouter } from 'next/router'
import { FC } from 'react'

import Heading from '@/components/ui/Heading/Heading'
import Filter from '@/components/ui/Search/Filter'
import SearchBar from '@/components/ui/Search/SearchBar'

import SubHeading from '../../ui/Heading/SubHeading'

import styles from './Courses.module.scss'

const Courses: FC = () => {
	return (
		<div className="w-full max-w-[1260px] m-auto mt-12 mb-16">
			<Heading title="КУРСЫ" small />
			<SubHeading>Выбери то, что тебе по вкусу!</SubHeading>
			<div className={cn('m-16')}></div>
			<SearchBar
				placeholder="Поиск"
				filtersArray={[
					{
						isVisible: false,
						name: 'Junior',
					},
					{
						isVisible: false,
						name: 'Middle',
					},
					{
						isVisible: false,
						name: 'Senior',
					},
				]}
			></SearchBar>
		</div>
	)
}

export default Courses
