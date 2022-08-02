import { FC } from 'react'

import Heading from '@/components/ui/Heading/Heading'
import SubHeading from '@/components/ui/Heading/SubHeading'


import CardProject from '../../ui/CardProject/CardProject'

import { ProjectContent } from './projects.data'

const Projects: FC = () => {
	return (
		<>
			<div className="w-full max-w-[1260px] m-auto mt-12 mb-10">
				<Heading title="ПРОЕКТЫ" small />
				<SubHeading className="mb-16">
					Помогаем раскрыть талант всем и каждому!
				</SubHeading>
				{/* <CardProject /> */}
			</div>
			<CardProject project={ProjectContent} />
		</>
	)
}

export default Projects
