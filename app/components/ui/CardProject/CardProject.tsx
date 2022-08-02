import Image from 'next/image'
import { FC } from 'react'

import { IProject } from '../../screens/Projects/projects.interface'

import styles from './CardProject.module.scss'
import ProjectItemLeft from './ProjectItem/ProjectItemLeft/ProjectItemLeft'
import ProjectItemRight from './ProjectItem/ProjectItemRight/ProjectItemRight'

const CardProject: FC<{ project: IProject }> = ({ project: { items } }) => {
	return (
		<>
			{items.map((item, index) =>
				index % 2 == 0 ? (
					<ProjectItemLeft key={item.id} item={item} />
				) : (
					<ProjectItemRight key={item.id} item={item} />
				)
			)}
		</>
	)
}

export default CardProject
