import { FC } from 'react';

import PriorityItem from './PriorityItem/PriorityItem';

const CardPriority: FC = () => (
	<div className='flex flex-col items-center justify-center'>
		<PriorityItem />
		<PriorityItem right />
		<PriorityItem />
	</div>
);

export default CardPriority;
