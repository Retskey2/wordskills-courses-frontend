import { FC } from 'react'

import PriorityItemLeft from './PriorityItemLeft'
import PriorityItemRight from './PriorityItemRight'

interface IPriorityItem {
	right?: boolean
}

const PriorityItem: FC<IPriorityItem> = ({ right }) => {
	return (
		<div className="flex items-center mt-20">
			{right ? <PriorityItemRight /> : <PriorityItemLeft />}
		</div>
	)
}

export default PriorityItem
