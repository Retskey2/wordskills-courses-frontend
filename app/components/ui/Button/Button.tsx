import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'

import styles from './Button.module.scss'

interface IButton {
	variant?: 'white' | 'arrow' | 'outline'
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
					[styles.outline]: variant === 'outline',
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
