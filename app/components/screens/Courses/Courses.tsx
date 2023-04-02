import cn from 'classnames';
import { FC } from 'react';
import { Meta } from 'utills/meta/Meta';

import { WrapperContent } from '@/components/layout/WrapperContent';
import Heading from '@/components/ui/Heading/Heading';

import SubHeading from '../../ui/Heading/SubHeading';

const Courses: FC = () => (
	<Meta title='Курсы'>
		<WrapperContent>
			<Heading small title='КУРСЫ' />
			<SubHeading>Выбери то, что тебе по вкусу!</SubHeading>
			<div className={cn('m-16')} />
		</WrapperContent>
	</Meta>
);

export default Courses;
