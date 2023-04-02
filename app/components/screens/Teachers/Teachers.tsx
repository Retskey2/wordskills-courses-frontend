import { FC } from 'react';
import { Meta } from 'utills/meta/Meta';

import TeachersTeamPhoto from '@/assets/image/teachers-team-bg.png';
import { WrapperContent } from '@/components/layout/WrapperContent';
import { TeacherGrid } from '@/components/ui/BlockTeacher/TeacherGrid/TeacherGrid';
import { TeacherList } from '@/components/ui/BlockTeacher/TeacherList/TeacherList';
import TextOnImage from '@/components/ui/BlockTeacher/TextOnImage';
import Heading from '@/components/ui/Heading/Heading';
import HeadingBlock from '@/components/ui/Heading/HeadingBlock';
import SubHeading from '@/components/ui/Heading/SubHeading';
import ContactFormTeachers from '@/components/ui/forms/ContactFormTeachers/ContactFormTeachers';


import { DataTeachers } from './teachers.data';

const Teachers: FC = () => (
	<Meta title='Преподаватели'>
		<WrapperContent>
			<Heading small title='КОМАНДА И ПРЕПОДАВАТЕЛИ' />
			<SubHeading>У нас работают лучшие эксперты в своей области</SubHeading>

			<HeadingBlock className='mt-16' content='главные эксперты' />
			<TeacherList items={DataTeachers} />

			<HeadingBlock className='mt-16' content='Ведущие эксперты' />
			<TeacherGrid items={DataTeachers} />

			<TextOnImage
				header='Хотите присоединиться к команде?'
				photo={TeachersTeamPhoto}
				text='Заполняйте заявку и мы с вами свяжемся!'
			/>
			<Heading className='mt-6 w-full text-center' title='Заявка для экспертов' />
			<div className='mb-4 flex w-full flex-col items-center'>
				<p className='max-w-[687px] text-center text-2xl'>
					Заполните форму ниже. Мы вам ответим или перезвоним в течение 24 часов!
				</p>
			</div>
			<ContactFormTeachers />
		</WrapperContent>
	</Meta>
);

export default Teachers;
