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
		</WrapperContent>
		<CardProject project={ProjectContent} />
	</Meta>
);

export default Projects;
