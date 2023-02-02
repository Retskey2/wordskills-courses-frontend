import cn from 'classnames'
import { FC } from 'react'
import { Meta } from 'utills/meta/Meta'

import { WrapperContent } from '@/components/layout/WrapperContent'
import Heading from '@/components/ui/Heading/Heading'
import SearchBar from '@/components/ui/Search/SearchBar'

import SubHeading from '../../ui/Heading/SubHeading'

const Courses: FC = () => {
	return (
		<Meta title="Курсы">
			<WrapperContent>
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
			</WrapperContent>
		</Meta>
	)
}

export default Courses
