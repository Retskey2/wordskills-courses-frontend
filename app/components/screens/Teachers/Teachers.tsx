import { FC } from 'react'

import Heading from '@/components/ui/Heading/Heading'
import SubHeading from '@/components/ui/Heading/SubHeading'
import ContactFormTeachers from '@/components/ui/Form/ContactFormTeachers/ContactFormTeachers'
import HeadingBlock from '@/components/ui/Heading/HeadingBlock'

const Teachers: FC = () => {
	return (
		<div className="w-full max-w-[1260px] m-auto mt-12 mb-16">
			<Heading title="КОМАНДА И ПРЕПОДАВАТЕЛИ" small />
			<SubHeading>У нас работают лучшие эксперты в своей области</SubHeading>

			<HeadingBlock content="главные эксперты" className='m-16'></HeadingBlock>
			<HeadingBlock content="Ведущие эксперты" className='m-16'></HeadingBlock>
			<ContactFormTeachers></ContactFormTeachers>


		</div>
	)
}

export default Teachers
