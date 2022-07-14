import cn from 'classnames'
import { FC } from 'react'

import styles from './Typography.module.scss'

interface HeadingProps {
	title: string
	small?: boolean
	center?: boolean
	className?: string
}

const Heading: FC<HeadingProps> = ({ title, small, center, className }) => {
	return (
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
	)
}

export default Heading
