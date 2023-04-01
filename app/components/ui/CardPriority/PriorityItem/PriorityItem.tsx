import { FC } from 'react';

import PriorityItemLeft from './PriorityItemLeft';
import PriorityItemRight from './PriorityItemRight';

interface IPriorityItem {
	right?: boolean;
}

const PriorityItem: FC<IPriorityItem> = ({ right }) => (
	<div className='mt-20 flex items-center'>
		{right ? <PriorityItemRight /> : <PriorityItemLeft />}
	</div>
);

export default PriorityItem;
