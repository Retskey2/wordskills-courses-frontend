import cn from 'classnames'
import { FC } from 'react'
import { Meta } from 'utills/meta/Meta'

import { WrapperContent } from '@/components/layout/WrapperContent'
import { TeacherGrid } from '@/components/ui/BlockTeacher/TeacherGrid/TeacherGrid'
import { TeacherList } from '@/components/ui/BlockTeacher/TeacherList/TeacherList'
import TextOnImage from '@/components/ui/BlockTeacher/TextOnImage'
import ContactFormTeachers from '@/components/ui/Form/ContactFormTeachers/ContactFormTeachers'
import Heading from '@/components/ui/Heading/Heading'
import HeadingBlock from '@/components/ui/Heading/HeadingBlock'
import SubHeading from '@/components/ui/Heading/SubHeading'

import TeachersTeamPhoto from '@/assets/image/teachers-team-bg.png'

import { DataTeachers } from './teachers.data'

const Teachers: FC = () => {
	return (
		<Meta title="Преподаватели">
			<WrapperContent>
				<Heading title="КОМАНДА И ПРЕПОДАВАТЕЛИ" small />
				<SubHeading>У нас работают лучшие эксперты в своей области</SubHeading>

				<HeadingBlock content="главные эксперты" className="mt-16" />
				<TeacherList items={DataTeachers} />

				<HeadingBlock content="Ведущие эксперты" className="mt-16" />
				<TeacherGrid items={DataTeachers} />

				<TextOnImage
					header="Хотите присоединиться к команде?"
					text="Заполняйте заявку и мы с вами свяжемся!"
					photo={TeachersTeamPhoto}
				/>
				<Heading
					title="Заявка для экспертов"
					className="w-full text-center mt-6"
				/>
				<div className="w-full flex items-center flex-col mb-4">
					<p className="text-2xl text-center max-w-[687px]">
						Заполните форму ниже. Мы вам ответим или перезвоним в течение 24
						часов!
					</p>
				</div>
				<ContactFormTeachers />
			</WrapperContent>
		</Meta>
	)
}

export default Teachers
