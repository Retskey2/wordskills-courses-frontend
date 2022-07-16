import { FC } from 'react'

import Heading from '@/components/ui/Heading/Heading'
import SubHeading from '@/components/ui/Heading/SubHeading'

const Projects: FC = () => {
	return (
		<div className="w-full max-w-[1260px] m-auto mt-12 mb-16">
			<Heading title="Проекты" small />
			<SubHeading>Помогаем раскрыть талант всем и каждому!</SubHeading>
		</div>
	)
}

export default Projects
