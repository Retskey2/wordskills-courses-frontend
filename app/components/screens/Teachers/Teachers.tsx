import { FC } from 'react'

import Heading from '@/components/ui/Heading/Heading'
import SubHeading from '@/components/ui/Heading/SubHeading'
import ContactFormTeachers from '@/components/ui/Form/ContactFormTeachers/ContactFormTeachers'
import HeadingBlock from '@/components/ui/Heading/HeadingBlock'
import TeachersBlock from '@/components/ui/Block/TeachersBlock'
import TeachersPhoto from '@/assets/image/expert-photo.png'
import TeachersBlockGrid from '@/components/ui/Block/TeachersBlockGrid'

const Teachers: FC = () => {
	return (
		<div className="w-full max-w-[1260px] m-auto mt-12 mb-16">
			<Heading title="КОМАНДА И ПРЕПОДАВАТЕЛИ" small />
			<SubHeading>У нас работают лучшие эксперты в своей области</SubHeading>

			<HeadingBlock content="главные эксперты" className='mt-16'></HeadingBlock>
			<TeachersBlock
				FIO='Иванов Евгений Витальевич'
				RoleName='Руководитель проекта'
				Email='kaspin.dmitrii@mail.ru'
				Photo={TeachersPhoto}
				Aligment='Left'
			/>
			<TeachersBlock
				FIO='Иванов Евгений Витальевич'
				RoleName='Руководитель проекта'
				Email='kaspin.dmitrii@mail.ru'
				Photo={TeachersPhoto}
				Aligment='Right'
			/>
			<TeachersBlock
				FIO='Иванов Евгений Витальевич'
				RoleName='Руководитель проекта'
				Email='kaspin.dmitrii@mail.ru'
				Photo={TeachersPhoto}
				Aligment='Left'
			/>


			<HeadingBlock content="Ведущие эксперты" className='mt-16'></HeadingBlock>

			<ContactFormTeachers></ContactFormTeachers>


		</div>
	)
}

export default Teachers
