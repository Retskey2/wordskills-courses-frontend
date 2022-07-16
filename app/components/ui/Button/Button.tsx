import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'

import styles from './Button.module.scss'

interface IButton {
	variant?: 'white' | 'arrow'
	className?: string
}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	variant = 'blue',
	className,
}) => {
	return (
		<button
			className={cn(
				{
					[styles.white]: variant === 'white',
					[styles.arrow]: variant === 'arrow',
				},
				styles.button,
				className
			)}
		>
			{children}
		</button>
	)
}

export default Button
