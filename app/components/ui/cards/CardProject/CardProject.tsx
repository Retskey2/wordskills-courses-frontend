import { FC } from 'react';

import { IProject } from '@/utills/typescript/interfaces/project.interface';

import ProjectItemLeft from './ProjectItem/ProjectItemLeft/ProjectItemLeft';
import ProjectItemRight from './ProjectItem/ProjectItemRight/ProjectItemRight';

const CardProject: FC<{ project: IProject }> = ({ project: { items } }) => (
	<>
		{items.map((item, index) =>
			index % 2 === 0 ? (
				<ProjectItemLeft key={item.id} item={item} />
			) : (
				<ProjectItemRight key={item.id} item={item} />
			)
		)}
	</>
);

export default CardProject;
