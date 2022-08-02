import { FC } from 'react'

import PriorityItem from './PriorityItem/PriorityItem'

const CardPriority: FC = () => {
	return (
		<div className="flex flex-col justify-center items-center">
			<PriorityItem />
			<PriorityItem right />
			<PriorityItem />
		</div>
	)
}

export default CardPriority
