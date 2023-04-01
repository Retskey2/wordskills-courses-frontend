import cn from 'classnames';
import { FC } from 'react';

interface IHeading {
	title: string;
	small?: boolean;
	center?: boolean;
	className?: string;
}

const Heading: FC<IHeading> = ({ title, small, center, className }) => (
	<div
		className={cn(
			small ? 'text-xl font-medium' : 'text-[40px] font-semibold',
			center ? 'text-center' : 'text-left',
			'text-blue-600',
			className
		)}
	>
		{title}
	</div>
);

export default Heading;
