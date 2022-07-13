import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'

import styles from './Button.module.scss'

interface ButtonProps {
	outlined?: boolean
	className?: string
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
	children,
	outlined,
	className,
}) => {
	return (
		<button
			className={cn(
				outlined ? cn(styles.button, styles.outlined) : styles.button,
				className
			)}
		>
			{children}
		</button>
	)
}

export default Button
