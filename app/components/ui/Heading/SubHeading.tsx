import cn from 'classnames'
import { Children, FC, PropsWithChildren } from 'react'

interface ISubHeading {
	small?: boolean
	center?: boolean
	className?: string
}

const SubHeading: FC<PropsWithChildren<ISubHeading>> = ({
	children,
	small,
	center,
	className,
}) => {
	return (
		<div
			className={cn(
				small
					? 'text-[28px] font-normal text-gray-500'
					: 'text-[40px] font-semibold',
				center ? 'text-center' : 'text-left',
				className
			)}
		>
			{children}
		</div>
	)
}

export default SubHeading
