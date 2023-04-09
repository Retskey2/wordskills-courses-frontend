import { FC } from 'react';
import { Meta } from 'utills/meta/Meta';

import { WrapperContent } from '@/components/layout/WrapperContent';
import Heading from '@/components/ui/Heading/Heading';
import SubHeading from '@/components/ui/Heading/SubHeading';
import CardProject from '@/components/ui/cards/CardProject/CardProject';
import { ProjectContent } from '@/utills/data/projects.data';

const Projects: FC = () => (
	<Meta title='Проекты'>
		<WrapperContent>
			<Heading small title='ПРОЕКТЫ' />
			<SubHeading className='mb-16'>Помогаем раскрыть талант всем и каждому!</SubHeading>
			{/* <CardProject /> */}
		</WrapperContent>
		<CardProject project={ProjectContent} />

		<div className='mt-20 flex flex-col items-center justify-center'>
			<Heading title='Ведущие эксперты WorldSkills' />
			<p className=' text-2xl text-gray-500'>
				У нас учат лучшие преподаватели и ведущие эксперты WorldSkills Russia
			</p>
		</div>
	</Meta>
);

export default Projects;
