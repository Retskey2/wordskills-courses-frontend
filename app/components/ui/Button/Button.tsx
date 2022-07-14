import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'

import arrow from '@/assets/image/Vector.svg'

import styles from './Button.module.scss'

interface ButtonProps {
	variant: 'blue' | 'white' | 'arrow'
	className?: string
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
	children,
	variant,
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
