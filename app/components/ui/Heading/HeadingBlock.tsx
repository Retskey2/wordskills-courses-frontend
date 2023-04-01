import cn from 'classnames';
import { FC } from 'react';

interface IHeadingBlock {
	content: string;
	className?: string;
}

const HeadingBlock: FC<IHeadingBlock> = ({ content, className }) => (
	<div className={cn('w-full', 'flex', 'justify-center')}>
		<div
			className={cn(
				'text-center',
				'text-white',
				'bg-blue-600',
				'text-xl',
				'w-[29rem]',
				'h-16',
				'flex',
				'items-center',
				'justify-center',
				className
			)}
		>
			<p>{content.toUpperCase()}</p>
		</div>
	</div>
);

export default HeadingBlock;
