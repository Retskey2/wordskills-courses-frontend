import { FC } from 'react'

import Heading from '@/components/ui/Heading/Heading'
import SubHeading from '@/components/ui/Heading/SubHeading'
import ContactFormTeachers from '@/components/ui/Form/ContactFormTeachers/ContactFormTeachers'
import HeadingBlock from '@/components/ui/Heading/HeadingBlock'
import TeachersBlock from '@/components/ui/Block/TeachersBlock'
import TeachersPhoto from '@/assets/image/expert-photo.png'
import TeachersBlockGrid from '@/components/ui/Block/TeachersBlockGrid'
import TextOnImage from '@/components/ui/Block/TextOnImage'
import TeachersTeamPhoto from '@/assets/image/teachers-team-bg.png'
import cn from "classnames"

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
			<TeachersBlockGrid
				Blocks={[
					{
						ID: 1,
						FIO: 'Иванов Евгений Витальевич',
						RoleName: 'Руководитель проекта',
						Photo: TeachersPhoto
					},
					{
						ID: 2,
						FIO: 'Иванов Евгений Витальевич',
						RoleName: 'Руководитель проекта',
						Photo: TeachersPhoto
					},
					{
						ID: 3,
						FIO: 'Иванов Евгений Витальевич',
						RoleName: 'Руководитель проекта',
						Photo: TeachersPhoto
					},
					{
						ID: 4,
						FIO: 'Иванов Евгений Витальевич',
						RoleName: 'Руководитель проекта',
						Photo: TeachersPhoto
					},
					{
						ID: 5,
						FIO: 'Иванов Евгений Витальевич',
						RoleName: 'Руководитель проекта',
						Photo: TeachersPhoto
					},
					{
						ID: 6,
						FIO: 'Иванов Евгений Витальевич',
						RoleName: 'Руководитель проекта',
						Photo: TeachersPhoto
					},
					{
						ID: 7,
						FIO: 'Иванов Евгений Витальевич',
						RoleName: 'Руководитель проекта',
						Photo: TeachersPhoto
					},
					{
						ID: 8,
						FIO: 'Иванов Евгений Витальевич',
						RoleName: 'Руководитель проекта',
						Photo: TeachersPhoto
					},
				]}
			></TeachersBlockGrid>

			<TextOnImage header='Хотите присоединиться к команде?' text="Заполняйте заявку и мы с вами свяжемся!" photo={TeachersTeamPhoto}></TextOnImage>
			<Heading title='Заявка для экспертов' className={cn('w-full', 'text-center', 'mt-6')}></Heading>
			<div className={cn('w-full', 'flex', 'items-center', 'flex-col', 'mb-4')}>
				<p className={cn('text-2xl', 'text-center', 'max-w-[687px]')}>Заполните форму ниже. Мы вам ответим или перезвоним в течение 24 часов!</p>
			</div>

			<ContactFormTeachers></ContactFormTeachers>


		</div>
	)
}

export default Teachers
