import { FC } from 'react'

import Heading from '@/components/ui/Heading/Heading'
import SubHeading from '@/components/ui/Heading/SubHeading'

const Teachers: FC = () => {
	return (
		<div className="w-full max-w-[1260px] m-auto mt-12 mb-16">
			<Heading title="КОМАНДА И ПРЕПОДАВАТЕЛИ" small />
			<SubHeading>У нас работают лучшие эксперты в своей области</SubHeading>
		</div>
	)
}

export default Teachers
